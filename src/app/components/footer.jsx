"use client";

import React from 'react';
import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaWhatsapp,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#0F1020] text-white p-10 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:pr-8">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            WE ARE THE FUTURE STEEL & INDUSTRIAL MANUFACTURING
                        </h1>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-end">
                        <Link
                            href="/"
                            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition text-center font-medium"
                        >
                            GET A QUOTE
                        </Link>
                        <Link
                            href="/"
                            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-center font-medium"
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-12">
                    {/* Logo */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="">
                                <Image
                                    src="/header-logo.png"
                                    alt="dfff"
                                    width={200}
                                    height={100}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">ADDRESS:</p>
                            <p className="text-gray-400">2436 N Lincoln Ave, Chicago, IL 60614, USA</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">CONTACT</p>
                            <p className="text-gray-400">+1 (800) 555-6789</p>
                            <p className="text-gray-400">hello@steelforge.com</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaFacebook className="w-5 h-5" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaInstagram className="w-5 h-5" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaTwitter className="w-5 h-5" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaYoutube className="w-5 h-5" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaWhatsapp className="w-5 h-5" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white">
                                <FaLinkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Company and Explore*/}
                    <div></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">COMPANY</h3>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-gray-400 hover:text-white block">About Us</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">
                                    Careers <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs ml-2">New</span>
                                </Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Our Team</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">EXPLORE</h3>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Industries Served</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Global Projects</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Our Services</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Solutions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Access*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <div>
                            <h3 className="font-bold mb-4">QUICK ACCESS</h3>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Request a Quote</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Brochure</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Login</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Visit Our Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 mt-4 md:mt-0">SUPPORT</h3>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Contact Us</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Documentation</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">FAQs</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white block">Live Chat</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-4 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="mb-4 md:mb-0 text-center md:text-left">©SteelForge. All Rights Reserved 2025. Licensing Envato Template Kit by Evocave Studio</p>
                    <p className="text-center md:text-right">Steel Factory & Industrial Plant Manufacturing – Elementor Template Kit</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;