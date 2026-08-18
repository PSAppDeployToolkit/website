import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useHistory} from '@docusaurus/router';
import {
  useVersions,
  useActiveDocContext,
  useDocsVersionCandidates,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import {useHistorySelector} from '@docusaurus/theme-common';
import styles from './DocsVersionSelector.module.css';
import {resolveVersionTargetDoc} from './versionDocMappings';

function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}

function getVersionReferenceDoc(version) {
  return version.docs.find((doc) => doc.id === 'reference');
}

function getVersionTargetDoc(version, activeDocContext) {
  const activeDocId = activeDocContext.activeDoc?.id;
  const alternateDoc = activeDocContext.alternateDocVersions[version.name];
  const referenceDoc = activeDocId?.startsWith('reference/')
    ? getVersionReferenceDoc(version)
    : undefined;

  return (
    resolveVersionTargetDoc(version, activeDocId, {fallback: alternateDoc}) ??
    referenceDoc ??
    getVersionMainDoc(version)
  );
}

export default function DocsVersionSelector(): React.JSX.Element | null {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const history = useHistory();

  const docsPluginId = undefined; // default plugin
  const versions = useVersions(docsPluginId);
  const activeDocContext = useActiveDocContext(docsPluginId);
  const candidates = useDocsVersionCandidates(docsPluginId);
  const {savePreferredVersionName} = useDocsPreferredVersion(docsPluginId);
  const search = useHistorySelector((h) => h.location.search);
  const hash = useHistorySelector((h) => h.location.hash);

  // Determine displayed version from candidates
  const displayedVersion =
    candidates.find((c) => versions.includes(c)) ?? versions[0];

  const activeVersionIndex = Math.max(
    versions.findIndex((v) => v === activeDocContext.activeVersion),
    0,
  );

  // Close on click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, handleClickOutside]);

  // Move DOM focus to the highlighted option (roving tabindex)
  useEffect(() => {
    if (open) {
      optionRefs.current[activeIndex]?.focus();
    }
  }, [open, activeIndex]);

  const openMenu = (initialIndex: number) => {
    setActiveIndex(initialIndex);
    setOpen(true);
  };

  const closeMenu = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) {
      triggerRef.current?.focus();
    }
  };

  // Single version: render static label
  if (versions.length <= 1) {
    return (
      <div className={styles.container}>
        <span className={styles.label}>Docs Version:</span>
        <span className={styles.trigger}>{displayedVersion?.label}</span>
      </div>
    );
  }

  const handleVersionClick = (version) => {
    const targetDoc = getVersionTargetDoc(version, activeDocContext);
    savePreferredVersionName(version.name);
    setOpen(false);
    history.push(`${targetDoc.path}${search}${hash}`);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'Enter':
      case ' ':
        e.preventDefault();
        openMenu(activeVersionIndex);
        break;
      case 'ArrowUp':
        e.preventDefault();
        openMenu(versions.length - 1);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % versions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + versions.length) % versions.length);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(versions.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleVersionClick(versions[activeIndex]);
        break;
      case 'Escape':
        e.preventDefault();
        closeMenu();
        break;
      case 'Tab':
        closeMenu(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <span className={styles.label}>Docs Version:</span>
      <button
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => (open ? closeMenu(false) : openMenu(activeVersionIndex))}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={open}
        aria-haspopup="listbox"
        type="button"
      >
        {displayedVersion.label}
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          className={styles.dropdown}
          role="listbox"
          onKeyDown={handleListKeyDown}
        >
          {versions.map((version, index) => {
            const isActive = version === activeDocContext.activeVersion;
            return (
              <li
                key={version.name}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                role="option"
                aria-selected={isActive}
                className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                onClick={() => handleVersionClick(version)}
                tabIndex={index === activeIndex ? 0 : -1}
              >
                {version.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
