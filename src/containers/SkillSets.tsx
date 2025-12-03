'use client';
import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['PHP', 'NodeJS', 'Java'],
  },
  {
    title: 'Deployment',
    skills: ['GCP', 'AWS', 'Vercel', 'Firebase', 'Lambda', 'LightSail', 'EC2', 'GitHub CI-CD', 'GitLab CI-CD'],
  },
  {
    title: 'Framework & Libraries',
    skills: ['Laravel', 'Express.js', 'React', 'Next', 'Vue', 'Spring Boot', 'Django'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Eloquent ORM', 'Postgres SQL', 'Prisma ORM'],
  },
  {
    title: 'Others',
    skills: ['RESTful API', 'Ubuntu OS', 'VIM'],
  },
];

const SkillSets = () => {
  return (
    <Wrapper id="skillsets" {...getSectionAnimation}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-strong p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text capitalize">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-text text-sm flex items-center gap-2 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default SkillSets;
