import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

const AboutPage = () => {
  const founders = [
    {
      name: 'Sean Lillis',
      subtitle: 'Founder / Developer',
      image: '../../images/about/sean.jpg',
      github: 'https://github.com/seanlillis',
      linkedin: 'https://www.linkedin.com/in/sean-lillis-08a4288',
    },
    {
      name: 'Dan Cunningham',
      subtitle: 'Founder / Developer / Project Lead',
      image: '../../images/about/dan.jpg',
      github: 'https://github.com/sintaxasn',
      linkedin: 'https://linkedin.com/in/sintaxasn',
    },
    {
      name: 'Mo Mashwani',
      subtitle: 'Founder / Developer',
      image: '../../images/about/mo.jpg',
      github: 'https://www.linkedin.com/in/mmashwani',
      linkedin: 'https://linkedin.com/in/muhammad-mashwani',
    },
    {
      name: 'Mitch Richters',
      subtitle: 'Lead Developer',
      image: '../../images/about/mitch.jpg',
      github: 'https://github.com/mjr4077au',
      linkedin: 'https://www.linkedin.com/in/mjrichters',
    },
    {
      name: 'Dan Gough',
      subtitle: 'Developer',
      image: '../../images/about/dang.jpg',
      github: 'https://github.com/DanGough',
      linkedin: 'https://www.linkedin.com/in/danielgough',
    },
  ];

  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/PSAppDeployToolkit/PSAppDeployToolkit/contributors');
        const data = await response.json();
        const excludedLogins = ['seanlillis', 'sintaxasn', 'mmashwani', 'mjr4077au', 'dangough'];
        const contributorsData = data
          .map((contributor: { login: string; html_url: string }) => ({
            login: contributor.login,
            html_url: contributor.html_url,
          }))
          .filter((contributor: { login: string }) => !excludedLogins.includes(contributor.login.toLowerCase()))
          .sort((a: { login: string }, b: { login: string }) => a.login.localeCompare(b.login));

        setContributors(contributorsData);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <Layout title="About Us" description="About PSAppDeployToolkit">
      <section className={styles.aboutPage}>
        {/* Header Block */}
        <div className={clsx('container', styles.headerBlock)}>
          <Heading as="h1">About PSAppDeployToolkit</Heading>
        </div>

        <div className={clsx('container', styles.introBlock)}>
          <p>
            The <b>PowerShell App Deployment Toolkit</b> (<b>PSAppDeployToolkit</b>) is an open-source framework which
            simplifies the complex scripting challenges of application repackaging, customization, and deployment of
            applications in a managed Windows environment. It compliments and enhances existing deployment and
            configuration management solutions (such as Microsoft Intune, SCCM, IBM BigFix, Tanium Deploy and VMware
            Workspace ONE) with new capabilities. It provides a consistent, corporate-branded deployment experience for
            end users, ensures packaging teams follow best practices, and substantially improves overall deployment
            success rates.
          </p>
          <p>
            PSAppDeployToolkit was created by <b>Sean Lillis</b>, <b>Dan Cunningham</b> and <b>Mo Mashwani</b> in their
            spare time while working for one of the &apos;Big Five&apos; financial services companies, where it was quickly adopted as the global standard for deploying applications.
            It was first released to CodePlex in August 2013. Since then, it has grown from a small project to being
            almost universally adopted as the de facto deployment standard by companies all overthe world - largely due
            to its reputation for stability and ease of use. From small companies to Fortune 500s and federal
            governments, PSAppDeployToolkit is used by in-house IT teams, consultants, and managed service providers to
            deploy applications on millions of endpoints all over the world.
          </p>
          <p>
            <i>
              &apos;Truly powerful application deployment toolkit written in PowerShell! Solving some classic
              problems&apos;- <b>Jörgen Nilsson, Microsoft MVP, Enterprise Client Management</b>
            </i>
          </p>
          <p>
            <i>
              &apos;Another very cool SCCM 2012 must have tool - PowerShell App Deployment Toolkit&apos; -{' '}
              <b>Kent Agerlund, Microsoft MVP, Enterprise Client Management</b>
            </i>
          </p>
        </div>

        {/* Founders Block */}
        <div className={clsx('container', styles.foundersBlock)}>
          <Heading as="h2">Development Team</Heading>
          <div className="row">
            {founders.map((founder, index) => (
              <div key={founder.name} className="col col--4">
                <div className={styles.founderCard}>
                  <img src={founder.image} alt={`Image of ${founder.name}`} className={styles.founderImage} />
                  <p className={styles.founderTitle}>{founder.name}</p>
                  <p className={styles.founderSubtitle}>{founder.subtitle}</p>
                  <p className={styles.founderLinks}>
                    <Link href={founder.github}>
                      <FaGithub size={32} />
                    </Link>{' '}
                    <Link href={founder.linkedin}>
                      <FaLinkedin size={32} />
                    </Link>
                  </p>{' '}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributors Block */}
        <div className={clsx('container', styles.contributorsBlock)}>
          <Heading as="h2">Contributors</Heading>
          <p className={styles.contributorList}>
            {contributors.map((contributor, index) => (
              <span key={contributor.login}>
                {contributor.html_url ? (
                  <Link href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                    {contributor.login}
                  </Link>
                ) : (
                  `${contributor.login}`
                )}
                {index < contributors.length - 1 && ' '}
              </span>
            ))}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
