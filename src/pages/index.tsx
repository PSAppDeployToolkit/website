import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Newsletter from '../components/Newsletter';
import { motion, useReducedMotion } from 'framer-motion';
import { homeFeatures } from '../data/homeFeatures';
import { testimonials } from '../data/testimonials';
import { FaGithub, FaDiscord, FaReddit } from 'react-icons/fa';
import { SiDiscourse } from 'react-icons/si';
import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/psappdeploytoolkit/psappdeploytoolkit';

const communityLinks = [
  { label: 'GitHub', icon: FaGithub, href: GITHUB_URL },
  { label: 'Discord', icon: FaDiscord, href: 'https://discord.com/channels/618712310185197588/627204361545842688' },
  { label: 'Discourse', icon: SiDiscourse, href: 'https://discourse.psappdeploytoolkit.com' },
  { label: 'Reddit', icon: FaReddit, href: 'https://reddit.com/r/psadt' },
];

function HeroBanner() {
  const prefersReducedMotion = useReducedMotion();

  // Read data-theme directly from the DOM. Docusaurus injects a blocking <script>
  // in <head> that sets data-theme before React hydrates, so this is always
  // correct at animation time — no useColorMode hydration race condition.
  const isDark =
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : false;

  // Top screenshot always animates first (delay 0), bottom second (delay 0.55).
  // CSS swaps which image is visually top/bottom based on the theme.
  const lightDelay = isDark ? 0.55 : 0;
  const darkDelay  = isDark ? 0    : 0.55;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, x: -80, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring' as const, duration: 0.55, bounce: 0 },
    },
  };

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={clsx('row', styles.heroRow)}>
          <motion.div
            className={clsx('col col--6', styles.heroTextCol)}
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

            {/* Mobile-only screenshots: shown between title and subtitle on small screens */}
            <motion.div variants={fadeUp} className={styles.mobileScreenshotWrapper}>
              <div className={styles.screenshotContainer}>
                <motion.img
                  src="/images/screenshots/app_screenshot_lightmode.png"
                  alt="PSADT Fluent UI light mode"
                  className={clsx(styles.screenshot, styles.screenshotLight)}
                  initial={{ opacity: 0, x: 500, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: lightDelay }
                  }
                />
                <motion.img
                  src="/images/screenshots/app_screenshot_darkmode.png"
                  alt="PSADT Fluent UI dark mode"
                  className={clsx(styles.screenshot, styles.screenshotDark)}
                  initial={{ opacity: 0, x: 500, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: darkDelay }
                  }
                />
              </div>
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

          <div className={clsx('col col--6', styles.heroVisualCol)}>
            <div className={styles.screenshotContainer}>
              <motion.img
                src="/images/screenshots/app_screenshot_lightmode.png"
                alt="PSADT Fluent UI light mode"
                className={clsx(styles.screenshot, styles.screenshotLight)}
                initial={{ opacity: 0, x: 500, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: lightDelay }
                }
              />

              <motion.img
                src="/images/screenshots/app_screenshot_darkmode.png"
                alt="PSADT Fluent UI dark mode"
                className={clsx(styles.screenshot, styles.screenshotDark)}
                initial={{ opacity: 0, x: 500, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: darkDelay }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      aria-label="PSAppDeployToolkit"
      className={styles.logoBanner}
      initial={{ opacity: 0, x: -80, filter: 'blur(4px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { type: 'spring' as const, duration: 0.55, bounce: 0 }
      }
    >
      <div className="container">
        <img
          src="/images/psadt-light-navheader.png"
          alt="PSAppDeployToolkit"
          className={clsx(styles.psadtLogo, styles.logoLight)}
        />
        <img
          src="/images/psadt-dark-navheader.png"
          alt="PSAppDeployToolkit"
          className={clsx(styles.psadtLogo, styles.logoDark)}
        />
      </div>
    </motion.section>
  );
}

function FeatureHighlights() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <motion.section
      className={clsx('section-shell', styles.featureHighlights)}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={spring}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <Heading as="h2" className="sr-only">Why PSADT</Heading>
        <div className={styles.featureGrid}>
          {homeFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={clsx(styles.featureCard, 'calm-card')}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <img
                src={feature.icon}
                alt=""
                className={styles.featureIcon}
                loading="lazy"
                width={48}
                height={48}
              />
              <Heading as="h3" className={styles.featureTitle}>{feature.title}</Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <p className={styles.featureLink}>
          <Link to="/features">See all features</Link>
        </p>
      </div>
    </motion.section>
  );
}

function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <motion.section
      className={clsx('section-shell', styles.testimonials)}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={spring}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <Heading as="h2" className="sr-only">What People Are Saying</Heading>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              <p className={styles.testimonialAttribution}>
                <strong>{t.name}</strong>
                <br />
                {t.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function CommunityBar() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <motion.section
      className={clsx('section-shell', styles.communityBar)}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={spring}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <Heading as="h2" className="sr-only">Community</Heading>
        <div className={styles.communityRow}>
          {communityLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.communityLink}>
              <link.icon size={24} aria-hidden="true" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function NewsletterSection() {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <motion.section
      className={clsx('section-shell', styles.newsletterSection)}
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={spring}
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
      <main className="page-shell">
        <LogoBanner />
        <HeroBanner />
        <FeatureHighlights />
        <Testimonials />
        <CommunityBar />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
