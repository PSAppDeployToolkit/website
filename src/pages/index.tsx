// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
// @ts-ignore
import Heading from '@theme/Heading';

// @ts-ignore
import ThemedImage from '@theme/ThemedImage';

// @ts-ignore
import useBaseUrl from '@docusaurus/useBaseUrl';
const heroImageDark = `/images/psadt-logo.svg`;
const heroImageLight = `/images/psadt-logo.svg`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row flex-col-reverse">
          <div className="col col--7">
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.introText}>
              PSAppDeployToolkit uses a standardized workflow for Windows software deployment, a consistent unified User Experience for every software install, and a library of PowerShell functions to simplify common deployment tasks.
            </p>
            <p className={styles.introText}>
              Combined with rich automated logging of every action, PSADT produces consistently high deployment success rates, and is the de facto standard framework used by organizations for deploying Windows software at scale.
            </p>

            {/* <div className={styles.startedButton}>
            <Link
              to="/getting-started"
            >
              Start building
            </Link>
          </div> */}
          </div>
          <div className="col col--5">
            <ThemedImage
              alt="Logo"
              sources={{
                light: heroImageLight,
                dark: heroImageDark,
              }}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Enterprise app deployment, simplified.">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
