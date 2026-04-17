import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Symmetric & Asymmetric',
    // You can replace these with your own SVGs in /static/img/
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, 
    description: (
      <>
        From AES-256 to RSA and Elliptic Curve Cryptography. Deep dives into 
        the algorithms that secure the modern web.
      </>
    ),
  },
  {
    title: 'Zero Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn the math behind ZK-Proofs, SNARKs, and STARKs. Documentation 
        designed for privacy-preserving technology.
      </>
    ),
  },
  {
    title: 'Implementation Ready',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Practical code examples in Rust, Go, and Python. Stop "rolling your own" 
        and start implementing industry standards.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}