'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Yusuf Bahrudin Nizar, a Fullstack Developer with a passion
          for building modern and scalable web applications. With hands-on
          experience in developing CRUD-based applications and delivering
          real-world web and mobile projects, I thrive on solving complex
          problems and creating seamless user experiences. My core stack
          includes React, Next.js, TypeScript, and Tailwind CSS for the
          frontend, along with Node.js, Express, and various databases for the
          backend. I&apos;m always eager to learn new technologies and stay
          up-to-date with industry best practices.
        </p>
        <p>
          I&apos;m open to job opportunities where I can contribute, learn, and
          grow. If you have a good opportunity that matches my skills and
          experience, don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
