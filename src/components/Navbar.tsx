'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white border-b border-gray-100'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Furqan Mehdi - Home"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg text-white font-bold text-lg">
              FM
            </div>
            <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Furqan Mehdi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.href)
                    ? 'text-blue-600'
                    : 'text-slate-700'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Download CV Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:bg-gray-50'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 px-4">
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
