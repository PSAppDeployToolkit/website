import { FaLinkedin } from 'react-icons/fa';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './training.module.css';
import { instructors } from '../data/instructors';

const COURSE_URL = 'https://academy.viamonstra.com/courses/psadt-v4-essentials/';

const modules = [
  {
    title: 'Module 1: Foundations of PSADT v4',
    topics: [
      'Introduction to PSAppDeployToolkit v4',
      'Features, benefits, and real-world use cases',
      'Understanding Core Deployment Concepts',
      'Installing and Configuring Your Environment',
      'Understanding the File & Folder Structure',
      'Creating Your First Deployment Package',
    ],
    lab: 'Setting up PSADT and Creating a First Package',
  },
  {
    title: 'Module 2: Building and Deploying Packages',
    topics: [
      'Anatomy of Deploy-Application.ps1',
      'Adding installers, scripts, and supporting files',
      'Leveraging & Customizing the User Interface',
      'Understanding the deployment lifecycle',
      'Deploying via Microsoft ConfigMgr (SCCM) and Intune',
    ],
    lab: 'Customizing the User Interface',
  },
  {
    title: 'Module 3: Working with Functions and Advanced Logic',
    topics: [
      'Working with Core & Advanced Functions',
      'Logging \u2013 Making the Most of it with PSADT',
      'Advanced Deployment Techniques',
    ],
    lab: 'Using Advanced Deployment Techniques and Logging',
  },
  {
    title: 'Module 4: Upgrading from v3 to v4',
    topics: [
      'Key differences between v3 and v4.0/v4.1+',
      'Function renames and replacements',
      'New error handling model with standardized switches',
      'Migrating existing deployment scripts to v4',
    ],
    lab: 'Converting a real v3 deployment to v4.1',
  },
  {
    title: 'Module 5: Security, Real-World Deployments and Troubleshooting',
    topics: [
      'Security Best Practices',
      'Deployment Tips & Tricks from the Field',
      'Enterprise-scale rollout lessons learned',
      'Maintaining and Updating Your PSADT Packages',
      'Updating packages for new app versions',
      'Community Resources & Future Roadmap',
    ],
    lab: 'A full-featured deployment with removal of previous versions, prerequisite install, full user experience, and push to Intune',
  },
];

const highlights = [
  { label: 'Free', description: 'No cost to enroll \u2013 completely free for the community.' },
  { label: 'Recorded Live', description: 'Instructor-led sessions with extensive Q&A from real users.' },
  { label: 'Hands-On Labs', description: 'Practical lab guides you can follow on any Windows device or VM.' },
  { label: 'On-Demand Access', description: 'Take home sample files, scripts, and full session recordings.' },
  { label: 'PSADT Certification', description: 'Earn an official credential to validate your expertise.' },
];

const TrainingPage = () => (
  <Layout
    title="Training"
    description="Free online training for PSAppDeployToolkit v4 on Viamonstra Academy. Built with the PSADT creators. This on-demand training course includes Hands-on labs and an official PSADT Certification on completion."
  >
      <section className={styles.trainingPage}>
        {/* Hero */}
        <div className={clsx('container', styles.hero, 'section-shell', 'reveal-section')}>
          <div className={clsx('row', 'split-row')}>
            <div className={clsx('col col--6', styles.heroContent, 'section-copy')}>
            <Heading as="h1" className={styles.heroTitle}>
              <span className={styles.accent}>PSADT v4 Essentials</span> Training Course
            </Heading>
            <p className={styles.heroTagline}>
              Free online training built in close collaboration with the PSAppDeployToolkit creators. Master PSADT v4.1
              with hands-on labs, real-world workflows, and official certification.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" href={COURSE_URL}>
                Enroll Now
              </Link>
            </div>
          </div>
            <div className={clsx('col col--6', styles.heroImageCol, 'reveal-section', 'reveal-delay-1')}>
            <div className="media-frame media-frame--hero">
              <img
                src="/images/features/construction_workers_classroom.png"
                alt="Classroom illustration"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className={clsx('container', styles.highlightsSection, 'section-shell', 'reveal-section')}>
        <div className={styles.highlightsGrid}>
          {highlights.map((item) => (
            <div key={item.label} className={clsx(styles.highlightItem, 'calm-card', 'reveal-section')}>
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructors */}
      <div className={clsx('container', styles.instructorsSection, 'section-shell', 'reveal-section')}>
        <Heading as="h2" id="instructors" className={styles.instructorsTitle}>
          Meet Your Instructors
        </Heading>
        <div className="row">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="col col--4">
              <div className={clsx(styles.instructorCard, 'calm-card', 'reveal-section')}>
                <img
                  src={instructor.image}
                  alt={`${instructor.name}, ${instructor.role}`}
                  className={clsx(styles.instructorImage, 'entity-avatar')}
                  loading="lazy"
                />
                <p className={styles.instructorName}>{instructor.name}</p>
                <p className={styles.instructorRole}>{instructor.role}</p>
                <p className={styles.instructorBio}>{instructor.bio}</p>
                <p className={styles.instructorLinks}>
                  <Link href={instructor.linkedin} aria-label={`${instructor.name} on LinkedIn`}>
                    <FaLinkedin size={32} aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className={clsx(styles.ctaSection, 'section-shell', 'reveal-section')}>
        <div className="container">
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Master PSAppDeployToolkit?
          </Heading>
          <p className={styles.ctaText}>
            Join the PSADT v4 Essentials course and gain the skills to deploy applications with confidence across your
            enterprise.
          </p>
          <Link className="button button--primary button--lg" href={COURSE_URL}>
            Enroll Now &mdash; It&apos;s Free
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default TrainingPage;
