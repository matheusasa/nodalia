'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/publicacoes', label: 'Publicações' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm'
          : 'py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl z-[1001]">
          <span className="flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-accent-start to-accent-dark text-white text-lg font-black">
            N
          </span>
          <span className="tracking-tight text-text-primary">nodalia</span>
        </Link>

        <nav
          className={`flex items-center gap-6
            max-md:fixed max-md:inset-0 max-md:bg-white max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8 max-md:z-[1000] max-md:transition-opacity max-md:duration-300
            ${isMobileMenuOpen ? 'max-md:opacity-100 max-md:pointer-events-auto' : 'max-md:opacity-0 max-md:pointer-events-none'}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-150 py-1 max-md:text-xl
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-accent-dark after:to-accent-start after:transition-all after:duration-300
                ${pathname === link.href
                  ? 'text-text-primary after:w-full'
                  : 'text-text-secondary hover:text-text-primary after:w-0 hover:after:w-full'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-accent-start to-accent-dark text-white font-semibold text-sm rounded-full shadow-[0_0_20px_rgba(109,227,209,0.3)] hover:shadow-[0_0_30px_rgba(109,227,209,0.5)] hover:-translate-y-0.5 transition-all duration-300 max-md:text-base max-md:px-8 max-md:py-3"
          >
            Fale Conosco
          </Link>
        </nav>

        <button
          className="hidden max-md:flex flex-col gap-[5px] z-[1001] p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
        </button>
      </div>
    </header>
  );
}
