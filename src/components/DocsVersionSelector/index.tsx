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

function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}

function getVersionTargetDoc(version, activeDocContext) {
  return (
    activeDocContext.alternateDocVersions[version.name] ??
    getVersionMainDoc(version)
  );
}

export default function DocsVersionSelector(): React.JSX.Element | null {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Close on click outside
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, handleClickOutside]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

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

  return (
    <div className={styles.container} ref={containerRef}>
      <span className={styles.label}>Docs Version:</span>
      <button
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
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
        <ul className={styles.dropdown} role="listbox">
          {versions.map((version) => {
            const isActive = version === activeDocContext.activeVersion;
            return (
              <li
                key={version.name}
                role="option"
                aria-selected={isActive}
                className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                onClick={() => handleVersionClick(version)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleVersionClick(version);
                  }
                }}
                tabIndex={0}
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
