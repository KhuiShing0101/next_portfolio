import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've recently worked on",
  projects: [
    {
      id: getId(),
      name: 'Life Young Healthy',
      description: "Power Up Your Family's Wellness.",
      tasks:
        'I strategically developed Main Services Modules such as Body-Check, DNA-Check, Nutritionist,Vaccine,Children Treatment and Emotional Therapy.',
      url: 'https://lyhealthy.com/en',
      img: '/images/lifeyoung.png',
      tags: ['PHP','Laravel','JavaScript','AJAX','Vanilla Js'],
    },
    {
      id: getId(),
      name: 'HongKong Methodist Centre',
      description: 'First Telemedicine Platform in Myanmar.',
      tasks:
        'Developed database structure for multiple languages.(English, Simplified Chinese, Traditional Chinese, Arabic, and Indonesian) using ORM Eloquent. Dynamic content and images, multiple pages, and complex business logic are all key components of our project.',
      url: 'https://p237.visibleone.io/en',
      img: '/images/methodist.png',
      tags: ['PHP','Laravel', 'JavaScript', 'AJAX','Vanilla Js'],
    },
  ],
};

export default featuredProjectsSection;
