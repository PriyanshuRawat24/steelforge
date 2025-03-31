"use client"

import Image from 'next/image';
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { fetchServices } from '@/utils/Api';
import Link from 'next/link';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchServices()
            const filterData = data.slice(0, 4);
            setServices(filterData)
        }
        fetchData()
    }, [])

    return (
        <>
            <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h5 className='text-sm sm:text-base lg:text-lg uppercase text-[var(--gray-dark)] mb-2'>
                            Our Services
                        </h5>
                        <div className='bg-[var(--orange1)] w-16 sm:w-20 h-1 mx-auto mb-4'></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Quality Steel Manufacturing Solutions
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                            At SteelForge, we provide innovative and reliable steel manufacturing services tailored to meet industrial demands,
                            ensuring excellence in every process.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <Link
                                href={`/service/${service.slug}`}
                                key={service.id || index}
                                className="block h-full"
                            >
                                <div className="relative group overflow-hidden rounded-lg shadow-lg h-full transition-all duration-300 hover:shadow-xl">
                                    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, 
                                                   (max-width: 768px) 50vw,
                                                   25vw"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 sm:p-4 transition-transform duration-300 group-hover:-translate-y-16 sm:group-hover:-translate-y-20">
                                            <h3 className="text-base sm:text-lg font-semibold truncate">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                                            <p className="text-sm sm:text-base text-white line-clamp-2">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-500 text-white rounded-full p-1.5 sm:p-2 group-hover:animate-shake">
                                            <FaArrowUp className="w-4 h-4 sm:w-6 sm:h-6 rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service