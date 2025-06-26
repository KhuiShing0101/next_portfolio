import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've recently worked on",
  projects: [
    {
      id: getId(),
      name: 'Scroll360 システム',
      description: "E-commerce Warehouse Management System",
      tasks:
          "As a Senior Software Engineer, I developed and maintained the Scroll360 E-commerce project with a focus on product delivery, shipping solutions, and Excel CSV export functionality. Tasked by Brycen Japan, a Japan-based company, I contributed to building three major versions of the backend system: Version 1.0 (Zend PHP), Version 2.0 (PHP, Laravel 5.1), and Version 3.0 (PHP, Laravel 10). Each version was collaboratively developed by a team of 5 to 6 engineers, with my role encompassing RESTful API development, task assignment, and version upgrades.",
      url: 'https://www.scroll360.jp/service/system/',
      img: '/images/esharpamall.png',
      tags: ['RESTful Api','Docker','NGINX','Redis','MINIOS3','Laravel'],
    }, {
      id: getId(),
      name: 'Life Young Healthy',
      description: "Power Up Your Family's Wellness.",
      tasks:
        'I strategically developed Main Services Modules such as Body-Check, DNA-Check, Nutritionist,Vaccine,Children Treatment and Emotional Therapy.',
      url: 'https://lyhealthy.com/en',
      img: '/images/lifeyoung.png',
      tags: ['TypeScript','NodeJs','NextJs','ReactJs'],
    },
    {
      id: getId(),
      name: 'Sundai SATT University',
      description: 'University Management System',
      tasks:
          'As a Senior Developer, responsible for implementing and optimizing software solutions tailored to client needs, overseeing full project lifecycle from design to deployment, and ensuring adherence to best practices in coding and performance.',
      url: 'https://satt.jp/',
      img: '/images/Satt.png',
      tags: [ 'RESTful Api','PHP','SOLID design pattern Laravel', 'Vue',],
    },
   
    {
      id: getId(),
      name: 'HongKong Methodist Centre',
      description: 'Community and Regional Support for the Hong Kong Methodists.',
      tasks:
        'Developed database structure for multiple languages.(English, Simplified Chinese, Traditional Chinese, Arabic, and Indonesian) using ORM Eloquent. Dynamic content and images, multiple pages, and complex business logic are all key components of our project.',
      url: 'https://p237.visibleone.io/en',
      img: '/images/methodist.png',
      tags: ['PHP','Laravel', 'JavaScript', 'AJAX','Vanilla Js'],
    }
  ],
};

export default featuredProjectsSection;
