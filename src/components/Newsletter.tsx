import React, { useEffect } from 'react';
// @ts-ignore
import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
    <>
      <div className="col col--7">
        <p className={styles.blockTitle}>
          Stay on top of the latest <span className={styles.logoThickText}>updates from PSAppDeployToolkit</span> with
          our newsletter
        </p>

        <p>
          PSAppDeployToolkit officially has a newsletter to keep you in the loop with all the latest updates, features,
          and improvements designed to make patch management even smoother. You'll also hear about upcoming events and
          webinars where you can connect with experts and sharpen your skills. Subscribe to by filling out the form.
        </p>
      </div>
      <div className="col col--5">
        <HubSpotForm />
      </div>
    </>
  );
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hbspt: any;
  }
}

const HubSpotForm: React.FC = () => {
  useEffect(() => {
    const loadHubSpotForm = (): void => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '43903473',
          formId: '7a0bb757-0873-4ce5-bcfd-ebc16bec7dde',
          target: '#hubspotForm',
        });
      }
    };

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        loadHubSpotForm();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>;
};
