"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link'
import Image from 'next/image';
import { Button } from './button';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 w-full backdrop-blur border-b-2 border-gray-300 border-opacity-25 flex justify-between items-center px-8 shadow-md bg-[#F6F4DE] z-40 h-28">
      <Logo closeMenu={closeMenu} />

      <NavLinks pathname={pathname} className="hidden show-on-custom space-x-8" />

      <div className="flex items-center space-x-4">
        <Button variant='ghost' onClick={toggleMenu} className='block hide-on-custom'>
          <Image 
            src = '/icons/burger.png'
            width = {40}
            height = {40}
            alt = 'menu icon'
          />
        </Button>
      </div>

      {isMenuOpen && (
        <FullScreenMenu closeMenu={closeMenu} pathname={pathname} />
      )}
    </header>
  );
}

function Logo({ closeMenu }: { closeMenu: () => void }) {
  return (
    <Link href='/' onClick={closeMenu} className="flex items-center space-x-2">
      <Image 
        src='/logos/sembezaafrica_logo.png' 
        alt='Sembeza Africa logo' 
        priority 
        width={96} 
        height={96} 
        className='w-24'
      />
      {/* Add text if needed */}
      <div className="flex flex-col">
        <span className="font-black text-xl text-[#505A28]">SEMBEZA</span>
        <span className="font-black text-xl text-[#505A28]">AFFRICA</span>
      </div>
    </Link>
  )
}

function NavLinks({ pathname, className, onClick }: { pathname: string, className?: string, onClick?: () => void }) {
  return (
    <nav className={clsx(className, "text-[#505A28] font-medium")}>
      {/* <Link href="/" onClick={onClick} className={clsx(
        pathname === '/' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl'
      )}>
        Home
      </Link> */}
      <Link href="/who-we-are" onClick={onClick} className={clsx(
        pathname === '/who-we-are' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl p-2'
      )}>
        Who we are
      </Link>
      <Link href="/what-we-do" onClick={onClick} className={clsx(
        pathname === '/what-we-do' ? 'underline' : 'no-underline', // Fixed pathname match
        'hover:underline transition-all md:text-xl p-2'
      )}>
        What we do
      </Link>
      <a href="https://buy.stripe.com/14k2av3hm1ms5HOfYZ" onClick={onClick} className={
        'hover:bg-[#F79442] transition-all md:text-xl bg-[#505A28] rounded-2xl h-11 text-[#F6F4DE] p-2 pl-3 pr-3'
      }>
        Become a member
      </a>
      <a href="https://donate.stripe.com/cN2aH13hm6GM3zGaEE" onClick={onClick} className={
        'hover:bg-[#F79442] transition-all md:text-xl bg-[#505A28] rounded-2xl h-11 text-[#F6F4DE] p-2 pl-3 pr-3'
      }>
        Donate
      </a>
    </nav>
  );
}

function FullScreenMenu({ closeMenu, pathname }: { closeMenu: () => void, pathname: string }) {

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start bg-[#F6F4DE] min-h-screen px-8">
      <div className="flex justify-between items-center mb-8">
        <Logo closeMenu={closeMenu} />
        <Button variant='ghost' onClick={closeMenu} className="text-lg font-semibold text-[#505A28] hover:!text-[#F79442]">
          <p className='hover:text-[#F79442]'>Close</p>
        </Button>
      </div>
      <NavLinks pathname={pathname} onClick={closeMenu} className="flex flex-col space-y-6 text-lg" />
      <div className="self-center w-full h-0.5 my-10 bg-[#505A28] mx-20"></div>
    
    </div>
  );
}