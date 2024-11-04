import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { createBem } from '@shared/lib/bem';
import styles from './Button.module.scss';
import classNames from 'classnames';
import ArrowIcon from '@shared/assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  to?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  type = 'button',
  className,
  to,
  ...props
}) => {
  const bem = createBem('button', styles);
  const navigate = useNavigate();

  const handleButtonLink = () => {
    if (to) navigate(to);
  };

  return (
    <button
      className={classNames(bem(), className)}
      type={type}
      onClick={handleButtonLink}
      {...props}
    >
      {children}
      <div className={bem('arrow-wrapper')}>
        <ArrowIcon />
      </div>
    </button>
  );
};
