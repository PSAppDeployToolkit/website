// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import styles from './features.module.css';
import Layout from '@theme/Layout';

export default function FeaturesPage() {
  return (
    <Layout title="Features" description="PSAppDeployToolkit">

<section className={styles.features}>

<div className="container">
  <div className={clsx("row", styles.blockStyling)}>
    <div className="col col--7">
      <p className={styles.blockTitle}><span className={styles.logoThickText}>Standardize and enhance </span> every software deployment</p>
      <p className={styles.blockText}>PSAppDeployToolkit allows you to encapsulate a typical Windows Installer MSI or Setup executable to provide it with enhanced capabilities.</p>
      <div className="container">
        <div className="row">
          <div className={clsx("col", styles.blockText)}>
            <ul>
              <li>
                <p>Validate prerequisites such as dependencies on minimum software versions</p>
              </li>
              <li>
                <p>Ensure that in-use applications are closed and prevent reopening during the deployment</p>
              </li>
              <li>
                <p>Check with the user if now is a good time to start an install and allow them to defer</p>
              </li>
              <li>
                <p>Uninstall existing applications and perform clean up operations</p>
              </li>
            </ul>
          </div>
          <div className={clsx("col", styles.blockText)}>
            <ul>
              <li>
                <p>Capture any important settings that may be required for an upgrade or migration</p>
              </li>
              <li>
                <p>Run the installation silently and capture logs in the event of an issue</p>
              </li>
              <li>
                <p>Run post-installation configuration tasks to customize for your environment</p>
              </li>
              <li>
                <p>Prompt the user to restart their computer if required, immediately, on a timer and with a deadline</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div className="col col--5">
      <img className={styles.blockImage} src="/images/features-worker-male-longbeard.svg" alt="PSAppDeployToolkit" />
    </div>
  </div>
</div>

<div className="container">
  <div className={clsx("row", styles.blockStyling)}>
    <div className="col col--5">
    <img className={styles.blockImage} src="/images/features-module.svg" alt="PSAppDeployToolkit" />
    </div>
    <div className="col col--7">
      <p className={styles.blockTitle}><span className={styles.logoThickText}>A robust and battle-tested</span> deployment framework</p>
      <p className={styles.blockText}>PSAppDeployToolkit was built with large enterprise environments in mind, where stability is absolutely crucial to ensure the success of mass deployments.</p>
      <p className={styles.blockText}>That stability is exactly why PSAppDeployToolkit is used by Fortune 500 companies and federal governments, banks, globally recognized brands, white-label packaging factories, defence contractors and military, in-house IT teams, consultants and managed service providers to deploy applications on millions of Windows endpoints all over the world every day.</p>
    </div>
  </div>
</div>


<div className={clsx("container", styles.capabilitiesContainer)}>
  <h2 className={styles.blockTitle}><span className={styles.logoThickText}>Capability and Feature</span> Details</h2>
    <div className={styles.featureColumns}>
    <h3>Pre-Built Powershell Functions</h3>
    <div className="row">
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
              <li>Pre-built functions come with automated logging - so you can quickly find problems in your scripts if they occur.</li>
              <li>Provides the ability to execute any type of setup (Windows Installer or Executable-based) with automated exit code handling, as well as MSI-based installers having their logs captured and  stored alongside PSAppDeployToolkit logs.</li>
              <li>Mass remove MSI applications with a partial match (e.g. remove all versions of all MSI applications which match *Office*)</li>
              <li>Perform MCM actions such as Machine and User Policy Refresh, Inventory Update and Software Update</li>
              <li>Supports installation of applications on Citrix / Remote Desktop Session Host Servers</li>
              <li>Check whether a PowerPoint slide show is running in full screen presentation mode</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
              <li>Update Group Policy</li>
              <li>Copy / Delete Files</li>
              <li>Get / Set / Remove Registry Keys and Values</li>
              <li>Get / Set INI File Keys and Values</li>
              <li>Check File versions</li>
              <li>Pin or Unpin applications to the Start Menu or Task Bar</li>
              <li>Create Start Menu Shortcuts</li>
              <li>Register / Unregister DLL files</li>
              <li>Refresh desktop icons / environment variables</li>
              <li>Test network connectivity</li>
              <li>Test power connectivity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.featureColumns}>
    <h3>3rd-Party Integration</h3>
    <div className="row">
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
            <li>Handles MCM exit codes, including time sensitive dialogs supporting *MCM Fast Retry* - providing more accurate Reporting (no more Failed due to timeout errors).</li>
              <li>Ability to prevent reboot codes (3010) from being passed back to MCM, which would cause a reboot prompt.</li>
              <li>Supports the MCM application model by providing an install and uninstall deployment type for every deployment script.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
            <li>Bundle multiple application installations to overcome the supported limit of 5 applications in the MCM application dependency chain.</li>
              <li>Compared to compiled deployment packages, e.g. WiseScript, PSAppDeployToolkit utilizes the Microsoft Endpoint Configuration Management cache correctly and MCM Distribution Point bandwidth more efficiently by using loose files.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.featureColumns}>
    <h3>User Experience</h3>
    <div className="row">
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
            <li>An interface to prompt the user to close specified applications that are open prior to starting the application deployment. The user is prompted to save their documents and has the option to close the programs themselves, have PSAppDeployToolkit close the programs, or optionally defer. Optionally, a countdown can be displayed until the applications are automatically closed.</li>
              <li>The ability to allow the user to defer an installation X number of times, X number of days or until a deadline date is reached.</li>
              <li>The ability to prevent the user from launching the applications that need to be closed while the application installation is in progress.</li>
              <li>An indeterminate progress dialog with customizable message text that can be updated throughout the deployment.</li>
              <li>A restart prompt with an option to restart later or restart now and a countdown to automatic restart.</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="col col--6">
        <div>
          <div className={styles.featureText}>
            <ul>
              <li>The ability to notify the user if disk space requirements are not met.</li>
              <li>Custom dialog boxes with options to customize title, text, buttons & icon.</li>
              <li>Balloon tip notifications to indicate the beginning and end of an installation and the success or failure of an installation.</li>
              <li>Branding of the above UI components using a custom logo icon and banner for your own Organization.</li>
              <li>The ability to run in interactive, silent (no dialogs) or non-interactive mode (default for running MCM task sequence or session 0).</li>
              <li>The UI is localized into several languages and more can be easily added using the XML configuration file.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>



    </section>
    </Layout>
  );
}
