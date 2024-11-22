// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Heading from '@theme/Heading';

import ThemedImage from '@theme/ThemedImage';

import useBaseUrl from '@docusaurus/useBaseUrl';
const heroImageDark = `/images/psadt-dark-logo.svg`;
const heroImageLight = `/images/psadt-light-logo.svg`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row flex-col-reverse">
          <div className="col col--7">
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.introText}>
              PSAppDeployToolkit is a versatile solution that streamlines and standardizes the process of software
              deployment, making it easier than ever to manage your IT environment. It has a comprehensive set of
              features, such as dynamic logging, user interaction capabilities, and customizable functionality.
            </p>

            {/* <div className={styles.startedButton}>
            <Link
              to="/docs/getting-started"
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
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
