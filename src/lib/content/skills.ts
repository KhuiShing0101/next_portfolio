import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
      {
        id: getId(),
        title: 'Languages',
        lottie: {
          light: '/lotties/coding.json',
          dark: '/lotties/coding.json',
        },
        points: [
          'Proficient in multiple programming languages for versatile development',
          'Strong foundation in both backend and frontend technologies',
          'Experience in building scalable applications across different platforms',
        ],
        softwareSkills: [
          { name: 'php', icon: 'logos:php' },
          { name: 'nodejs', icon: 'logos:nodejs-icon' },
          { name: 'java', icon: 'logos:java' },
          { name: 'typescript', icon: 'logos:typescript-icon' },
          { name: 'javascript', icon: 'logos:javascript' },
        ],
      },

      {
        id: getId(),
        title: 'Framework & Libraries',
        lottie: {
          light: '/lotties/coding.json',
          dark: '/lotties/coding.json',
        },
        points: [
          'Experience in modern web frameworks for rapid development',
          'Building robust and scalable applications using industry-standard tools',
          'Full-stack development with both backend and frontend frameworks',
        ],
        softwareSkills: [
          { name: 'laravel', icon: 'logos:laravel' },
          { name: 'express.js', icon: 'simple-icons:express' },
          { name: 'react', icon: 'logos:react' },
          { name: 'nextjs', icon: 'logos:nextjs-icon' },
          { name: 'vue', icon: 'logos:vue' },
          { name: 'spring boot', icon: 'logos:spring-icon' },
          { name: 'django', icon: 'logos:django-icon' },
        ],
      },

      {
        id: getId(),
        title: 'Databases',
        lottie: {
          light: '/lotties/cloudinfra.json',
          dark: '/lotties/cloudinfra.json',
        },
        points: [
          'Experience with both SQL and NoSQL databases',
          'Database design, optimization, and ORM implementation',
          'Ensuring data integrity and performance in production systems',
        ],
        softwareSkills: [
          { name: 'mysql', icon: 'logos:mysql-icon' },
          { name: 'eloquent orm', icon: 'logos:laravel' },
          { name: 'postgresql', icon: 'logos:postgresql' },
          { name: 'prisma orm', icon: 'logos:prisma' },
        ],
      },

      {
        id: getId(),
        title: 'Deployment & Cloud',
        lottie: {
          light: '/lotties/cloudinfra.json',
          dark: '/lotties/cloudinfra.json',
        },
        points: [
          'Experience in deploying and managing cloud infrastructure',
          'CI/CD pipeline automation and DevOps practices',
          'Serverless architecture and containerization',
        ],
        softwareSkills: [
          { name: 'gcp', icon: 'logos:google-cloud' },
          { name: 'aws', icon: 'logos:aws' },
          { name: 'vercel', icon: 'logos:vercel-icon' },
          { name: 'firebase', icon: 'logos:firebase' },
          { name: 'lambda', icon: 'logos:aws-lambda' },
          { name: 'lightsail', icon: 'logos:aws' },
          { name: 'ec2', icon: 'logos:aws-ec2' },
          { name: 'github ci/cd', icon: 'logos:github-actions' },
          { name: 'gitlab ci/cd', icon: 'logos:gitlab' },
          { name: 'docker', icon: 'logos:docker-icon' },
        ],
      },

      {
        id: getId(),
        title: 'Others',
        lottie: {
          light: '/lotties/coding.json',
          dark: '/lotties/coding.json',
        },
        points: [
          'API design and development following REST principles',
          'Linux system administration and server management',
          'Productivity tools for efficient development workflow',
        ],
        softwareSkills: [
          { name: 'restful api', icon: 'logos:postman-icon' },
          { name: 'ubuntu os', icon: 'logos:ubuntu' },
          { name: 'vim', icon: 'logos:vim' },
          { name: 'notion', icon: 'simple-icons:notion' },
        ],
      },
    ],
};
