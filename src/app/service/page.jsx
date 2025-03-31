"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'
import Image from 'next/image'
import { fetchServices } from '@/utils/Api'

const Page = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchServices()
      const filterData = data.slice(0,6);
      setServices(filterData);
    }

    fetchData()
  }, [])

  return (
    <>

      <Banner heading="Services" breadcrumbs={"Services"} />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20 mb-20">
  {services.map((service, index) => (
    <Link 
      href={`/service/${service.slug}`} 
      key={index} 
    >
      <div
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










    </>
  )
}

export default Page
