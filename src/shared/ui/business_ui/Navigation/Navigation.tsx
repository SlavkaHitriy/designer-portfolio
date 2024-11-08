import WorkIcon from '@shared/assets/icons/work.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import { createBem } from '@shared/lib/bem';
import styles from './Navigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '@core/router';
import React from 'react';

export const Navigation = () => {
  const location = useLocation();
  const navigation = React.useRef<HTMLDivElement>(null);
  const bem = createBem('navigation', styles);

  React.useEffect(() => {
    const footer = document.querySelector('.footer');
    navigation.current?.removeAttribute('style');

    const handleScroll = () => {
      if (navigation.current && footer) {
        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop < window.innerHeight) {
          navigation.current.style.bottom = `${footer.clientHeight + 50}px`;
          navigation.current.style.position = 'absolute';
          return;
        }

        if (footerTop > window.innerHeight) {
          navigation.current.removeAttribute('style');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div ref={navigation} className={bem()}>
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) => bem('item', isActive ? 'active' : '')}
      >
        <WorkIcon />
        Home
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => bem('item', isActive ? 'active' : '')}
      >
        <AboutIcon />
        About
      </NavLink>
    </div>
  );
};
