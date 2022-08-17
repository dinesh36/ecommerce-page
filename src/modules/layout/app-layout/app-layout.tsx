import React from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/header';

function AppLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
