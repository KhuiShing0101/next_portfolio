import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'about', url: '/about'},
        { name: 'experience', url: '/experience' },
        { name: 'skills', url: '/skills'},
        { name: 'featured-projects', url: '/featured-projects' },
        // { name: 'certifications', url: '/certifications' },
        { name: 'contact', url: '/contact' },
    ],
    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
    },
}