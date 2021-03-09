import cx from 'classnames';
import Head from 'components/Head';
import React from 'react';
import { Fragment, ReactNode } from 'react';

import Header from './Header';
import styles from './Layout.module.css';
import Navigation from './Navigation';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = (props: Props) => {
  const { children, className = 'Layout' } = props;

  return (
    <Fragment>
      <Head />
      <Header />
      <Navigation />
      <div className={cx(styles.container, className)}>{children}</div>
    </Fragment>
  );
};

export default Layout;
