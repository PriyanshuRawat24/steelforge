"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      content:
        "Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations. The project was delivered on time and the results have been outstanding.",
      author: "Priya Sharma",
      position: "CEO, TechInnovate Solutions",
      avatar: "/test1.jpg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I've worked with many companies in the past, but none have delivered the level of service and quality that this team has. They truly understand our needs and have become an invaluable partner for our business.",
      author: "Rahul Verma",
      position: "Marketing Director, Global Enterprises",
      avatar: "/test1.jpg",
      rating: 5,
    },
    {
      id: 3,
      content:
        "The team's expertise and professionalism made our complex project seem effortless. They guided us through every step of the process and delivered a solution that perfectly matched our vision.",
      author: "Ananya Patel",
      position: "Product Manager, Innovate Corp",
      avatar: "/test1.jpg",
      rating: 4,
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don{"'"}t just take our word for it. Here{"'"}s what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-10 transition-all duration-300 transform hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                  <Image
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="rounded-full object-cover border-4 border-orange-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-2">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].author}</h3>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <blockquote className="text-gray-700 text-lg md:text-xl italic leading-relaxed">
                  {testimonials[activeIndex].content}
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-orange-500 w-6" : "bg-gray-300"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center mt-12 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer transition-all duration-300 w-64 p-6 rounded-xl ${activeIndex === index
                ? "bg-white shadow-md border-t-4 border-orange-500 scale-105"
                : "bg-gray-50 opacity-70 hover:opacity-100"
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-xs text-gray-600">{testimonial.position.split(",")[1]}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 line-clamp-3">{testimonial.content.substring(0, 80)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

