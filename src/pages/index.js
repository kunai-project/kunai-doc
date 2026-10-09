import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const EXAMPLE_EVENT = `{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|...",
    "parent_exe": "/usr/bin/bash",
    "command_line": "mktemp -d -p /tmp/trash",
    "exe": {
      "path": "/usr/bin/mktemp",
      "magic": "ELF 64-bit LSB pie executable, x86-64",
      "sha256": "f32938cf25ddd6f6800a8e9b406595534d0eb27993587bbdeee2e83dd97d8406",
      "size": 39144,
      "...": "..."
    },
    "...": "..."
  },
  "info": {
    "event": { "source": "kunai", "id": 1, "name": "execve", "...": "..." },
    "utc_time": "2025-06-10T14:00:42.814301638Z",
    "...": "..."
  }
}`;

const EXAMPLE_RULE = `name: mimic.kthread
type: detection
meta:
    tags: [ 'os:linux' ]
    attack: [ T1036 ]
match-on:
    events:
        kunai: [execve, execve_script]
matches:
    $task_is_kthread: .info.task.flags &= '0x200000'
    $kthread_names: .info.task.name ~= '^(kworker)'
condition: not $task_is_kthread and $kthread_names
severity: 10`;

const PIPELINE = [
  { title: 'Linux Kernel', text: 'eBPF probes capture security relevant activity' },
  { title: 'Kunai', text: 'Reorders, enriches, filters and detects' },
  { title: 'JSON Events', text: 'One event per line, easy to parse' },
  { title: 'Your Stack', text: 'stdout, file, SIEM, threat-hunting tools' },
];

const USE_CASES = [
  ['Security Monitoring', 'Feed your SIEM with high quality Linux events.'],
  ['Threat Hunting', 'Explore what really happens on your Linux hosts.'],
  ['Incident Response', 'Reconstruct process trees and attacker activity.'],
  ['Detection Engineering', 'Write and test rules against real events.'],
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--5', styles.heroText)}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
              Linux security monitoring and threat hunting, powered by eBPF.
            </p>
            <p>
              Sysmon-like visibility for Linux: process, file, network and DNS
              events, enriched, ordered and ready for your SIEM.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/quickstart">
                Quick Start
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                href="https://github.com/kunai-project/kunai">
                GitHub
              </Link>
            </div>
          </div>
          <div className={clsx('col col--7', styles.heroCode)}>
            <CodeBlock language="json" title="execve event">
              {EXAMPLE_EVENT}
            </CodeBlock>
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  return (
    <section className={clsx(styles.section, styles.alt)}>
      <div className="container">
        <h2 className="text--center">How It Works</h2>
        <div className={styles.pipeline}>
          {PIPELINE.map(({ title, text }, idx) => (
            <React.Fragment key={title}>
              {idx > 0 && <span className={styles.arrow}>→</span>}
              <div className={styles.step}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function RuleShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <h2>Detect What Matters</h2>
            <p>
              Detection rules are simple YAML files matching on any event field.
              This one catches binaries masquerading as kernel threads, a
              technique sometimes used by malware to hide itself.
            </p>
            <Link className="button button--primary" to="/docs/advanced/rule_configuration">
              Write your first rule
            </Link>
          </div>
          <div className="col col--7">
            <CodeBlock language="yaml" title="mimic.kthread.yaml">
              {EXAMPLE_RULE}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className={clsx(styles.section, styles.alt)}>
      <div className="container">
        <h2 className="text--center">Built For</h2>
        <div className="row">
          {USE_CASES.map(([title, text]) => (
            <div key={title} className="col col--3 text--center">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Kunai is an eBPF powered security monitoring and threat-hunting tool for Linux, providing rich, enriched and ordered security events.">
      <HomepageHeader />
      <main>
        <UseCases />
        <HomepageFeatures />
        <HowItWorks />
        <RuleShowcase />
      </main>
    </Layout>
  );
}
