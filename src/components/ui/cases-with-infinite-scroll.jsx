"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const companyLogos = [
  {
    id: 1,
    src: "/company1.png",
    alt: "Company 1 Logo",
  },
  {
    id: 2,
    src: "/company2.png",
    alt: "Company 2 Logo",
  },
  {
    id: 3,
    src: "/company3.png",
    alt: "Company 3 Logo",
  },
  {
    id: 4,
    src: "/company4.png",
    alt: "Company 4 Logo",
  },
  {
    id: 5,
    src: "/company5.png",
    alt: "Company 5 Logo",
  },
  {
    id: 5,
    src: "/company6.png",
    alt: "Company 6 Logo",
  },
  {
    id: 5,
    src: "/company7.png",
    alt: "Company 7 Logo",
  }
];

function Company({className}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoScroll = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);

    return () => clearTimeout(autoScroll);
  }, [api, current]);

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-20 lg:py-40 text-lg ">
      <div className="px-4 sm:px-6 ">
        <div className={`flex flex-col  ${className}`}>
          <Carousel
            setApi={setApi}
            className="w-full lg:px-8 lg:mb-0"
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {companyLogos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center p-4 md:p-6">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={100}
                      className='w-full max-w-[450px] md:w-[500px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export { Company };