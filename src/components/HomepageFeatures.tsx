// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './HomepageFeatures.module.css';
// import Newsletter from './Newsletter';

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
        Our standardized deployment template ensures app deployments adhere to best practices and follow a standard
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

// Not used. remove?
function Feature({ image, title, description }: { image: string; title: string; description: React.ReactNode }) {
  return (
    <div className={clsx('col col--4', styles.featureColumns)}>
      <div className="padding-horiz--md">
        <h3 className={styles.featureHeader}>{title}</h3>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

type CapabilityProps = {
  title: string;
  description: React.JSX.Element;
};

function Capability({ title, description }: CapabilityProps) {
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

      {/* <div className="container">
        <div className={clsx('row', styles.blockStyling)}>
          <Newsletter />
        </div>
      </div> */}

      <div className={styles.contrastContainer}>
        <div className={clsx('container')}>
          <div className={clsx('row', styles.blockStyling, styles.upcomingConferences)}>
          <div className="col col--7">
        <p className={styles.blockTitle}>
          <span className={styles.logoThickText}>Upcoming conferences</span> and <span className={styles.logoThickText}>community events</span></p>

        <p>
          We'll be there to spread the good word about PSAppDeployToolkit and to share our knowledge with you. We're there to help answer your questions and help you be successful. So come talk to us. No really... We're lonely.
        </p>
      </div>



            <div className="col col--7">

              <div className="container">
                <div className="row">
                  <div className={clsx('col col--5', styles.blockText)}>
                    <ul>
                      <li>
                        <div>
                          <Link to="https://www.endpointsummit.com"><b><s>Endpoint Summit 2025</s></b></Link>
                        </div>
                        <div><s>23-25 April 2025 <br/> Paris, France</s></div>
                      </li>
                      <li>
                        <div>
                          <Link to="https://developer.microsoft.com/en-us/reactor/events/25871/?wt.mc_id=3reg_25871_webpage_reactor"><b><s>Workplace Ninjas Toronto 2025</s></b></Link>
                        </div>
                        <div><s>June 13th <br/> Toronto, Canada</s></div>
                      </li>
                      <li>
                        <div>
                          <Link to="https://wpninjas.uk"><b><s>Workplace Ninjas UK 2025</s></b></Link>
                        </div>
                        <div><s>June 16th & 17th <br/> Edinburgh, United Kingdom</s></div>
                      </li>
                      </ul>
                      </div>
                  <div className={clsx('col col--5', styles.blockText)}>
                      <ul>
                      <li>
                        <div>
                          <Link to="https://appmanagevent.com"><b>AppManagEvent 2025</b></Link>
                        </div>
                        <div>October 10th <br/> Utrecht, The Netherlands</div>
                      </li>
                      <li>
                        <div>
                          <Link to="https://mmsmoa.com/mms2025music"><b>MMS Music City Edition 2025</b></Link>
                        </div>
                        <div>October 12th to 15th <br/> Nashville, Tennessee, USA</div>
                      </li>
                      <li>
                        <div>
                          <Link to="https://workplaceninjas.us"><b>Workplace Ninjas US 2025</b></Link>
                        </div>
                        <div>December 9th & 10th <br/> Dallas, Texas, USA</div>
                      </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--5">
              <div className={styles.imageContainer}>
                <img
                  className={styles.conferencesImage}
                  src={
                    useColorMode().colorMode === 'dark'
                      ? "/images/AME-Banner-DarkBackground.png"
                      : "/images/AME-Banner-LightBackground.png"
                  }
                  alt="AppManage2025"
                />
                <img
                  className={styles.conferencesImage}
                  src="/images/MMSMusicCity.webp"
                  alt="MMS: Music City Edition 2025"
                />
                <img
                  className={styles.conferencesImage}
                  src="/images/WPNinjas.png"
                  alt="WP Ninjas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
