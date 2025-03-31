"use client"

import Image from "next/image"
import Link from "next/link"

export default function Achievement() {
  return (
    <div className="mx-auto p-10 sm:px-6 md:py-16  lg:py-20 w-full max-w-7xl lg:mb-[-800px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 md:mb-[800px] ">
        <div className="w-full">
          <div className="">
            <div className="relative">
              <Image
                src="/about1.jpg"
                alt="Steel Industry"
                width={800}
                height={700}
                className="w-[700px] h-[700px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <div>
            <h4 className="text-[var(--gray-dark)] font-medium tracking-wide mb-2 flex items-center">
              ACHIEVEMENTS <span className="inline-block w-12 h-0.5 bg-[var(--orange1)] ml-2"></span>
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] mb-4">
              Shaping Excellence in Steel Manufacturing
            </h2>
            <p className="text-[var(--gray-dark)]">
              <span className="font-semibold">SteelForge</span>, we pride ourselves on delivering top-tier industrial
              solutions and innovations, setting benchmarks in the steel and manufacturing industries.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-[var(--orange1)] hover:bg-[var(--orange2)] text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            GET STARTED
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
            {[
              { value: "500+", label: "Completed Projects Worldwide" },
              { value: "10+", label: "ISO Certifications Achieved" },
              { value: "25+", label: "Years of Industry Leadership" },
              { value: "98%", label: "On-Time Delivery Rate" }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-[var(--graylight)] bg-opacity-20 rounded-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--orange1)]">{item.value}</h3>
                <p className="text-[var(--gray-dark)] mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}