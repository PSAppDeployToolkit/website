import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Newsletter from '../components/Newsletter';
import { featureGroups } from '../data/features';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/psappdeploytoolkit/psappdeploytoolkit';

const VALUE_PROPS = [
  {
    icon: '/images/features/worker_package.svg',
    title: 'Battle-tested Workflow',
    description: 'Standardized install, uninstall, and repair deployment types.',
  },
  {
    icon: '/images/features/application_window.png',
    title: 'Customizable UI',
    description: 'A consistent, branded deployment experience for end users.',
  },
  {
    icon: '/images/features/code.svg',
    title: '120+ Functions',
    description: 'An extensive library for common deployment tasks.',
  },
] as const;

const HIGHLIGHTS = [
  { stat: '10+', label: 'Years', detail: 'Battle-tested since 2013' },
  { stat: 'Fortune 500', label: 'Trusted', detail: 'Enterprise-grade' },
  { stat: '120+', label: 'Functions', detail: 'Comprehensive toolkit' },
  { stat: '25', label: 'Languages', detail: 'Global localization' },
] as const;

function HeroBanner() {
  const prefersReducedMotion = useReducedMotion();
  const d = prefersReducedMotion ? 0 : undefined;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: d ?? 0.5 } },
  };

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={clsx('row', styles.heroRow)}>
          <motion.div
            className={clsx('col col--7', styles.heroTextCol)}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Heading as="h1" className={styles.heroTitle}>
                Enterprise App Deployment.
                <br />
                <span className={styles.heroAccent}>Simplified.</span>
              </Heading>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              A PowerShell-based framework to simplify and standardize deploying software to Windows, at scale.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/docs/introduction">
                Get Started
              </Link>
              <Link className="button button--secondary button--lg" to={GITHUB_URL}>
                View on GitHub
              </Link>
            </motion.div>
          </motion.div>

          <div className={clsx('col col--5', styles.heroVisualCol)}>
            <div className={styles.screenshotContainer}>
              <motion.img
                src="/images/psadt-logo.svg"
                alt=""
                className={styles.heroWatermark}
                animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                aria-hidden="true"
              />

              <motion.img
                src="/images/screenshots/app_screenshot_lightmode.png"
                alt="PSADT Fluent UI light mode"
                className={clsx(styles.screenshot, styles.screenshotLight)}
                initial={{ opacity: 0, x: 56, rotate: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, rotate: 0, filter: 'blur(0px)' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0 }
                }
              />

              <motion.img
                src="/images/screenshots/app_screenshot_darkmode.png"
                alt="PSADT Fluent UI dark mode"
                className={clsx(styles.screenshot, styles.screenshotDark)}
                initial={{ opacity: 0, x: 56, rotate: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, rotate: 0, filter: 'blur(0px)' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatIsSection() {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.6 } },
  };

  const cardContainer = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.4 } },
  };

  return (
    <motion.section
      className={clsx('section-shell', styles.whatIsSection)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className={clsx('row', styles.whatIsRow)}>
          <div className={clsx('col col--6', styles.whatIsText)}>
            <Heading as="h2" className={styles.sectionHeading}>
              What is <span className={styles.heroAccent}>PSADT</span>?
            </Heading>
            <p className={styles.sectionDescription}>
              PSAppDeployToolkit is a free, open-source PowerShell framework that gives IT professionals a
              battle-tested, enterprise-ready system for deploying applications to Windows endpoints. It handles every
              stage of application lifecycle — from discovery and installation through removal — with a rich UI, deep
              platform integration, and comprehensive logging.
            </p>
          </div>

          <motion.div
            className="col col--6"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.valuePropGrid}>
              {VALUE_PROPS.map((prop) => (
                <motion.div key={prop.title} className={styles.valuePropCard} variants={cardItem}>
                  <img src={prop.icon} alt="" className={styles.valuePropIcon} aria-hidden="true" />
                  <div>
                    <strong className={styles.valuePropTitle}>{prop.title}</strong>
                    <p className={styles.valuePropDescription}>{prop.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function HighlightsStrip() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.4 } },
  };

  return (
    <motion.section
      className={clsx('section-shell', styles.highlightsSection)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className={styles.highlightsGrid}>
          {HIGHLIGHTS.map((h) => (
            <motion.div key={h.label} className={styles.highlightItem} variants={item}>
              <span className={styles.highlightStat}>{h.stat}</span>
              <span className={styles.highlightLabel}>{h.label}</span>
              <span className={styles.highlightDetail}>{h.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FeaturePreview() {
  const prefersReducedMotion = useReducedMotion();
  const previewFeatures = featureGroups.slice(0, 6);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.4 } },
  };

  return (
    <motion.section
      className={clsx('section-shell', styles.featureSection)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Built for <span className={styles.heroAccent}>Enterprise</span>
        </Heading>
        <p className={clsx(styles.sectionDescription, styles.sectionDescriptionCenter)}>
          Everything you need to deploy, manage, and monitor applications at scale.
        </p>

        <motion.div
          className={styles.featureGrid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {previewFeatures.map((feature) => (
            <motion.div key={feature.title} className={styles.featureCard} variants={item}>
              <img src={feature.icon} alt="" className={styles.featureIcon} aria-hidden="true" />
              <Heading as="h3" className={styles.featureCardTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureCardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.featureCtaRow}>
          <Link className="button button--secondary button--lg" to="/features">
            Explore All Features
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

function NewsletterSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={clsx('section-shell', styles.newsletterSection)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className="row split-row">
          <Newsletter />
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <Layout description="Enterprise app deployment, simplified.">
      <HeroBanner />
      <main className="page-shell">
        <WhatIsSection />
        <HighlightsStrip />
        <FeaturePreview />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
