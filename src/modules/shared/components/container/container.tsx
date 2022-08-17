import { ReactNode } from 'react';
import styles from './container.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

function Container({
  children, className,
}:Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
