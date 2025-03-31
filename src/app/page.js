"use client"

import { Company } from "@/components/ui/cases-with-infinite-scroll";
import About from "./components/about";
import Hero from "./components/hero";
import Service from "./components/service";
import Projects from "./components/project";
import Achievement from "./components/achivement";
import Team from "./components/ourteam";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <>

    {/* hero-section */}

    <Hero/>

    {/* about section */}

    <About/>

    {/* comapny */}

    <Company/>

    {/* service */}

    <Service/>

    {/* project */}

    <Projects/>

    {/* achivement */}

    <Achievement/>

    {/* our team */}

    <Team/>

    {/* testimonial */}
    
    <Testimonial/>  
      
    </>
  );
}
