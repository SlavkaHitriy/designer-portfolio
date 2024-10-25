import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './Home.module.scss';
import { createBem } from '@shared/lib/bem';
import { Button } from '@shared/ui/base_ui/Button';
import phone from '@shared/assets/images/phone.png';

export const Home: React.FC = () => {
  const bem = createBem('home', styles);

  return (
    <>
      <MainLayout className={bem('greetings')}>
        <h3 className={bem('greetings-subtitle')}>Oleksandr Hula</h3>
        <h1 className={bem('greetings-title')}>
          <span>Greetings!</span>
          <span>
            I’m a Middle Product Designer currently working for Brizo.
          </span>
        </h1>
      </MainLayout>
      <MainLayout className={bem('case')}>
        <div className={bem('case-inner')}>
          <div className={bem('case-content')}>
            <h5 className={bem('case-subtitle')}>Gooseberry</h5>
            <h2 className={bem('case-title')}>
              Increasing customer retention rate
            </h2>
            <p className={bem('case-description')}>
              Integrating a new event feature that resulted in a 23% growth in
              customer retention.
            </p>
            <Button>View case study</Button>
          </div>
          <img
            className={bem('case-image')}
            src={phone}
            alt={'increasing customer retention rate'}
            title={'increasing customer retention rate'}
          />
        </div>
      </MainLayout>
    </>
  );
};
