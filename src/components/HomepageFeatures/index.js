import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'It Simply Works',
    Svg: require('@site/static/img/kunai.svg').default,
    description: (
      <>
        Everything has been thought to provide you the best and simplest experience possible.
      </>
    ),
  },
  {
    title: 'Powered by Rust and eBPF',
    Svg: require('@site/static/img/bee-ferry.svg').default,
    description: (
      <>
        Kunai utilizes the powerful&nbsp;<a href="https://github.com/aya-rs">Aya library</a> to provide a consistent Rust project that is easy to maintain and extend.
      </>
    ),
  },
  {
    title: 'Container Support',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>
        Kunai empowers you with the ability to monitor activities within your containers and seamlessly apply all your threat-hunting rules.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
