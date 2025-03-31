'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'GER 001',
    title: 'Berlin Steel Plant',
    description: 'Successfully modernized a high-capacity steel plant to maximize production in Germany.',
    image: '/project1.jpg',
    color: '#fff',
    location: 'Berlin, Germany',
    time: '18 months',
    industry: 'Heavy Steel Manufacturing',
    costEfficiency: 'Reduced operational costs by 25%'
  },
  {
    id: 'JNP 002',
    title: 'Osaka Manufacturing Hub',
    description: 'Innovative solutions for steel production optimization in Japan.',
    image: '/project2.jpg',
    color: '#fff',
    location: 'Osaka, Japan',
    time: '18 months',
    industry: 'Heavy Steel Manufacturing',
    costEfficiency: 'Reduced operational costs by 25%'
  },
  {
    id: 'USA 003',
    title: 'Houston Industrial Complex',
    description: 'Cutting-edge modernization of steel manufacturing facilities in the USA.',
    image: '/project3.jpg',
    color: '#fff',
    location: 'Houston, USA',
    time: '18 months',
    industry: 'Heavy Steel Manufacturing',
    costEfficiency: 'Reduced operational costs by 25%'
  }
];

const ProjectCard = ({
  i,
  id,
  title,
  description,
  image,
  color,
  location,
  time,
  industry,
  costEfficiency,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen w-full mx-auto flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] w-full max-w-6xl rounded-md p-6 sm:p-10 origin-top`}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-[40%]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[var(--orange1)] text-3xl sm:text-4xl font-semibold">
                {id}
              </span>
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 uppercase  bg-[var(--orange1)] text-[var(--white)] font-semibold rounded-lg hover:bg-[var(--orange2)] transition duration-300 ease-in-out transform hover:scale-105">
                  <ArrowUpRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl text-[var(--gray-dark)] font-semibold mb-4">{title}</h2>
            <p className="text-[var(--gray-dark)] mb-4">{description}</p>
            
            <div className="space-y-3">
              {[
                { label: 'Location', value: location },
                { label: 'Time', value: time },
                { label: 'Industry', value: industry },
                { label: 'Cost Efficiency', value: costEfficiency }
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b border-gray-600 pb-2">
                  <span className="text-[var(--gray-dark)] uppercase text-sm">{item.label}</span>
                  <span className="font-semibold text-[var(--gray-dark)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[60%] rounded-lg overflow-hidden">
            <motion.div
              className="w-full h-[300px] md:h-[500px] relative"
              style={{ scale: imageScale }}
            >
              <Image 
                fill 
                src={image} 
                alt="Project Image" 
                className="object-cover" 
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className="bg-slate-950 text-white mt-32">
        <section className="h-[70vh] w-full grid place-content-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div>
            <p></p>
            </div>       
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[120%]">
              SteelForge Projects <br /> Innovative Manufacturing Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
              Discover groundbreaking projects by SteelForge, revolutionizing steel factory and industrial plant manufacturing with efficiency and precision.
            </p>
          </div>
        </section>

        <section ref={container} className="w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
};

export default ProjectsPage;