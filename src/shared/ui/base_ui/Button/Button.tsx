import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { createBem } from '@shared/lib/bem';
import styles from './Button.module.scss';
import classNames from 'classnames';
import ArrowIcon from '@shared/assets/icons/arrow.svg';

type TButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<TButtonProps> = ({
  children,
  type = 'button',
  className,
  ...props
}) => {
  const bem = createBem('button', styles);

  return (
    <button className={classNames(bem(), className)} type={type} {...props}>
      {children}
      <div className={bem('arrow-wrapper')}>
        <ArrowIcon />
      </div>
    </button>
  );
};
