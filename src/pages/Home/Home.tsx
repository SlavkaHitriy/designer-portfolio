// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { MainLayout } from '@shared/ui/base_ui/MainLayout';
import styles from './Home.module.scss';
import { createBem } from '@shared/lib/bem';
import { cases } from '@shared/ui/business_ui/Case/config/cases.ts';
import { Case } from '@shared/ui/business_ui/Case';
import React from 'react';
import p5 from 'p5';

export const Home: React.FC = () => {
  const sketchRef = React.useRef(null);
  const bem = createBem('home', styles);

  React.useLayoutEffect(() => {
    const sketch = (p) => {
      const deg = (a) => (p.PI / 180) * a;
      const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));

      const Particles = [];
      let time = 0;
      const particlesCount =
        sketchRef.current.offsetWidth / 500 > 1 ? 1000 : 100;
      const opt = {
        particles: particlesCount,
        noiseScale: 0.5,
        angle: (p.PI / 180) * -90,
        h1: rand(0, 360),
        h2: rand(0, 360),
        s1: rand(20, 90),
        s2: rand(20, 90),
        l1: rand(30, 80),
        l2: rand(30, 80),
        strokeWeight: 2.3,
        tail: 10
      };

      p.setup = () => {
        p.createCanvas(
          sketchRef.current.offsetWidth,
          sketchRef.current.offsetHeight
        );
        for (let i = 0; i < opt.particles; i++) {
          Particles.push(
            new Particle(
              p.random(p.width) + p.random(-5, 5),
              p.random(p.height) + p.random(-5, 5),
              p,
              opt
            )
          );
        }
        p.strokeWeight(opt.strokeWeight);
      };

      p.draw = () => {
        time++;

        p.clear();
        p.background(0, 0, 0, 0);

        Particles.forEach((particle) => {
          particle.update();
          particle.render();
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(
          sketchRef.current.offsetWidth,
          sketchRef.current.offsetHeight
        );
      };

      p.mouseClicked = () => {
        opt.h1 = rand(0, 360);
        opt.h2 = rand(0, 360);
        opt.s1 = rand(20, 90);
        opt.s2 = rand(20, 90);
        opt.l1 = rand(30, 80);
        opt.l2 = rand(30, 80);
        opt.angle += deg(rand(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

        Particles.forEach((particle) => particle.randomize());
      };

      class Particle {
        constructor(x, y, p, opt) {
          this.p = p;
          this.opt = opt;
          this.x = x;
          this.y = y;
          this.lx = x;
          this.ly = y;
          this.vx = p.random(-3, 1); // Random initial x-velocity
          this.vy = p.random(-3, 1); // Random initial y-velocity
          this.ax = 0;
          this.ay = 0;
          this.randomize();
        }

        randomize() {
          this.hueSemen = Math.random();
          this.hue = this.hueSemen > 0.5 ? 20 + this.opt.h1 : 20 + this.opt.h2;
          this.sat = this.hueSemen > 0.5 ? this.opt.s1 : this.opt.s2;
          this.light = this.hueSemen > 0.5 ? this.opt.l1 : this.opt.l2;
          this.maxSpeed = this.hueSemen > 0.5 ? 2 : 1;
        }

        update() {
          this.follow();
          this.vx += this.ax;
          this.vy += this.ay;
          const p = Math.sqrt(this.vx ** 2 + this.vy ** 2);
          const a = Math.atan2(this.vy, this.vx);
          const m = Math.min(this.maxSpeed, p);
          this.vx = Math.cos(a) * m;
          this.vy = Math.sin(a) * m;
          this.x += this.vx;
          this.y += this.vy;
          this.ax = 0;
          this.ay = 0;
          this.edges();
        }

        follow() {
          const angle =
            p.noise(
              this.x * this.opt.noiseScale,
              this.y * this.opt.noiseScale,
              time * this.opt.noiseScale
            ) *
              p.PI *
              0.5 +
            this.opt.angle;
          this.ax += Math.cos(angle);
          this.ay += Math.sin(angle);
        }

        edges() {
          if (this.x < 0) this.x = p.width;
          if (this.x > p.width) this.x = 0;
          if (this.y < 0) this.y = p.height;
          if (this.y > p.height) this.y = 0;
          this.updatePrev();
        }

        updatePrev() {
          this.lx = this.x;
          this.ly = this.y;
        }

        render() {
          this.p.stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.5)`);
          this.p.point(this.x, this.y);
        }
      }
    };

    // Initialize p5 instance
    const myp5 = new p5(sketch, sketchRef.current);

    // Cleanup on component unmount
    return () => {
      myp5.remove();
    };
  }, []);

  return (
    <>
      <MainLayout ref={sketchRef} className={bem('greetings')}>
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
