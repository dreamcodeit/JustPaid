'use client'; // Required for App Router if using Next.js 13+

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='bg-[#faf9f5]'>
    <div className="container">
      <nav className="">
        <div className="lg:py-[20px]">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex flex-shrink-0 font-[500]">
              <Link href="/">
                <Image src="/images/logo.svg" width={125} height={22} alt="logo" />
              </Link>

              {/* Main Navigation */}
              <div className="hidden md:flex space-x-[40px] lg:ms-[50px] items-center">

                {/* PLATFORM DROPDOWN */}
                <div className="relative group">
                  <Link href="/platform" className="inline-block">Platform</Link>
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link href="/platform-gpt" className="block px-4 py-2 hover:bg-gray-100">Platform GPT</Link>
                    <Link href="/platform-receivable" className="block px-4 py-2 hover:bg-gray-100">Platform Receivable</Link>
                  </div>
                </div>

                {/* Other nav items */}
                 <div className="relative group">
                  <Link href="/platform" className="inline-block">Platform</Link>
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link href="/partners-cfo" className="block px-4 py-2 hover:bg-gray-100">Partners CFO</Link>
                    <Link href="/partners-developers" className="block px-4 py-2 hover:bg-gray-100">Partners Developers</Link>
                     <Link href="/partners-accounting" className="block px-4 py-2 hover:bg-gray-100">Partners Accounting</Link>
                    
                  </div>
                </div>

                {/* ABOUT DROPDOWN */}
               <Link href="/about" className="inline-block">About</Link>

                <Link href="/blog" className="hover:text-blue-500">Resources</Link>
              </div>
            </div>

            {/* Right-side buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:text-blue-500">Login</Link>
              <button className="primary-btn focus:outline-none">Book a demo</button>
            </div>

          </div>
        </div>
      </nav>
    </div>
    </div>
  );
}
