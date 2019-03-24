import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => (
  <svg
    className={styles['icon']}
    viewBox={icon.viewBox}
  >
    <path d={icon.path} />
    {icon.path2 && <path d={icon.path2} />}
  </svg>
);

export default Icon;
