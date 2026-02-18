import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { devteam } from '../data/devteam';
import { testimonials } from '../data/testimonials';
import { motion, useReducedMotion } from 'framer-motion';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
}

const CACHE_KEY = 'psadt_contributors';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

const AboutPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.35, bounce: 0 };
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const excludedLogins = ['seanlillis', 'sintaxasn', 'mmashwani', 'mjr4077au', 'dangough'];

    const fetchContributors = async () => {
      try {
        // Check sessionStorage cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL && Array.isArray(data)) {
            setContributors(data);
            setIsLoading(false);
            return;
          }
        }

        const response = await fetch('https://api.github.com/repos/PSAppDeployToolkit/PSAppDeployToolkit/contributors');
        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected API response format');
        }
        const contributorsData = data
          .map((contributor: Contributor) => ({
            login: contributor.login,
            avatar_url: contributor.avatar_url,
            html_url: contributor.html_url,
          }))
          .filter((contributor: Contributor) => !excludedLogins.includes(contributor.login.toLowerCase()))
          .sort((a: Contributor, b: Contributor) => a.login.localeCompare(b.login));

        setContributors(contributorsData);

        // Cache the result
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: contributorsData, timestamp: Date.now() }));
        } catch {
          // sessionStorage may be unavailable
        }
      } catch (err) {
        setError('Unable to load contributors at this time.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <Layout
      title="About Us"
      description="Meet the PSAppDeployToolkit team and contributors behind the open-source PowerShell framework used by Fortune 500 companies for enterprise application deployment."
    >
      <section className={clsx(styles.aboutPage, 'page-shell')}>
        {/* Header Block */}
        <motion.div
          className={clsx('container', styles.headerBlock, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Heading as="h1">About <span className={styles.accent}>PSADT</span></Heading>
        </motion.div>

        <motion.div
          className={clsx('container', styles.introBlock, 'section-shell', 'split-row')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={styles.introBody}>
            <p>
              The <b>PowerShell App Deployment Toolkit</b> (<b>PSAppDeployToolkit</b> or <b>PSADT</b>) is an open-source
              framework which simplifies the complex scripting challenges of application repackaging, customization, and
              deployment of applications in a managed Windows environment. It complements and enhances existing
              deployment and configuration management solutions (such as Microsoft Intune, SCCM, IBM BigFix, Tanium
              Deploy and VMware Workspace ONE) with new capabilities. It provides a consistent, corporate-branded
              deployment experience for end users, ensures packaging teams follow best practices, and substantially
              improves overall deployment success rates.
            </p>
            <p>
              PSADT was created by <b>Sean Lillis</b>, <b>Dan Cunningham</b> and <b>Mo Mashwani</b> in
              their spare time while working for one of the &apos;Big Five&apos; financial services companies, where it
              was quickly adopted as the global standard for deploying applications. It was first released to CodePlex
              in August 2013. Since then, it has grown from a small project to being almost universally adopted as the
              de facto deployment standard by companies worldwide - largely due to its reputation for stability
              and ease of use. Across every industry and region, SMBs to Fortune 500s and federal governments, in-house
              packaging teams, external packaging consultants, managed service providers and software companies who
              develop 3rd party patching tools - PSADT is the trusted framework that enables them to
              deploy applications on tens of millions of endpoints all over the world.
            </p>
            <p>
              In 2023, the PSADT team joined forces with <b>Patch My PC</b>, who now steward the project&apos;s ongoing
              development and maintenance. PSADT finally saw its long awaited <b>v4 release in December 2024</b>,
              followed by <b>v4.1 in July 2025</b>. The core team of developers and contributors continue to actively
              maintain and enhance the framework, with regular releases and new features based on community feedback.
            </p>
            <p>
              <b>v4.2 is currently in development and slated for Q2 2026</b>.
            </p>
          </div>
          <div className={styles.introTestimonials}>
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                className={clsx(styles.testimonialCard, 'calm-card')}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.12 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                <p className={styles.testimonialAttribution}>
                  <strong>{testimonial.name}</strong>
                  <br />
                  {testimonial.company}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Block */}
        <motion.div
          className={clsx('container', styles.foundersBlock, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Heading as="h2">Development Team</Heading>
          <p className={styles.foundersHeading}>
            This is the ragtag bunch who have been flying the PSADT flag for 14+ years. Some haven't been around as
            long, some aren't as active these days - but we've all put in countless hours building this, implementing
            requested features, providing support, attended conferences and given talks. We all have a deep passion for
            this project and are proud of what we've built together.
          </p>
          <div className={styles.founderGrid}>
            {devteam.slice(0, 6).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className={clsx(styles.founderCard, 'calm-card')}>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.subtitle}`}
                    className={styles.founderImage}
                    loading="lazy"
                  />
                  <p className={styles.founderTitle}>{member.name}</p>
                  <p className={styles.founderSubtitle}>{member.subtitle}</p>
                  <p className={styles.founderLinks}>
                    <Link href={member.github} aria-label={`${member.name} on GitHub`}>
                      <FaGithub size={32} aria-hidden="true" />
                    </Link>{' '}
                    <Link href={member.linkedin} aria-label={`${member.name} on LinkedIn`}>
                      <FaLinkedin size={32} aria-hidden="true" />
                    </Link>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contributors Block */}
        <motion.div
          className={clsx('container', styles.contributorsBlock, 'section-shell')}
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={spring}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Heading as="h2">Contributors</Heading>
          <p className={styles.contributorsHeading}>
            We also want to give a shoutout to the many other contributors who have come and gone over the years - you
            know who you are, and so do we! (thanks GitHub contributor stats!), and we thank you for your contributions,
            whether it was a single bug fix, a feature enhancement or documentation improvement.
            <br />
          </p>
          <div aria-live="polite" aria-busy={isLoading}>
            {isLoading && <p>Loading contributors...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && (
              <div className={styles.contributorGrid}>
                {contributors.map((contributor, i) => (
                  <motion.div
                    key={contributor.login}
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ ...spring, delay: prefersReducedMotion ? 0 : i * 0.04 }}
                    viewport={{ once: true, amount: 0.15 }}
                  >
                    <Link
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(styles.contributorCard, 'calm-card')}
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={`${contributor.login}'s GitHub avatar`}
                        className={styles.contributorAvatar}
                        loading="lazy"
                        width={48}
                        height={48}
                      />
                      <p className={styles.contributorName}>{contributor.login}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AboutPage;
