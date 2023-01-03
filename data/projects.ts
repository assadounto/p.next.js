export interface IProject {
  title?: string;
  image?: string;
  description?: string;
  technologies?: string[];
  company?: string;
  type?: string;
  year?: string;
  links?: {
    live?: string;
    source?: string;
  };
}

const projects: IProject[] = [
  {
    title: 'Vehiculum',
    image: 'vehiculum.png',
    description: 'A pixel-perfect app for online car leasing platform. At VEHICULUM, all leasing offers are available without a down payment. This offers the advantage that no large one-off payment is required to lease a car.',
    technologies: ['NuxtJs', 'SCSS', 'Figma', 'BEM Methodology'],
    company: 'PixelConn',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://www.vehiculum.de/',
    },
  },
  {
    title: 'Cheddar Up',
    image: 'cheddar-up.png',
    description: 'A web application that helps groups collect money and forms online for dues, events, fundraisers, group gifts, selling...the list goes on. For free!',
    technologies: ['React', 'Adobe XD'],
    company: 'PixelConn',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://www.cheddarup.com/',
    },
  }
];

export default projects;