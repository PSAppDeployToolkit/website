import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { featureGroups } from '../data/features';
import type { FeatureGroup } from '../data/features';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './features.module.css';

function PageHeader() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <motion.header
      className={styles.pageHeader}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={spring}
    >
      <Heading as="h1" className={styles.pageTitle}>
        Features
      </Heading>
      <p className={styles.pageSubtitle}>Everything you need to deploy applications with confidence.</p>
    </motion.header>
  );
}

function FeatureGroupCard({ group, index }: { readonly group: FeatureGroup; readonly index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  const itemContainer = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.04 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -8, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring' as const, duration: 0.3, bounce: 0 },
    },
  };

  return (
    <motion.div
      className={styles.groupCard}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ ...spring, delay: prefersReducedMotion ? 0 : index * 0.05 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className={styles.groupHeader}>
        <img src={group.icon} alt="" className={styles.groupIcon} />
        <div className={styles.groupHeaderText}>
          <Heading as="h2" className={styles.groupTitle}>
            {group.title}
          </Heading>
          <p className={styles.groupDescription}>{group.description}</p>
        </div>
      </div>

      <motion.ul
        className={styles.itemsGrid}
        variants={itemContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {group.items.map((item) => (
          <motion.li key={item.text} className={styles.featureItem} variants={itemVariant}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className={styles.featureText}>
              {item.text}
              {item.version && <span className={styles.versionBadge}>{item.version}</span>}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function FeaturesPage() {
  return (
    <Layout title="Features" description="Everything you need to deploy applications with confidence.">
      <main className={clsx('page-shell', styles.featuresPage)}>
        <div className="container">
          <PageHeader />
          <div className={styles.groupList}>
            {featureGroups.map((group, i) => (
              <FeatureGroupCard key={group.title} group={group} index={i} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
