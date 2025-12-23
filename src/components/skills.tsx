'use client';

import { motion } from 'framer-motion';

import type { skillsData } from '../lib/data';
import { skillsData as skills } from '../lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mt-10 grid w-full grid-cols-4 gap-8 px-5 sm:grid-cols-6 sm:px-0 md:mt-14 md:grid-cols-7 lg:grid-cols-8">
      {skills.map((skill: (typeof skillsData)[number], index: number) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="flex items-center justify-center"
        >
          {skill.icon}
        </motion.div>
      ))}
    </div>
  );
};
