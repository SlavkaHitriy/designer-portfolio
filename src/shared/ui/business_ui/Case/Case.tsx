import { createBem } from '@shared/lib/bem';
import styles from './Case.module.scss';
import { Button } from '@shared/ui/base_ui/Button';
import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import { ICase } from './config/cases.ts';
import ArrowDown from '@shared/assets/icons/arrow-down.svg';
import React from 'react';

interface ICaseProps extends ICase {
  page?: boolean;
}

export const Case: React.FC<ICaseProps> = ({
  id,
  title,
  image,
  subtitle,
  description,
  buttonText,
  isWhiteText,
  page,
  gradient
}) => {
  const caseRef = React.useRef<HTMLDivElement>(null);
  const bem = createBem('case', styles);

  const scrollDown = () => {
    window.scrollTo({
      top: caseRef.current?.offsetHeight,
      behavior: 'smooth'
    });
  };

  return (
    <MainLayout
      ref={caseRef}
      style={{
        background: gradient
      }}
      className={bem('', isWhiteText ? 'white-text' : '')}
    >
      <div className={bem('inner')}>
        <div className={bem('content')}>
          <h5 className={bem('subtitle')}>{subtitle}</h5>
          <h2 className={bem('title')}>{title}</h2>
          <p className={bem('description')}>{description}</p>
          {!page && <Button to={`case/${id}`}>{buttonText}</Button>}
          {page && (
            <button
              type={'button'}
              className={bem('scroll-down')}
              onClick={scrollDown}
            >
              <ArrowDown />
            </button>
          )}
        </div>
        <img
          className={bem('image', [
            image.withShadow ? 'with-shadow' : '',
            image.className
          ])}
          src={image.src}
          alt={image.alt}
          title={image.alt}
        />
      </div>
    </MainLayout>
  );
};
