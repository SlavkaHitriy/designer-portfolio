import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './About.module.scss';
import { createBem } from '@shared/lib/bem';
import avatar from '@shared/assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@core/router';

export const About: React.FC = () => {
  const bem = createBem('about', styles);

  return (
    <>
      <MainLayout className={bem()}>
        <h1 className={bem('title')}>
          <Link to={ROUTES.HOME}>Oleksandr Hula</Link>
        </h1>
        <div className={bem('inner')}>
          <img className={bem('avatar')} src={avatar} alt="oleksandr photo" />
          <div className={bem('info')}>
            <p className={bem('text')}>
              I'm an interaction and visual designer with a strong background in
              rapid prototyping and a passion for technology-driven solutions. I
              always strive for expanding my knowledge and learning best
              practices in research and human-centered design.
            </p>
            <p className={bem('text')}>
              I grew up in Brovary, Ukraine and is currently working for as a
              middle product designer at Brizo FoodMetrics, a Canadian company.
            </p>
            <p className={bem('text')}>
              My main focus is on creating stunning and easy-to-use solutions in
              a balance between business goals and people’s needs. I am not a
              fan of making decisions for the sake of making decisions or ‘it is
              to be simply done’. At the same time, I try to immerse myself in
              the problem to understand ‘why do we need it and why it should be
              done this way’. The smallest details can be game-changers.
            </p>
            <p className={bem('text')}>
              When not at work, you can find me fishing (and sometimes playing
              games).
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
