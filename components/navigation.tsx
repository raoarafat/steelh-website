'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MegaMenu } from './mega-menu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringMegaMenu, setIsHoveringMegaMenu] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHoveringNav || isHoveringMegaMenu) {
      setMegaMenuOpen(true);
    } else {
      // Add a small delay before closing to allow for mouse movement between elements
      const timer = setTimeout(() => {
        setMegaMenuOpen(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isHoveringNav, isHoveringMegaMenu]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (megaMenuOpen) {
      setMegaMenuOpen(false);
    }
  };

  const handleMenuHover = (menu: string) => {
    // Only set active menu for "roles" since we're removing mega menu for services and about
    if (menu === 'roles') {
      setActiveMenu(menu);
      setIsHoveringNav(true);
    }
  };

  const handleNavMouseLeave = () => {
    setIsHoveringNav(false);
  };

  const closeMegaMenu = () => {
    setIsHoveringNav(false);
    setIsHoveringMegaMenu(false);
    setMegaMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7f3e9]/95 backdrop-blur-md shadow-sm'
          : 'bg-[#f7f3e9]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Steel Horizon Solutions Logo"
            width={200}
            height={55}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div>
            <Link
              href="/services"
              className="text-[#333] hover:text-[#4d80e4] transition-colors text-sm"
            >
              Services
            </Link>
          </div>

          <div>
            <Link
              href="/work"
              className="text-[#333] hover:text-[#4d80e4] transition-colors text-sm font-semibold"
            >
              Portfolio
            </Link>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMenuHover('roles')}
            onMouseLeave={handleNavMouseLeave}
          >
            <Link
              href="/roles"
              className="text-[#333] hover:text-[#4d80e4] transition-colors text-sm flex items-center"
            >
              Roles
              <ChevronDown size={16} className="ml-1" />
            </Link>
          </div>

          <div>
            <Link
              href="/about"
              className="text-[#333] hover:text-[#4d80e4] transition-colors text-sm"
            >
              About
            </Link>
          </div>

          <Link
            href="/contact"
            className="text-[#333] hover:text-[#4d80e4] transition-colors text-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#333] text-[#f7f3e9] px-5 py-1.5 text-sm hover:bg-black transition-colors">
              GET IN TOUCH
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#333]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={megaMenuOpen}
        onClose={closeMegaMenu}
        activeMenu={activeMenu}
        onMouseEnter={() => setIsHoveringMegaMenu(true)}
        onMouseLeave={() => setIsHoveringMegaMenu(false)}
      />

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#f7f3e9] border-t border-gray-200 absolute w-full">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/services"
              className="text-[#333] hover:text-[#4d80e4] transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-[#333] hover:text-[#4d80e4] transition-colors py-2 font-semibold"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/roles"
              className="text-[#333] hover:text-[#4d80e4] transition-colors py-2"
              onClick={toggleMenu}
            >
              Roles
            </Link>
            <Link
              href="/about"
              className="text-[#333] hover:text-[#4d80e4] transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#333] hover:text-[#4d80e4] transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#333] text-[#f7f3e9] py-1.5 px-4 inline-block mt-2 text-center hover:bg-black"
              onClick={toggleMenu}
            >
              GET IN TOUCH
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
