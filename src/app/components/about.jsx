"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = (className) => {
    return (
        <>
            <section className={`lg:min-h-screen bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-blue)]  text-[var(--white)] 
                py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-24 ${className}`}>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 items-start lg:items-center'>
                        <div className='p-4 sm:p-6 lg:p-10'>
                            <span className='flex items-center gap-2 uppercase text-xs sm:text-sm'>
                                WHO WE ARE
                                <span className='bg-[var(--orange1)] w-12 sm:w-20 h-1 rounded-sm'></span>
                            </span>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 capitalize leading-tight'>
                                Innovative Solutions for Steel Manufacturing Excellence
                            </h2>
                            <div className='mt-6 lg:mt-10'>
                                <p className='text-sm sm:text-base lg:text-lg leading-relaxed md:text-[var(--graylight)]'>
                                    <span className='text-[var(--orange1)] uppercase font-semibold'>
                                        <Link href={"/"}>SteelForge </Link>
                                    </span>
                                    is dedicated to delivering top-quality steel products with advanced manufacturing processes. Our state-of-the-art industrial plants ensure efficiency and precision in every production step.
                                </p>
                            </div>
                            <div className='mt-6 sm:mt-8'>
                                <Link href={"/"}>
                                    <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 uppercase bg-[var(--orange1)] 
                                        text-white font-semibold rounded-lg hover:bg-[var(--orange2)] transition-all 
                                        text-sm sm:text-base">
                                        Learn About us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-4 sm:space-y-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                                <div className='w-full h-[200px] sm:h-[250px] md:h-[300px]'>
                                    <Image
                                        src="/about1.jpg"
                                        alt="Steel Industry"
                                        width={900}
                                        height={600}
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                </div>
                                <div className="bg-[var(--orange1)] text-white rounded-md p-4 sm:p-6 
                                    flex flex-col justify-center space-y-6">
                                    <div className='text-center'>
                                        <span className='text-3xl sm:text-4xl md:text-5xl font-bold'>25+</span>
                                        <p className='text-xs sm:text-sm md:text-base mt-2'>Years of Experience</p>
                                    </div>
                                    <div className='text-center'>
                                        <span className='text-3xl sm:text-4xl md:text-5xl font-bold'>200+</span>
                                        <p className='text-xs sm:text-sm md:text-base mt-2'>Global Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[150px] sm:h-[200px] md:h-[250px]'>
                                <Image
                                    src="/about2.jpg"
                                    alt="Steel Industry"
                                    width={900}
                                    height={600}
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 sm:mt-10 md:mt-14 text-center'>
                        <p className='text-xs sm:text-sm md:text-base lg:text-xl md:text-[var(--graylight)]'>
                            We work with 200+ companies to deliver superior steel solutions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About