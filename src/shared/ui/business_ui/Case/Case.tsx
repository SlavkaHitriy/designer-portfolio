import { createBem } from '@shared/lib/bem';
import styles from './Case.module.scss';
import { Button } from '@shared/ui/base_ui/Button';
import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import { ICase } from './config/cases.ts';

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
  page
}) => {
  const bem = createBem('case', styles);

  return (
    <MainLayout className={bem()}>
      <div className={bem('inner')}>
        <div className={bem('content')}>
          <h5 className={bem('subtitle')}>{subtitle}</h5>
          <h2 className={bem('title')}>{title}</h2>
          <p className={bem('description')}>{description}</p>
          {!page && <Button to={`case/${id}`}>{buttonText}</Button>}
        </div>
        <img
          className={bem('image')}
          src={image.src}
          alt={image.alt}
          title={image.alt}
        />
      </div>
    </MainLayout>
  );
};
