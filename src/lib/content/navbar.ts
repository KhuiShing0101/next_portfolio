import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';
import { resumeCsvName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {

    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
        title1: '履歴書',
        url1:`/${resumeCsvName}`,
    },
}