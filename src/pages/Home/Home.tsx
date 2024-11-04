import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './Home.module.scss';
import { createBem } from '@shared/lib/bem';
import { cases } from '@shared/ui/business_ui/Case/config/cases.ts';
import { Case } from '@shared/ui/business_ui/Case';

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
      {cases.map((item) => (
        <Case key={`home-case-${item.id}`} {...item} />
      ))}
    </>
  );
};
