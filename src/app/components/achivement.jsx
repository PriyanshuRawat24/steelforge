"use client"

import Image from "next/image"
import Link from "next/link"

export default function Achievement() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src="/about1.jpg"
                alt="Steel Industry"
                width={800}
                height={700}
                className="w-full h-[300px] sm:h-[400px] md:h-[550px]  object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 pt-4 lg:pt-0">
            <div>
              <h4 className="text-sm sm:text-base text-[var(--gray-dark)] font-medium tracking-wide mb-2 flex items-center">
                ACHIEVEMENTS
                <span className="inline-block w-8 sm:w-12 h-0.5 bg-[var(--orange1)] ml-2"></span>
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] mb-4">
                Shaping Excellence in Steel Manufacturing
              </h2>
              <p className="text-sm sm:text-base text-[var(--gray-dark)]">
                <span className="font-semibold">SteelForge</span>, we pride ourselves on delivering top-tier industrial
                solutions and innovations, setting benchmarks in the steel and manufacturing industries.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-[var(--orange1)] hover:bg-[var(--orange2)] text-white font-medium 
                py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              GET STARTED
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
              {[
                { value: "500+", label: "Completed Projects Worldwide" },
                { value: "10+", label: "ISO Certifications Achieved" },
                { value: "25+", label: "Years of Industry Leadership" },
                { value: "98%", label: "On-Time Delivery Rate" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 md:p-6 bg-[var(--graylight)] bg-opacity-20 rounded-lg 
                    hover:bg-opacity-30 transition-all duration-300"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--orange1)]">
                    {item.value}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--gray-dark)] mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}