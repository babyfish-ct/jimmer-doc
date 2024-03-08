import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HighPreformance } from '../Benchmark';
import { QuickDemo } from '../QuickDemo';

export default function HomepageFeatures(): JSX.Element {

  const {i18n} = useDocusaurusContext();
  return (
    <div className="container">
      <div className="row">
        <div>&nbsp;</div>
        <QuickDemo/>
      </div>
    </div>
  );
}
