import phone from '@shared/assets/images/phone.png';

export interface ICase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
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
      src: phone,
      alt: 'increasing customer retention rate'
    }
  }
];
