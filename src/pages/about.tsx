import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import Heading from '@theme/Heading';
import Newsletter from '../components/Newsletter';
import Link from '@docusaurus/Link';

const AboutPage = () => {
  // this code is for demo purposes
  // you would normally get this list from an API endpoint or manually type the contributors in
  // let me know if you need help with that.
  const founders = [
    {
      name: 'Sean Lillis',
      subtitle: 'Co-founder & Developer',
      bio: 'Bio here. E.g., helped secure many projects for enterprise clients. Worked in software innovation for decades.',
      image: '../../images/about/sean.jpg',
      github: 'https://github.com/seanlillis',
      linkedin: 'https://linkedin.com/in/seanlillis',
    },
    {
      name: 'Dan Cunningham',
      subtitle: 'Co-Founder & Developer',
      bio: 'Bio here. E.g., helped secure many projects for enterprise clients. Worked in software innovation for decades.',
      image: '../../images/about/dan.png',
      github: 'https://github.com/sintaxasn',
      linkedin: 'https://linkedin.com/in/sintaxasn',
    },
    {
      name: 'Muhammad Mashwani',
      subtitle: 'Co-Founder & Developer',
      bio: 'Bio here. E.g., helped secure many projects for enterprise clients. Worked in software innovation for decades.',
      image: '../../images/about/mo.png',
      github: 'https://github.com/mmashwani',
      linkedin: 'https://linkedin.com/in/muhammad-mashwani',
    },
    {
      name: 'Mitch Richters',
      subtitle: 'Lead Developer',
      bio: 'PowerShell and Modern Workplace specialist with over 20 years of proven industry experience',
      image: '../../images/about/mitch.png',
      github: 'https://github.com/mmashwani',
      linkedin: 'https://linkedin.com/in/mitch-richters',
    },
    {
      name: 'Dan Gough',
      subtitle: 'Co-Founder & Developer',
      bio: 'Bio here. E.g., helped secure many projects for enterprise clients. Worked in software innovation for decades.',
      image: '../../images/about/dang.png',
      github: 'https://github.com/mmashwani',
      linkedin: 'https://linkedin.com/in/dan-gough',
    },
  ];

  const contributors = Array.from({ length: 50 }, (_, index) => {
    const name = `name${index + 1}`;
    const hasLink = Math.random() > 0.5;
    return {
      id: `ctrb-${index}`,
      name,
      link: hasLink ? `https:/github.com/@${name}` : null,
    };
  });

  return (
    <Layout title="About Us" description="Meet the team behind PSAppDeployToolkit">
      <section className={styles.aboutPage}>
        {/* Header Block */}
        <div className={clsx('container', styles.headerBlock)}>
          <Heading as="h1">Text here that we can change with H1 tag</Heading>
        </div>

        {/* Hero Block */}
        <div className={clsx('', styles.heroBlock)}>
          <Heading as="h2">Text here that we can change with H2 tag</Heading>
        </div>

        {/* Intro Block */}
        <div className={clsx('container', styles.introBlock)}>
          <div className="row">
            <Newsletter />
          </div>
        </div>

        {/* Founders Block */}
        <div className={clsx('container', styles.foundersBlock)}>
          <Heading as="h2">Founders</Heading>
          <div className="row">
            {founders.map((founder, index) => (
              <div key={index} className="col col--4">
                <div className={styles.founderCard}>
                  <img src={founder.image} alt={`Image of ${founder.name}`} className={styles.founderImage} />
                  <Heading as="h3">{founder.name}</Heading>
                  <p className={styles.founderSubtitle}>{founder.subtitle}</p>
                  <p>{founder.bio}</p>
                  <p className={styles.founderLinks}>
                    <Link href={founder.github}>GitHub Handle</Link> |{' '}
                    <Link href={founder.linkedin}>LinkedIn Profile</Link>
                  </p>
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
              <span key={contributor.id}>
                {contributor.link ? (
                  <Link href={contributor.link} target="_blank" rel="noopener noreferrer">
                    @{contributor.name}
                  </Link>
                ) : (
                  `@${contributor.name}`
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
