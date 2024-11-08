import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './About.module.scss';
import { createBem } from '@shared/lib/bem';
import avatar from '@shared/assets/images/avatar.png';

export const About: React.FC = () => {
  const bem = createBem('about', styles);

  return (
    <>
      <MainLayout className={bem()}>
        <h1 className={bem('title')}>Oleksandr Hula</h1>
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
              My main focus is on creating and enhancing easy-to-use solutions
              in a balance between business goals and people’s needs. I’m
              passionate about researches, product and team growth, and crafting
              stunning visuals and experience that change the world.
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
