import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rich Security Events',
    to: '/docs/events',
    description: (
      <>
        Process execution, file activity, network connections, DNS queries,
        BPF program loads, module loading, <code>mmap</code>/<code>mprotect</code> with exec rights and more.
      </>
    ),
  },
  {
    title: 'Context Out of the Box',
    to: '/docs/events/generalities',
    description: (
      <>
        Every event comes with process ancestry, parent command line,
        executable hashes and container information. No post-processing needed.
      </>
    ),
  },
  {
    title: 'Detection & Filtering Rules',
    to: '/docs/advanced/rule_configuration',
    description: (
      <>
        Write simple YAML rules to tag detections with MITRE ATT&CK ids
        and severity, or to filter out noise right on the host.
      </>
    ),
  },
  {
    title: 'IoCs, YARA & Actions',
    to: '/docs/advanced/ioc_configuration',
    description: (
      <>
        Match indicators of compromise live, scan files with YARA and
        trigger actions such as killing a malicious process.
      </>
    ),
  },
  {
    title: 'Container Aware',
    to: '/docs/events/generalities',
    description: (
      <>
        Monitor activity inside your containers and apply all your
        threat-hunting rules to them seamlessly.
      </>
    ),
  },
  {
    title: 'Powered by Rust and eBPF',
    to: '/docs/compatibility',
    description: (
      <>
        Built with the <a href="https://github.com/aya-rs">Aya</a> library:
        low overhead, memory safe and running on a wide range of kernels.
      </>
    ),
  },
];

function Feature({ title, description, to }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <h3>
          <Link to={to}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">What You Get</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
