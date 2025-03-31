"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=' w-full bg-[var(--dark-blue)] z-50 md:px-16 md:py-4'>
            <div className='mx-auto px-5 py-4 flex items-center justify-between'>
                <Link href={"/"}>
                    <Image src="/header-logo.png"
                        alt="logo"
                        width={180}
                        height={200}
                        className='items-center'
                    />
                </Link>
                <nav className='hidden md:flex text-white items-center space-x-12'>
                    <Link href="/" className='hover:text-[var(--orange1)] text-xl'>Home</Link>
                    <Link href="/about" className='hover:text-[var(--orange1)] text-xl'>About</Link>
                    <Link href="/service" className='hover:text-[var(--orange1)] text-xl'>Services</Link>
                    <Link href="/contact" className='hover:text-[var(--orange1)] text-xl'>Contact</Link>
                </nav>
                <div className='hidden md:block'>
                    <Link href={"/"}>
                        <button className='px-4 py-2 text-[var(--white)] bg-[var(--orange1)] rounded-md flex items-center justify-center'>
                            Get in Touch
                        </button>
                    </Link>
                </div>
                <button className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross1 size={45} className='text-[var(--white)]' /> : <HiOutlineMenuAlt3 size={45} className='text-[var(--white)]' />}
                </button>
            </div>
            {isOpen && (
                <nav className='md:hidden z-50 absolute top-16 left-0 w-full bg-[var(--orange1)] text-[var(--white)] shadow-md py-4'>
                    <ul className='flex flex-col items-center space-y-4'>
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/service" onClick={() => setIsOpen(false)}>Service</Link></li>
                        <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                        <li><button className='px-4 py-2 bg-[var(--white)] text-[var(--orange1)] rounded-lg  hover:bg-[var(--orange2)]' onClick={() => setIsOpen(false)}>Sign Up</button></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}