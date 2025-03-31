"use client";
import Image from 'next/image';
import Banner from '@/app/components/banner';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTools } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';

export default function Page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

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

  const ProjectCard1 = ({
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
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 uppercase bg-[var(--orange1)] text-[var(--white)] font-semibold rounded-lg hover:bg-[var(--orange2)] transition duration-300 ease-in-out transform hover:scale-105">
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

  return (
    <ReactLenis root>
      <>
        <Banner heading="Services Details" breadcrumbs={"Services Details"} />

        <div className="text-[var(--black)] pb-20">
          <div className="relative flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/4 mx-auto mt-8 lg:mt-[80px] p-4 lg:p-0">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/service-detail1.jpg"
                  alt="Steel Mill Equipment"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-md transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--dark-blue)] to-transparent p-6">
                  <p className="text-[var(--white)] text-lg md:text-xl font-medium max-w-3xl">
                    Providing precision rolling to shape steel into sheets, bars, and beams. Essential for construction and manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 px-6 lg:px-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center mb-10">
              <div className="w-20 h-2 bg-[var(--orange1)] mb-6 md:mb-0 md:mr-6"></div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--black)]">About The Service</h2>
            </div>

            <div className="bg-[var(--graylight)] bg-opacity-20 p-6 md:p-10 rounded-lg border-l-4 border-[var(--orange1)]">
              <p className="text-md lg:text-lg text-[var(--gray-dark)] leading-relaxed">
                Rolling Mill Service is designed to provide precision and efficiency in metal shaping processes. With advanced
                techniques and expert craftsmanship, we ensure optimal performance and quality results. From initial setup to ongoing
                maintenance, our service is tailored to meet the unique needs of your manufacturing operations. With a focus on
                reliability and innovation, we deliver solutions that enhance your production capabilities.
              </p>
            </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center mb-10">
              <div className="w-20 h-2 bg-[var(--orange1)] mb-6 md:mb-0 md:mr-6"></div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[var(--black)]">What is Part of The Service</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[var(--white)] p-6 rounded-lg shadow-md border border-[var(--graylight)]">
                <p className="text-lg mb-6 text-[var(--gray-dark)]">
                  We provide customized maintenance plans, operational training, and performance optimization to keep your machinery running at peak
                  efficiency. With cutting-edge tools and skilled technicians, we deliver results that enhance productivity.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--orange1)] flex items-center justify-center mr-4">
                    <FaTools size={20} className="text-[var(--white)]" />
                  </div>
                  <p className="font-medium text-[var(--dark-blue)]">Professional Equipment Servicing</p>
                </div>
              </div>

              <div className="bg-[var(--white)] p-6 rounded-lg shadow-md border border-[var(--graylight)]">
                <p className="text-lg mb-6 text-[var(--gray-dark)]">
                  We provide customized maintenance plans, operational training, and performance optimization to keep your machinery running at peak
                  efficiency. With cutting-edge tools and skilled technicians, we deliver results that enhance productivity.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--orange1)] flex items-center justify-center mr-4">
                    <FaTools size={20} className="text-[var(--white)]" />
                  </div>
                  <p className="font-medium text-[var(--dark-blue)]">Customized Maintenance Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--dark-blue)] rounded-lg p-8 mb-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[var(--white)]">Key Service Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[var(--orange1)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaArrowRightLong size={12} className="text-[var(--white)]" />
                    </div>
                    <p className="text-lg text-[var(--white)] group-hover:text-[var(--orange1)] transition-colors">
                      Precision alignment ensures smooth operation of your rolling mills.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[var(--orange1)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaArrowRightLong size={12} className="text-[var(--white)]" />
                    </div>
                    <p className="text-lg text-[var(--white)] group-hover:text-[var(--orange1)] transition-colors">
                      Advanced diagnostics identify issues before they escalate.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[var(--orange1)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaArrowRightLong size={12} className="text-[var(--white)]" />
                    </div>
                    <p className="text-lg text-[var(--white)] group-hover:text-[var(--orange1)] transition-colors">
                      Expert repairs restore your machinery to peak performance.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[var(--orange1)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaArrowRightLong size={12} className="text-[var(--white)]" />
                    </div>
                    <p className="text-lg text-[var(--white)] group-hover:text-[var(--orange1)] transition-colors">
                      Preventive maintenance minimizes unexpected disruptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--orange1)] to-[var(--orange2)] rounded-lg p-8 text-[var(--white)] shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
              <p className="text-lg mb-6">
                By choosing our Rolling Mill Service, you gain access to a dedicated team that prioritizes quality, safety, and reliability at
                every step. From upgrading existing systems to implementing new solutions, we are committed to delivering exceptional
                results for your business.
              </p>
              <button className="bg-[var(--white)] text-[var(--orange1)] hover:bg-[var(--graylight)] px-6 py-3 rounded-md font-bold transition duration-300">
                Request Service Now
              </button>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="h-[70vh] w-full grid place-content-center relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[120%]">
              SteelForge Service <br /> Innovative Manufacturing Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
              Discover groundbreaking Services by SteelForge, revolutionizing steel factory and industrial plant manufacturing with efficiency and precision.
            </p>
          </div>
        </section>

        <section ref={container} className="w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <ProjectCard1
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
      </>
    </ReactLenis>
  );
}

