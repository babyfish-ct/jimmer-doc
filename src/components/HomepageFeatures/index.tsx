import React, { ReactNode, useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
