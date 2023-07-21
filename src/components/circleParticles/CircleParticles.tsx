import React, { useEffect } from 'react';
import styles from  './circleparticles.module.css';

const CircleParticles: React.FC = () => {
  useEffect(() => {
    const generateRandomNumber = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const circleCount = 100;
    const container = document.querySelector('.circle-container') as HTMLElement;

    for (let i = 1; i <= circleCount; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');

      const circleSize = generateRandomNumber(10, 30);
      const startPositionY = generateRandomNumber(10, 100);
      const framesName = `move-frames-${i}`;
      const moveDuration = 28000 + generateRandomNumber(0, 9000);

      circle.style.width = `${circleSize}px`;
      circle.style.height = `${circleSize}px`;
      circle.style.animationName = framesName;
      circle.style.animationDuration = `${moveDuration}ms`;
      circle.style.animationDelay = `${generateRandomNumber(0, 37000)}ms`;

      const keyframes = `
        @keyframes ${framesName} {
          from {
            transform: translate3d(
              ${generateRandomNumber(0, 100)}vw,
              ${startPositionY}vh,
              0
            );
          }
          to {
            transform: translate3d(
              ${generateRandomNumber(0, 100)}vw,
              ${-startPositionY - generateRandomNumber(0, 30)}vh,
              0
            );
          }
        }
      `;

      const styleSheet = document.styleSheets[0] as CSSStyleSheet;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      container.appendChild(circle);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className="circle-container"></div>
    </div>
  );
};

export default CircleParticles;
