import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
      {
        id: getId(),
        title: 'Software Development',
        lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/coding.json',
        },
        points: [
        'Experience in developing and maintaining backend services and serverless applications',
        'Experience in software architecture and design patterns',
        'Experience in leading development teams to deliver high-quality software',
        ],
        softwareSkills: [
        { name: 'php', icon: 'logos:php' },
        { name: 'laravel', icon: 'logos:laravel' },
        { name: 'typescript', icon: 'logos:typescript-icon' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'nodejs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'vue', icon: 'logos:vue' },
        { name: 'postgresql', icon: 'logos:postgresql' },
        { name: 'prisma', icon: 'logos:prisma' },
        { name: 'mysql', icon: 'logos:mysql-icon' },
        { name: 'postman api', icon: 'logos:postman-icon' },

        ],
    },

    {
        id: getId(),
        title: 'Processing Skill set( deployment )',
        lottie: {
        light: '/lotties/cloudinfra.json',
        dark: '/lotties/cloudinfra.json',
        },
        points: [
        'Experience in designing and implementing scalable cloud solutions',
        'Experience in automating infrastructure and CI/CD pipelines',
        'Experience in ensuring availability, performance, and scalability of systems and services',
        ],
        softwareSkills: [
        { name: 'Nginx', icon: 'logos:nginx' },
        { name: 'Apache', icon: 'logos:apache' },
        { name: 'aws', icon: 'logos:aws' },
        { name: 'lightsail', icon: 'logos:vercel-icon' },
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'linux', icon: 'logos:linux-tux' },
        { name: 'circleci', icon: 'logos:circleci' },
        { name: 'github action', icon: 'logos:github-icon' },
        { name: 'gitlab action', icon: 'logos:gitlab' },
        ],
    },
    ],
};
