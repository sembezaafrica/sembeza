"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link'
import Image from 'next/image';
import { Button } from './button';
import { useSession } from 'next-auth/react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 w-full backdrop-blur border-b-2 border-gray-300 border-opacity-25 flex justify-between items-center px-8 shadow-md text-white bg-[#f9f5ec]/80 z-40 h-28">
      <Logo closeMenu={closeMenu} />

      <NavLinks pathname={pathname} className="hidden md:flex space-x-8" />

      <div className="flex items-center space-x-4">
        <Button variant='ghost' onClick={toggleMenu} className='md:hidden'>Menu</Button>
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
        className='w-20 md:w-24'
      />
      {/* Add text if needed */}
      <div className="flex flex-col">
        <span className="font-bold text-xl text-green-800">SEMBEZA</span>
        <span className="font-bold text-xl text-green-800">AFFRICA</span>
      </div>
    </Link>
  )
}

function NavLinks({ pathname, className, onClick }: { pathname: string, className?: string, onClick?: () => void }) {
  return (
    <nav className={clsx(className, "text-green-800 font-medium")}>
      <Link href="/" onClick={onClick} className={clsx(
        pathname === '/' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl'
      )}>
        Home
      </Link>
      <Link href="/who-we-are" onClick={onClick} className={clsx(
        pathname === '/who-we-are' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl'
      )}>
        Who we are
      </Link>
      <Link href="/what-we-do" onClick={onClick} className={clsx(
        pathname === '/what-we-do' ? 'underline' : 'no-underline', // Fixed pathname match
        'hover:underline transition-all md:text-xl'
      )}>
        What we do
      </Link>
      <Link href="/become-a-member" onClick={onClick} className={clsx(
        pathname === '/become-a-member' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl'
      )}>
        Become a member
      </Link>
      <Link href="/donate" onClick={onClick} className={clsx(
        pathname === '/donate' ? 'underline' : 'no-underline',
        'hover:underline transition-all md:text-xl'
      )}>
        Donate
      </Link>
    </nav>
  );
}

function FullScreenMenu({ closeMenu, pathname }: { closeMenu: () => void, pathname: string }) {
  const session = useSession();

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start bg-white min-h-screen px-8">
      <div className="flex justify-between items-center mb-8">
        <Logo closeMenu={closeMenu} />
        <Button variant='ghost' onClick={closeMenu} className="text-lg font-semibold text-green-800">
          Close
        </Button>
      </div>
      <NavLinks pathname={pathname} onClick={closeMenu} className="flex flex-col space-y-6 text-lg" />
      <div className="self-center w-full h-0.5 my-10 bg-green-800 mx-20"></div>
      
      {session?.data?.user && (
        <Button variant='ghost' className='self-end mt-4' onClick={closeMenu}>
          <Link href='/account' className='py-2 text-xl text-green-800'>My Account</Link>
        </Button>
      )}
    </div>
  );
}