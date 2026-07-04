import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './index.module.css';

const features = [
  {
    title: 'CLI Toolkit',
    emoji: '⚡',
    description: 'Scaffold, build, test, and deploy Stellar applications with a single command.',
  },
  {
    title: 'Wallet Integrations',
    emoji: '🔐',
    description: 'Pre-built wallet connections for Freighter, xBull, Albedo, and Rabet.',
  },
  {
    title: 'UI Components',
    emoji: '📦',
    description: 'Production-ready React components for Stellar dApps.',
  },
  {
    title: 'Soroban Templates',
    emoji: '🦀',
    description: 'Reusable smart contract templates for common use cases.',
  },
  {
    title: 'Developer Tools',
    emoji: '🔍',
    description: 'Transaction inspector, decoder, gas estimation, and benchmarking.',
  },
  {
    title: 'Example Apps',
    emoji: '📖',
    description: 'Complete reference applications to learn from and adapt.',
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            🚀 StellarPilot
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/installation"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/supreme2580/soroban-pilot"
            >
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((f, idx) => (
                <div key={idx} className={clsx('col col--4')}>
                  <div className="text--center padding-horiz--md padding-vert--lg">
                    <Heading as="h3">
                      {f.emoji} {f.title}
                    </Heading>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
