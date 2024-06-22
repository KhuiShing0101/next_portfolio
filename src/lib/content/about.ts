import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
        title: 'Here are a few technologies I’ve been working with recently:',
        items: [
            {
                title: 'Languages',
                items: ['PHP', 'JavaScript']
            },
            {
                title: 'framework & Libraries',
                items: ['Laravel', 'TypeScript', 'AJAX', 'React', 'Next', 'Vue', 'Redux Toolkit']
            },
            {
                title: 'Databases',
                items: ['MySQL', 'Eloquent ORM', 'Postgres SQL', 'Prisma ORM']
            },
            {
                title: 'Other',
                items: ['RESTful API', 'Ubuntu OS', 'VIM', 'Notion']
            },
            {
                title: 'Design',
                items: ['Photoshop', 'Illustrator']
            },
            {
                title:'Deployment',
                items:['AWS','Light-sail','Vercel','Nginx','Ubuntu','yml','Docker','Git( lab-hub )/ CI-CD']
            }
        ],
    },
    img: '/thixpin.jpg',
};