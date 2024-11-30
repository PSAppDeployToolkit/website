import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import Heading from '@theme/Heading';
import Newsletter from '../components/Newsletter';
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
          <Heading as="h1">Text here that we can change with H1 tag</Heading>
        </div>

        {/* Intro Block */}
        <div className={clsx('container', styles.introBlock)}>
          <div className="row">
            <Newsletter />
          </div>
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
