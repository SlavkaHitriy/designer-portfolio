import phone from '@shared/assets/images/phone.png';
import swiftflow from '@shared/assets/images/swiftflow.png';

export interface ICase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  isWhiteText?: boolean;
  gradient: string;
  image: {
    className?: string;
    src: string;
    alt: string;
    withShadow?: boolean;
  };
}

export const cases: ICase[] = [
  {
    id: 'gooseberry',
    title: 'Increasing customer retention rate',
    subtitle: 'Gooseberry',
    description:
      'Integrating a new event feature that resulted in a 17% growth in customer retention.',
    buttonText: 'View case study',
    image: {
      className: 'gooseberry',
      src: phone,
      alt: 'increasing customer retention rate',
      withShadow: true
    },
    isWhiteText: true,
    gradient: 'linear-gradient(241deg, #2A7156 0%, #5CAB89 101.29%)'
  },
  {
    id: 'swiftflow',
    title: 'Simplifying Customer Price Setup',
    subtitle: 'SwiftFlow',
    description:
      'Accelerating training course price setup for customer portal users from 1 day to 20 minutes',
    buttonText: 'View case study',
    image: {
      className: 'swiftflow',
      src: swiftflow,
      alt: 'Simplifying Customer Price Setup'
    },
    isWhiteText: true,
    gradient: 'linear-gradient(241deg, #111928 0%, #6893C8 101.29%)'
  }
];
