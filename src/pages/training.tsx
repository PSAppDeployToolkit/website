import { FaLinkedin } from 'react-icons/fa';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './training.module.css';
import { instructors } from '../data/instructors';
import { motion, useReducedMotion } from 'framer-motion';

const COURSE_URL = 'https://academy.viamonstra.com/courses/psadt-v4-essentials/';

const highlights = [
  { label: 'Free', description: 'No cost to enroll \u2013 completely free for the community.' },
  { label: 'Recorded Live', description: 'Instructor-led sessions with extensive Q&A from real users.' },
  { label: 'Hands-On Labs', description: 'Practical lab guides you can follow on any Windows device or VM.' },
  { label: 'On-Demand Access', description: 'Take home sample files, scripts, and full session recordings.' },
  { label: 'PSADT Certification', description: 'Earn an official credential to validate your expertise.' },
];

const TrainingPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };

  return (
    <Layout
      title="Training"
      description="Free online training for PSAppDeployToolkit v4 on Viamonstra Academy. Built with the PSADT creators. This on-demand training course includes Hands-on labs and an official PSADT Certification on completion."
    >
      <section className={clsx(styles.trainingPage, 'page-shell')}>
        {/* Hero */}
        <motion.div
          className={clsx('container', styles.hero, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={clsx('row', 'split-row')}>
            <div className={clsx('col col--6', styles.heroContent, 'section-copy')}>
              <Heading as="h1" className={styles.heroTitle}>
                <span className={styles.accent}>PSADT v4 Essentials</span> Training Course
              </Heading>
              {/* Mobile-only image: shown between title and tagline on smaller screens */}
              <div className={styles.heroImageMobile}>
                <div className="media-frame media-frame--hero">
                  <img
                    src="/images/features/construction_workers_classroom.png"
                    alt="Classroom illustration"
                    className={styles.heroImage}
                  />
                </div>
              </div>
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
            <motion.div
              className={clsx('col col--6', styles.heroImageCol)}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...spring, delay: prefersReducedMotion ? 0 : 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="media-frame media-frame--hero">
                <img
                  src="/images/features/construction_workers_classroom.png"
                  alt="Classroom illustration"
                  className={styles.heroImage}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className={clsx('container', styles.highlightsSection, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={styles.highlightsGrid}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className={clsx(styles.highlightItem, 'calm-card')}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instructors */}
        <motion.div
          className={clsx('container', styles.instructorsSection, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Heading as="h2" id="instructors" className={styles.instructorsTitle}>
            Meet Your Instructors
          </Heading>
          <div className="row">
            {instructors.map((instructor, i) => (
              <div key={instructor.name} className={clsx('col col--4', styles.instructorCol)}>
                <motion.div
                  className={clsx(styles.instructorCard, 'calm-card')}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.1 }}
                  viewport={{ once: true, amount: 0.15 }}
                >
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
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className={clsx(styles.ctaSection, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
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
        </motion.div>
      </section>
    </Layout>
  );
};

export default TrainingPage;
