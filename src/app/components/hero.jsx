"use client"

import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative bg-[var(--dark-blue)] text-white py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-8 md:mb-12">
                        <div className="w-full text-center md:text-left md:mt-8 sm:mt-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight uppercase">
                                Building Superior Steel Solutions for Modern Industries
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/banner.jpg"
                                alt="Steel Industry"
                                width={800}
                                height={700}
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg opacity-70"
                                priority
                            />
                        </div>
                        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
                            <p className="text-sm sm:text-base md:text-lg text-gray-300">
                                SteelForge is your trusted partner in delivering advanced steel manufacturing solutions. With a commitment to quality and innovation, we create reliable and efficient industrial plants tailored to your needs.
                            </p>
                            
                            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[var(--orange1)] text-white font-semibold rounded-lg hover:bg-[var(--orange2)] transition-colors duration-300 uppercase text-sm sm:text-base">
                                Explore More
                            </button>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                                <div className="p-4 sm:p-6 bg-[var(--orange1)] text-white rounded-md space-y-3 sm:space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m6-12H6" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase">Efficient Processes</h3>
                                        <p className="text-sm sm:text-base md:text-lg font-light mt-2">Advanced systems ensuring smooth industrial operations.</p>
                                    </div>
                                </div>
                                
                                <div className="p-4 sm:p-6 bg-[var(--orange1)] text-white rounded-md space-y-3 sm:space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase">Global Standards</h3>
                                        <p className="text-sm sm:text-base md:text-lg font-light mt-2">Advanced systems ensuring smooth industrial operations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero