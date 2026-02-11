import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { devteam } from '../data/devteam';
import { testimonials } from '../data/testimonials';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
}

const CACHE_KEY = 'psadt_contributors';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

const AboutPage = () => {
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
        <div className={clsx('container', styles.headerBlock, 'section-shell', 'reveal-section')}>
          <Heading as="h1">
            About <span className={clsx('accent', styles.accent)}>PSAppDeployToolkit</span>{' '}
          </Heading>
        </div>

        <div className={clsx('container', styles.introBlock, 'section-shell', 'split-row', 'reveal-section')}>
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
              PSAppDeployToolkit was created by <b>Sean Lillis</b>, <b>Dan Cunningham</b> and <b>Mo Mashwani</b> in
              their spare time while working for one of the &apos;Big Five&apos; financial services companies, where it
              was quickly adopted as the global standard for deploying applications. It was first released to CodePlex
              in August 2013. Since then, it has grown from a small project to being almost universally adopted as the
              de facto deployment standard by companies all over the world - largely due to its reputation for stability
              and ease of use. From small companies to Fortune 500s and federal governments, PSAppDeployToolkit is used
              by in-house IT teams, consultants, and managed service providers to deploy applications on millions of
              endpoints all over the world.
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={clsx(styles.testimonialCard, 'calm-card', 'reveal-section')}>
                <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                <p className={styles.testimonialAttribution}>
                  <strong>{testimonial.name}</strong>
                  <br />
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Block */}
        <div className={clsx('container', styles.foundersBlock, 'section-shell', 'reveal-section')}>
          <Heading as="h2">
            <span className={clsx('accent', styles.accent)}>Development </span> Team
          </Heading>
          <p className={styles.foundersHeading}>
            This is the ragtag bunch who have been flying the PSADT flag for 14+ years. Some haven't been around as
            long, some aren't as active these days - but we've all put in countless hours building this, implementing
            requested features, providing support, attended conferences and given talks. We all have a deep passion for
            this project and are proud of what we've built together.
          </p>
          <div className={styles.founderGrid}>
            {devteam.slice(0, 6).map((member) => (
              <div key={member.name}>
                <div className={clsx(styles.founderCard, 'calm-card', 'reveal-section')}>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.subtitle}`}
                    className={clsx(styles.founderImage, 'entity-avatar')}
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
              </div>
            ))}
          </div>
        </div>

        {/* Contributors Block */}
        <div className={clsx('container', styles.contributorsBlock, 'section-shell', 'reveal-section')}>
          <Heading as="h2">
            <span className={clsx('accent', styles.accent)}>Contributers</span></Heading>
          <p className={styles.contributersHeading}>
            We also want to give a shoutout to the many other contributors who have come and gone over the years - you
            know who you are, and so do we! (thanks GitHub contributer stats!), and we thank you for your contributions,
            whether it was a single bug fix, a feature enhancement or documentation improvement.
            <br />
          </p>
          <div aria-live="polite" aria-busy={isLoading}>
            {isLoading && <p>Loading contributors...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && (
              <div className={styles.contributorGrid}>
                {contributors.map((contributor) => (
                  <Link
                    key={contributor.login}
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(styles.contributorCard, 'calm-card', 'reveal-section')}
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className={styles.contributorAvatar}
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <p className={styles.contributorName}>{contributor.login}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
