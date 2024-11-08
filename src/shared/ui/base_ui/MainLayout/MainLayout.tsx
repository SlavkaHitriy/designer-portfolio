import { createBem } from '@shared/lib/bem';
import styles from './MainLayout.module.scss';
import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface IMainLayoutProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const MainLayout = React.forwardRef<HTMLDivElement, IMainLayoutProps>(
  ({ className, children, style }, ref) => {
    const bem = createBem('layout', styles);

    return (
      <div ref={ref} style={style} className={classNames(bem(), className)}>
        <div className={classNames(bem('container'), 'container')}>
          {children}
        </div>
      </div>
    );
  }
);
