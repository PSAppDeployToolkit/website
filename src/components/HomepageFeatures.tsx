// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import Newsletter from './Newsletter';

const FeatureList = [
  {
    title: 'PSAppDeployToolkit',
    image: require('@site/static/images/powershell.png').default,
    description: <>PSADT is a framework for deploying applications in a business / corporate environment.</>,
  },
  {
    title: 'Best Practices',
    image: require('@site/static/images/deployment.png').default,
    description: (
      <>
        Our standardised deployment template ensures app deployments adhere to best practices and follow a standard
        workflow.
      </>
    ),
  },
  {
    title: 'Community Driven',
    image: require('@site/static/images/global.png').default,
    description: <>PSAppDeployToolkit is a community-oriented project with an emphasis on transparency.</>,
  },
];

const CapabilityList = [
  {
    title: 'Pre-Build Powershell Functions',
    description: (
      <>
        Pre-built functions come with automated logging - so you can quickly find problems in your scripts if they
        occur.
        <br></br>
        <br></br>
        Supports installation of applications on Citrix / Remote Desktop Session Host Servers
        <br></br>
        <br></br>
        Perform MCM actions such as Machine and User Policy Refresh, Inventory Update and Software Update
      </>
    ),
  },
  {
    title: '3rd-Party Integration',
    description: (
      <>
        Handles MCM exit codes, including time sensitive dialogs supporting *MCM Fast Retry* - providing more accurate
        Reporting (no more Failed due to timeout errors).
        <br></br>
        <br></br>
        Supports the MCM application model by providing an install and uninstall deployment type for every deployment
        script.
      </>
    ),
  },
  {
    title: 'User Experience',
    description: (
      <>
        An indeterminate progress dialog with customizable message text that can be updated throughout the deployment.
        <br></br>
        <br></br>
        Branding of the above UI components using a custom logo icon and banner for your own Organization.
        <br></br>
        <br></br>
        The UI is localized into several languages and more can be easily added using the XML configuration file.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureColumns)}>
      <div className="padding-horiz--md">
        <h3 className={styles.featureHeader}>{title}</h3>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

function Capability({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureColumns, styles.capabilityColumns)}>
      <div className="padding-horiz--md">
        <h3 className={styles.capabilityHeader}>{title}</h3>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div> */}

      <div className="container">
        <div className={clsx('row', styles.blockStyling)}>
          <div className="col col--4">
            <img className={styles.blockImage} src="/images/features-laptop.svg" alt="PSAppDeployToolkit" />
          </div>
          <div className="col col--8">
            <p className={styles.blockTitle}>
              <span className={styles.logoThickText}>Standardize and enhance </span> every software deployment
            </p>
            <p className={styles.blockText}>
              PSAppDeployToolkit allows you to encapsulate a typical Windows Installer MSI or Setup executable to
              provide it with enhanced capabilities.
            </p>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--6', styles.blockText)}>
                  <ul>
                    <li>
                      <p>Validate prerequisites such as dependencies on minimum software versions</p>
                    </li>
                    <li>
                      <p>Ensure that in-use applications are closed and prevent reopening during the deployment</p>
                    </li>
                  </ul>
                </div>
                <div className={clsx('col col--6', styles.blockText)}>
                  <ul>
                    <li>
                      <p>Capture any important settings that may be required for an upgrade or migration</p>
                    </li>
                    <li>
                      <p>Run the installation silently and capture logs in the event of an issue</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link to="/features">
              <button className={clsx('button button--outline button--secondary', styles.buttonLink)}>
                {' '}
                View more features
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={clsx('row', styles.blockStyling)}>
          <div className="col col--8">
            <p className={styles.blockTitle}>
              <span className={styles.logoThickText}>A robust and battle-tested</span> deployment framework
            </p>
            <p className={styles.blockText}>
              PSAppDeployToolkit was built with large enterprise environments in mind, where stability is absolutely
              crucial to ensure the success of mass deployments.
            </p>
            <p className={styles.blockText}>
              That stability is exactly why PSAppDeployToolkit is used by Fortune 500 companies and federal governments,
              banks, globally recognized brands, white-label packaging factories, defense contractors and military,
              in-house IT teams, consultants and managed service providers to deploy applications on millions of Windows
              endpoints all over the world every day.
            </p>
            <Link to="/features">
              <button className={clsx('button button--outline button--secondary', styles.buttonLink)}>
                Learn more
              </button>
            </Link>
          </div>
          <div className="col col--4">
            <img className={styles.blockImage} src="/images/features-task.svg" alt="PSAppDeployToolkit" />
          </div>
        </div>
      </div>

      <div className={styles.contrastContainer}>
        <div className={clsx('container', styles.capabilitiesContainer)}>
          <p className={styles.capabilitiesTitle}>
            <span className={styles.logoThickText}>Feature</span> capabilities
          </p>
          <div className="row">
            {CapabilityList.map((feature) => (
              <Capability key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={clsx('row', styles.blockStyling)}>
          <Newsletter />
        </div>
      </div>
    </section>
  );
}
