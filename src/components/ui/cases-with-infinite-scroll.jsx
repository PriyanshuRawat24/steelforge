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
    <section className="w-full bg-white mt-10">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col ${className}`}>
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                dragFree: true,
                loop: true,
                breakpoints: {
                  '(min-width: 640px)': {
                    slides: { perView: 2, spacing: 24 },
                  },
                  '(min-width: 768px)': {
                    slides: { perView: 3, spacing: 24 },
                  },
                  '(min-width: 1024px)': {
                    slides: { perView: 5, spacing: 24 },
                  },
                },
              }}
            >
              <CarouselContent className="-ml-4 sm:-ml-6">
                {companyLogos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="pl-4 sm:pl-6 xs:basis-full basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={500}
                        height={100}
                        className="w-[300px] h-auto object-contain transition-all duration-300
                          grayscale hover:grayscale-0 opacity-75 hover:opacity-100
                          transform hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Company };