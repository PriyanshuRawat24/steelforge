"use client"

import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>

            <section className="relative bg-[var(--dark-blue)] text-white py-12 md:py-16 px-4 sm:px-6 md:px-20 lg:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-12">
                        <div className="w-full text-center md:text-left md:mt-12 sm:mt-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
                                BUILDING SUPERIOR STEEL SOLUTIONS FOR MODERN INDUSTRIES
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-1 md:order-none">
                            <Image
                                src="/banner.jpg"
                                alt="Steel Industry"
                                width={800}
                                height={700}
                                className="w-full h-auto max-h-[500px] object-cover rounded-lg opacity-70"
                            />
                        </div>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-gray-300">
                                SteelForge is your trusted partner in delivering advanced steel manufacturing solutions. With a commitment to quality and innovation, we create reliable and efficient industrial plants tailored to your needs.
                            </p>
                            <button className="w-full md:w-auto px-6 py-3 bg-[var(--orange1)] text-white font-semibold rounded-lg hover:bg-[var(--orange2)] transition uppercase">
                                EXPLORE MORE
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[var(--orange1)] text-white rounded-md space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m6-12H6" />
                                    </svg>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-semibold uppercase">Efficient Processes</h3>
                                        <p className="text-base md:text-xl font-light mt-2">Advanced systems ensuring smooth industrial operations.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-[var(--orange1)] text-white rounded-md space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-semibold uppercase">Global Standards</h3>
                                        <p className="text-base md:text-xl font-light mt-2">Advanced systems ensuring smooth industrial operations.</p>
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
