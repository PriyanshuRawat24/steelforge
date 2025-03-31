"use client"

import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

export default function Team({className}) {

  const teamMembers = [
    {
      name: "Jonathan Carter",
      position: "Chief Executive Officer",
      image: "/team1.jpg",
      socialLinks: [
        { name: "LinkedIn", url: "/", icon: <FaLinkedin className="w-4 h-4 text-white" /> },
        { name: "Twitter", url: "/", icon: <FaTwitter className="w-4 h-4 text-white" /> },
        { name: "GitHub", url: "/", icon: <FaGithub className="w-4 h-4 text-white" /> }
      ]
    },
    {
      name: "Michael Hughes",
      position: "Chief Operating Officer",
      image: "/team2.jpg",
      socialLinks: [
        { name: "LinkedIn", url: "/", icon: <FaLinkedin className="w-4 h-4 text-white" /> },
        { name: "Twitter", url: "/", icon: <FaTwitter className="w-4 h-4 text-white" /> },
        { name: "GitHub", url: "/", icon: <FaGithub className="w-4 h-4 text-white" /> }
      ]
    },
    {
      name: "Richard Blake",
      position: "Chief Technology Officer",
      image: "/team3.jpg",
      socialLinks:  [
        { name: "LinkedIn", url: "/", icon: <FaLinkedin className="w-4 h-4 text-white" /> },
        { name: "Twitter", url: "/", icon: <FaTwitter className="w-4 h-4 text-white" /> },
        { name: "GitHub", url: "/", icon: <FaGithub className="w-4 h-4 text-white" /> }
      ]
    },
    {
      name: "David Morgan",
      position: "Senior Plant Engineer",
      image: "/team4.jpg",
      socialLinks:  [
        { name: "LinkedIn", url: "/", icon: <FaLinkedin className="w-4 h-4 text-white" /> },
        { name: "Twitter", url: "/", icon: <FaTwitter className="w-4 h-4 text-white" /> },
        { name: "GitHub", url: "/", icon: <FaGithub className="w-4 h-4 text-white" /> }
      ]
    }
  ];

  return (
    <section className={`container mx-auto px-4 py-16 max-w-7xl ${className}`}>
      <div className="text-center mb-12">
        <h3 className="uppercase text-gray-600 font-medium tracking-wider mb-2">
          OUR TEAM
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-1"></div>
        </h3>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6 mb-8">
          Expert Team Building Industrial Excellence
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Meet the dedicated professionals who drive <span className="font-semibold">SteelForge{"'"}s</span> innovative
          solutions and exceptional quality in steel manufacturing and industrial operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {teamMembers.map((member, index) => (
    <div key={index} className="relative overflow-hidden group rounded-lg">
      <div className="relative h-[450px] w-full">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-300 group-hover:-translate-y-12">
        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
        <p className="text-orange-500">{member.position}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {member.socialLinks?.map((social, i) => (
          <Link 
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 hover:bg-orange-500 p-2 rounded-full transition-colors"
          >
            {social.icon || (
              <span className="text-white text-sm">{social.name}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>
    </section>
  )
}

