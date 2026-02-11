export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const instructors: Instructor[] = [
  {
    name: 'Dan Cunningham',
    role: 'PSADT Co-Founder & Project Lead',
    bio: 'Dan co-created PSADT and served as Project Lead until February 2026. He remains an active contributor, leveraging his deep expertise in endpoint security & management, and enterprise application deployment. His insights in the classroom are backed by real-world packaging experience from Fortune 500 companies.',
    image: '/images/about/dan.jpg',
    linkedin: 'https://linkedin.com/in/sintaxasn',
  },
  {
    name: 'Johan Arwidmark',
    role: 'Deployment Expert & Trainer',
    bio: 'Johan is a renowned expert in operating system and application deployment, recognized for his work with Microsoft Configuration Manager and Intune. As the founder of Viamonstra Academy, he brings decades of training experience to help IT professionals master deployment technologies.',
    image: '/images/about/johan.png',
    linkedin: 'https://www.linkedin.com/in/jarwidmark/',
  },
  {
    name: 'Dan Gough',
    role: 'PSADT Developer',
    bio: 'Dan Gough is also part of the PSADT dev team and is a seasoned application packaging specialist and deployment expert at Patch My PC. With extensive hands-on experience in building and troubleshooting deployment scripts across the enterprise, he offers practical, real-world insights to the course.',
    image: '/images/about/dang.jpg',
    linkedin: 'https://www.linkedin.com/in/danielgough',
  },
];
