"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const About = (className) => {
    return (
        <>
            <section className={`md:h-[380px] bg-[var(--dark-blue)] text-[var(--white)] py-12 md:py-16 px-4 sm:px-6 lg:px-24 ${className}`}>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div className='p-4 md:p-6 lg:p-10'>
                            <span className='flex items-center gap-2 uppercase text-sm'>
                                WHO WE ARE
                                <span className='bg-[var(--orange1)] w-20 h-1 rounded-sm'></span>
                            </span>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 capitalize'>
                                Innovative Solutions for Steel Manufacturing Excellence
                            </h2>
                            <div className='mt-10'>
                                <p className='md:text-[var(--gray-dark)] sm:text-[var(--white)] text-base leading-relaxed'>
                                    <span className='text-[var(--orange1)] uppercase'>
                                        <Link href={"/"}>SteelForge </Link>
                                    </span>
                                    is dedicated to delivering top-quality steel products with advanced manufacturing processes. Our state-of-the-art industrial plants ensure efficiency and precision in every production step. Trust SteelForge for all your steel factory and industrial needs.
                                </p>
                            </div>
                            <div className='mt-6'>
                                <Link href={"/"}>
                                    <button className="px-8 py-3 uppercase bg-[var(--orange1)] text-white font-semibold rounded-lg hover:bg-[var(--orange2)] transition">
                                        Learn About us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='w-full'>
                                    <Image
                                        src="/about1.jpg"
                                        alt="Steel Industry"
                                        width={900}
                                        height={600}
                                        className='w-full h-auto max-h-[500px] object-cover rounded-lg'
                                    />
                                </div>
                                <div className="bg-[var(--orange1)] text-white rounded-md p-6 flex flex-col justify-between">
                                    <div className='text-center'>
                                        <span className='text-4xl md:text-5xl font-bold'>25+</span>
                                        <p className='text-sm md:text-base mt-2'>Years of Experience</p>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <span className='text-4xl md:text-5xl font-bold'>200+</span>
                                        <p className='text-sm md:text-base mt-2'>Global Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <Image
                                    src="/about2.jpg"
                                    alt="Steel Industry"
                                    width={900}
                                    height={600}
                                    className='w-full h-auto max-h-[300px] object-cover rounded-lg '
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-14 text-center'>
                        <p className='md:text-[var(--gray-dark)] text-sm md:text-xl'>
                            We work with 200+ companies to deliver superior steel solutions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About