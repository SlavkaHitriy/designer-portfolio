import WorkIcon from '@shared/assets/icons/work.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import { createBem } from '@shared/lib/bem';
import styles from './Tabs.module.scss';

export const Tabs = () => {
  const bem = createBem('tabs', styles);

  return (
    <div className={bem()}>
      <div className={bem('item')}>
        <WorkIcon />
        Work
      </div>
      <div className={bem('item', 'disabled')}>
        <AboutIcon />
        About
      </div>
    </div>
  );
};
