import { createBem } from '@shared/lib/bem';
import styles from './MainLayout.module.scss';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface IMainLayoutProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  className,
  children,
  style
}) => {
  const bem = createBem('layout', styles);

  return (
    <div style={style} className={classNames(bem(), className)}>
      <div className={classNames(bem('container'), 'container')}>
        {children}
      </div>
    </div>
  );
};
