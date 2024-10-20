import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './Home.module.scss';
import { createBem } from '@shared/lib/bem';
import WorkIcon from '@shared/assets/icons/work.svg';
import AboutIcon from '@shared/assets/icons/about.svg';

export const Home: React.FC = () => {
  const bem = createBem('home', styles);

  return (
    <MainLayout className={bem('greetings')}>
      <div className={bem('greetings-inner')}>
        <h3 className={bem('subtitle')}>Oleksandr Hula</h3>
        <h1 className={bem('title')}>
          <span>Greetings!</span>
          <span>
            I’m a Middle Product Designer currently working for Brizo.
          </span>
        </h1>
        <div className={bem('tabs')}>
          <div className={bem('tabs-item')}>
            <WorkIcon />
            Work
          </div>
          <div className={bem('tabs-item', 'disabled')}>
            <AboutIcon />
            About
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
