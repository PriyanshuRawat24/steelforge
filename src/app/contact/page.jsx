"use client"

import React from 'react'
import Banner from '../components/banner'
import Image from 'next/image'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link'

const faqData = [
    {
        id: 1,
        question: "What career opportunities are available at SteelForge?",
        answer: "Explore our diverse range of career opportunities across engineering, manufacturing, sales, research and development, and administrative roles. We offer positions for various skill levels and professional backgrounds."
    },
    {
        id: 2,
        question: "How can I apply for a job at SteelForge?",
        answer: "Visit our careers portal online, browse current openings, and submit your application directly through our website. We review each application carefully and will contact qualified candidates."
    },
    {
        id: 3,
        question: "Does SteelForge provide training for new employees?",
        answer: "Yes, SteelForge is committed to helping employees succeed by providing extensive training programs. From hands-on technical workshops to leadership development sessions, we ensure you have the tools to grow in your role. Our goal is to support your career every step of the way."
    }
];

const Page = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [mapUrl] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9993908788!2d-87.6581574!3d41.9188964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1ffbf2ffee1bc4!2s2436%20N%20Lincoln%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20USA!5e0!3m2!1sen!2sus!4v1679374800000!5m2!1sen!2sus"
    );
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Please accept terms and privacy');
            return;
        }
        console.log('Form Submitted', formData);
    };

    const toggleQuestion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    return (
        <>
            <Banner heading="Contact Us" breadcrumbs={"Contact"} />

            {/* Contact Form Section */}
            <section className="bg-[var(--dark-blue)]  py-12 lg:py-16 relative">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Content */}
                        <div className="text-white order-2 lg:order-1 mt-8 lg:mt-0">
                            <div className="mb-8">
                                <h5 className="uppercase text-[var(--orange1)] text-lg mb-2">GET IN TOUCH</h5>
                                <div className="bg-[var(--orange1)] w-20 h-1 mb-6"></div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Building Strength Through Precision Engineering
                                </h2>
                                <p className="text-[var(--graylight)] mb-8">
                                    SteelForge, we craft innovative solutions for steel factories and industrial plants,
                                    ensuring strength and reliability in every project.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-80 lg:h-[400px] w-full">
                                <Image
                                    src="/contact1.jpg"
                                    alt="Steel Factory Worker"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-[var(--white)] rounded-lg p-6 md:p-8 shadow-xl order-1 lg:order-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="fullname" className="block text-[var(--gray-dark)] font-medium mb-2">
                                            Fullname *
                                        </label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            placeholder="e.g. Robert Halton"
                                            required
                                            className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-[var(--gray-dark)] font-medium mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="e.g. Evocave Studio"
                                            className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-[var(--gray-dark)] font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. roberthalton@example.com"
                                            required
                                            className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-[var(--gray-dark)] font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. +1678 269 8249"
                                            className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="serviceType" className="block text-[var(--gray-dark)] font-medium mb-2">
                                        Service Type *
                                    </label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                    >
                                        <option value="">Select Service Type</option>
                                        <option value="custom-steel-production">Custom Steel Production</option>
                                        <option value="industrial-solutions">Industrial Solutions</option>
                                        <option value="engineering-services">Engineering Services</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-[var(--gray-dark)] font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        rows="4"
                                        className="w-full px-4 py-2 border border-[var(--graylight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--orange1)]"
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={termsAccepted}
                                        onChange={() => setTermsAccepted(!termsAccepted)}
                                        className="mt-1 mr-2 text-[var(--orange1)] focus:ring-[var(--orange1)]"
                                    />
                                    <label htmlFor="terms" className="text-[var(--gray-dark)] text-sm">
                                        I have read and accepted terms and privacy
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-[var(--orange1)] text-white py-3 px-8 rounded-md hover:bg-[var(--orange2)] transition duration-300"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="bg-[var(--white)] py-12 lg:py-16">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col items-center bg-[var(--dark-blue)] text-[var(--white)] p-6 rounded-lg">
                            <div className="bg-[var(--orange1)] p-4 rounded-full mb-4">
                                <FaPhone className="text-[var(--white)] text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">PHONE</h3>
                            <p className="text-[var(--graylight)]">+1 (800) 555-6789</p>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--dark-blue)] text-[var(--white)] p-6 rounded-lg">
                            <div className="bg-[var(--orange1)] p-4 rounded-full mb-4">
                                <FaEnvelope className="text-[var(--white)] text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">EMAIL</h3>
                            <p className="text-[var(--graylight)]">inquiry@steelforge.com</p>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--dark-blue)] text-[var(--white)] p-6 rounded-lg">
                            <div className="bg-[var(--orange1)] p-4 rounded-full mb-4">
                                <FaMapMarkerAlt className="text-[var(--white)] text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
                            <p className="text-[var(--graylight)]">2436 N Lincoln Ave, USA</p>
                        </div>
                    </div>
                    
                    {/* Map Section */}
                    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[var(--white)] py-12 lg:py-16">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h5 className="uppercase text-lg text-[var(--gray-dark)] mb-2">general questions</h5>
                        <div className="bg-[var(--orange1)] w-20 h-1 mx-auto mb-4"></div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] mb-4">
                            Answers to Common Questions
                        </h1>
                        <p className="text-[var(--gray-dark)] max-w-2xl mx-auto">
                            Find clear and helpful answers to your most common inquiries about SteelForge, the leader in steel and industrial manufacturing solutions.
                        </p>
                    </div>

                    <div className="bg-[var(--white)] shadow-lg rounded-lg overflow-hidden">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="border-b border-[var(--graylight)] last:border-b-0">
                                <button
                                    onClick={() => toggleQuestion(faq.id)}
                                    className="w-full text-left p-4 md:p-6 flex justify-between items-center hover:bg-[var(--graylight)] transition"
                                >
                                    <span className="text-base md:text-lg font-semibold text-[var(--gray-dark)]">
                                        {faq.question}
                                    </span>
                                    {openQuestion === faq.id ? (
                                        <FaChevronUp className="text-[var(--gray-dark)]" />
                                    ) : (
                                        <FaChevronDown className="text-[var(--gray-dark)]" />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openQuestion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-[var(--gray-dark)]">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page