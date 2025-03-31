"use client"

import { useState, useEffect, useRef } from "react"

export default function Counter({ className }) {
  const countersStarted = useRef(false)
  const [dollarCount, setDollarCount] = useState(0)
  const [projectCount, setProjectCount] = useState(0)
  const [facilityCount, setFacilityCount] = useState(0)
  const [tonsCount, setTonsCount] = useState(0)
  const dollarTarget = 300
  const projectTarget = 500
  const facilityTarget = 50000
  const tonsTarget = 100000
  const animationDuration = 2000

  const useIsInViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting)
        },
        { threshold: 0.1 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [ref])

    return isIntersecting
  }

  const sectionRef = useRef(null)
  const isInViewport = useIsInViewport(sectionRef)

  useEffect(() => {
    if (isInViewport && !countersStarted.current) {
      countersStarted.current = true
      const steps = animationDuration / 16
      const dollarStep = dollarTarget / steps
      const projectStep = projectTarget / steps
      const facilityStep = facilityTarget / steps
      const tonsStep = tonsTarget / steps

      let currentDollar = 0
      let currentProject = 0
      let currentFacility = 0
      let currentTons = 0

      const interval = setInterval(() => {
        currentDollar = Math.min(currentDollar + dollarStep, dollarTarget)
        setDollarCount(Math.floor(currentDollar))
        currentProject = Math.min(currentProject + projectStep, projectTarget)
        setProjectCount(Math.floor(currentProject))
        currentFacility = Math.min(currentFacility + facilityStep, facilityTarget)
        setFacilityCount(Math.floor(currentFacility))
        currentTons = Math.min(currentTons + tonsStep, tonsTarget)
        setTonsCount(Math.floor(currentTons))
        if (
          currentDollar >= dollarTarget &&
          currentProject >= projectTarget &&
          currentFacility >= facilityTarget &&
          currentTons >= tonsTarget
        ) {
          clearInterval(interval)
        }
      }, 16)

      return () => clearInterval(interval)
    }
  }, [isInViewport])

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section ref={sectionRef} className={`max-w-6xl mx-auto py-16 p-10 bg-white ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="flex flex-col items-start border-r border-gray-200 pr-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Million Dollars in Steel Sold.</h3>
            <p className="text-gray-600 mb-8">Supplying premium steel to industries globally.</p>
            <div className="mt-auto">
              <span className="text-5xl font-bold text-orange-500">${formatNumber(dollarCount)}M</span>
            </div>
          </div>
          <div className="flex flex-col items-start border-r border-gray-200 pr-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Projects Completed.</h3>
            <p className="text-gray-600 mb-8">Trusted by industries worldwide for reliable solutions.</p>
            <div className="mt-auto">
              <span className="text-5xl font-bold text-orange-500">{formatNumber(projectCount)}+</span>
            </div>
          </div>
          <div className="flex flex-col items-start border-r border-gray-200 pr-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Square Meters of Facilities.</h3>
            <p className="text-gray-600 mb-8">Operating in expansive, state-of-the-art factories.</p>
            <div className="mt-auto">
              <span className="text-5xl font-bold text-orange-500">{formatNumber(facilityCount)}+</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tons of Steel Produced.</h3>
            <p className="text-gray-600 mb-8">Delivering premium-quality steel for industrial needs.</p>
            <div className="mt-auto">
              <span className="text-5xl font-bold text-orange-500">{formatNumber(tonsCount)}+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}