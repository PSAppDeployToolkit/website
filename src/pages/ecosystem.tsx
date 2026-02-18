import { useState, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ecosystem.module.css';
import { solutions, SOLUTION_CATEGORIES } from '../data/ecosystem';
import type { Solution } from '../data/ecosystem';

type TypeFilter = 'all' | 'commercial' | 'free';

const EditPage = 'https://github.com/PSAppDeployToolkit/website/blob/main/src/data/ecosystem.tsx' as const;

const WORKS_WITH_OPTIONS = ['ConfigMgr', 'Intune', 'Standalone'] as const;

function SolutionCard({ solution }: { solution: Solution }) {
  const initial = solution.name.charAt(0).toUpperCase();
  const { colorMode } = useColorMode();
  const logoSrc =
    colorMode === 'dark' && solution.logoDark
      ? solution.logoDark
      : solution.logo;

  return (
    <div className={styles.solutionCard}>
      <div className={styles.logoContainer}>
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${solution.name} logo`}
            className={styles.logoImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.logoFallback} role="img" aria-label={`${solution.name} logo`}>{initial}</div>
        )}
      </div>
      <p className={styles.cardName}>
        <a href={solution.url} target="_blank" rel="noopener noreferrer">
          {solution.name}
        </a>
      </p>
      <p className={styles.cardDescription}>{solution.description}</p>
      <div className={styles.badgeGroups}>
        {/* License row */}
        <div className={styles.badgeRow}>
          <span className={styles.badgeRowLabel}>License:</span>
          <span
            className={clsx(
              styles.badgeLicense,
              solution.type === 'commercial'
                ? styles.badgeLicenseCommercial
                : styles.badgeLicenseFree,
            )}
          >
            {solution.type === 'commercial' ? 'Commercial' : 'Free'}
          </span>
        </div>
        {/* Works With row */}
        <div className={styles.badgeRow}>
          <span className={styles.badgeRowLabel}>Works with:</span>
          {solution.worksWith.map((w) => (
            <span key={w} className={styles.badgeWorksWith}>
              {w}
            </span>
          ))}
        </div>
        {/* Capabilities row */}
        <div className={styles.badgeRow}>
          <span className={styles.badgeRowLabel}>Capabilities:</span>
          {solution.categories.map((cat) => (
            <span key={cat} className={styles.badgeCapability}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EcosystemPage() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [selectedWorksWith, setSelectedWorksWith] = useState<Set<string>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const toggleWorksWith = useCallback((value: string) => {
    setSelectedWorksWith((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setTypeFilter('all');
    setSelectedWorksWith(new Set());
    setSelectedCategories(new Set());
  }, []);

  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      if (typeFilter !== 'all' && solution.type !== typeFilter) {
        return false;
      }
      if (selectedWorksWith.size > 0) {
        const hasMatch = solution.worksWith.some((w) => selectedWorksWith.has(w));
        if (!hasMatch) {
          return false;
        }
      }
      if (selectedCategories.size > 0) {
        const hasMatch = solution.categories.some((cat) => selectedCategories.has(cat));
        if (!hasMatch) {
          return false;
        }
      }
      return true;
    });
  }, [typeFilter, selectedWorksWith, selectedCategories]);

  const hasActiveFilters =
    typeFilter !== 'all' || selectedWorksWith.size > 0 || selectedCategories.size > 0;

  return (
    <Layout
      title="Ecosystem"
      description="Explore the PSAppDeployToolkit ecosystem of partner solutions, integrations, and tools for enterprise application packaging and deployment."
    >
      <section className={clsx(styles.ecosystemPage, 'page-shell')}>
        <motion.div
          className={clsx('container', styles.headerBlock)}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Heading as="h1" className={styles.heroTitle}>Eco<span className={styles.accent}>system</span></Heading>
          <p className={styles.subtitle}>
            Explore the PSADT ecosystem of partner solutions, integrations, and tools for application packaging and
            deployment.
          </p>
        </motion.div>

        <motion.div
          className={clsx('container', styles.pageLayout)}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...spring, delay: prefersReducedMotion ? 0 : 0.08 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Filter Sidebar */}
          <aside className={styles.filterSidebar}>
            <div className={styles.filterSection}>
              <div className={styles.filterLabel} id="filter-license-label">License</div>
              <div className={styles.filterButtons} role="group" aria-labelledby="filter-license-label">
                {(['all', 'commercial', 'free'] as const).map((type) => (
                  <button
                    key={type}
                    className={clsx(styles.filterButton, typeFilter === type && styles.filterButtonActive)}
                    onClick={() => setTypeFilter(type)}
                    type="button"
                    aria-pressed={typeFilter === type}
                  >
                    {type === 'all' ? 'All' : type === 'commercial' ? 'Commercial' : 'Free'}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterLabel} id="filter-workswith-label">Works With</div>
              <div className={styles.filterButtons} role="group" aria-labelledby="filter-workswith-label">
                {WORKS_WITH_OPTIONS.map((option) => (
                  <button
                    key={option}
                    className={clsx(styles.filterButton, selectedWorksWith.has(option) && styles.filterButtonActive)}
                    onClick={() => toggleWorksWith(option)}
                    type="button"
                    aria-pressed={selectedWorksWith.has(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <div className={styles.filterLabel} id="filter-capabilities-label">Capabilities</div>
              <div className={styles.filterButtons} role="group" aria-labelledby="filter-capabilities-label">
                {SOLUTION_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={clsx(styles.filterButton, selectedCategories.has(category) && styles.filterButtonActive)}
                    onClick={() => toggleCategory(category)}
                    type="button"
                    aria-pressed={selectedCategories.has(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterFooter}>
              <span className={styles.resultCount}>
                {filteredSolutions.length} of {solutions.length} solutions
              </span>
              {hasActiveFilters && (
                <button className={styles.clearButton} onClick={clearFilters} type="button">
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Solution Grid */}
          <div className={styles.solutionGrid}>
            {filteredSolutions.length > 0 ? (
              filteredSolutions.map((solution) => <SolutionCard key={solution.name} solution={solution} />)
            ) : (
              <div className={styles.emptyState}>
                <p>No solutions match your current filters.</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className={clsx('container', styles.footerBlock)}
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className={styles.subtitle}>
            Want to see your solution added to this page?
            <b>
              <a href={EditPage} target="_blank" rel="noopener noreferrer" className={styles.gitHubLink}>
                {' '}
                Add and submit a PR on GitHub.
              </a>
            </b>
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
