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
            <section className="bg-white py-12 md:mt-[-100px] sm:mt-[60rem]">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-[60rem] sm:mt-0 md:mt-[1rem]">
                    <h5 className='text-center uppercase text-lg text-[var(--gray-dark)] mb-2'>Our Services</h5>
                    <p className='bg-[var(--orange1)] w-20 h-1 text-center mx-auto mb-4'></p>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Quality Steel Manufacturing Solutions
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            At SteelForge, we provide innovative and reliable steel manufacturing services tailored to meet industrial demands,
                            ensuring excellence in every process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <Link
                                href={`/service/${service.slug}`}
                                key={index}
                            >
                                <div
                                    key={index}
                                    className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="relative w-full h-[500px] pt-[75%]">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={500}
                                            height={800}
                                            className="absolute inset-0 w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transition-transform duration-300 group-hover:-translate-y-20">
                                            <h3 className="text-lg font-semibold">{service.title}</h3>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
                                            <p className="text-sm md:text-base text-white">{service.description}</p>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-2 group-hover:animate-shake">
                                            <FaArrowUp className="w-6 h-6 rotate-45" />
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
