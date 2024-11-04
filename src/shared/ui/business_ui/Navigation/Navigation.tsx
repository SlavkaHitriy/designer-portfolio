import WorkIcon from '@shared/assets/icons/work.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import { createBem } from '@shared/lib/bem';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@core/router';

export const Navigation = () => {
  const bem = createBem('navigation', styles);

  return (
    <div className={bem()}>
      <NavLink to={ROUTES.HOME} className={bem('item')}>
        <WorkIcon />
        Home
      </NavLink>
      <NavLink to={ROUTES.CASES.GOOSEBERRY} className={bem('item', 'disabled')}>
        <AboutIcon />
        About
      </NavLink>
    </div>
  );
};
