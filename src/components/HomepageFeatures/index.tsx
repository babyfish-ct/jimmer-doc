import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HighPreformance } from '../Benchmark';

export default function HomepageFeatures(): JSX.Element {

  const {i18n} = useDocusaurusContext();
  
  const features = useMemo<ReadonlyArray<FeatureItem>>(() => {
    const locale = i18n.currentLocale;
    return locale === 'zh' || locale == 'zh_CN' || locale == 'zh_CN' ?
      FEATURE_LIST_ZH :
      FEATURE_LIST_EN;
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type FeatureItem = {
  title: ReactNode;
  description: JSX.Element;
};

const FEATURE_LIST_ZH: FeatureItem[] = [
  {
    title: "强大的功能",
    description: <img src="img/cmp.svg"/>
  },
  {
    title: "极致的性能",
    description: <HighPreformance height={300}/>
  }
];

const FEATURE_LIST_EN: FeatureItem[] = [
  {
    title: "Powerful features",
    description: <img src="img/cmp.svg"/>
  },
  {
    title: "Extreme performance",
    description: <HighPreformance height={300}/>
  }
];
