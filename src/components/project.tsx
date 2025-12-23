'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { projectsData } from '../lib/data';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const gradients = [
  'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10',
  'bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10',
  'bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-amber-500/10',
];

export const Project = ({ project, index }: TProps) => {
  const { title, description, technologies, links } = project;
  const gradientClass = gradients[index % gradients.length];

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="hover:border-primary/50 group relative flex flex-col overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg md:w-1/2"
    >
      <div
        className={`absolute inset-0 ${gradientClass} opacity-0 transition-opacity group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-3">
            <Icons.preview className="text-primary size-6" />
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              className="bg-background/80 hover:bg-primary/10 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild className="group/btn">
            <Link href={links.preview} target="_blank">
              <Icons.preview className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
              Website
            </Link>
          </Button>
          {'playstoreUser' in links && links.playstoreUser && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <Link href={links.playstoreUser} target="_blank">
                <Icons.android className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                Play Store (User)
              </Link>
            </Button>
          )}
          {'playstorePsikolog' in links && links.playstorePsikolog && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <Link href={links.playstorePsikolog} target="_blank">
                <Icons.android className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                Play Store (Psikolog)
              </Link>
            </Button>
          )}
          {'appstoreUser' in links && links.appstoreUser && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <Link href={links.appstoreUser} target="_blank">
                <Icons.apple className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                App Store (User)
              </Link>
            </Button>
          )}
          {'appstorePsikolog' in links && links.appstorePsikolog && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <Link href={links.appstorePsikolog} target="_blank">
                <Icons.apple className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                App Store (Psikolog)
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
