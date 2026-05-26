import React from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { CuteMilkBottle } from './Illustrations';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'หน้าหลัก', view: 'home' },
    { label: 'บทความ', view: 'articles' },
    { label: 'เกี่ยวกับเรา', view: 'about' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-4 border-peachy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="w-16 h-16 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
              <CuteMilkBottle />
            </div>
            <span className="text-3xl font-bold text-heading text-warm-brown drop-shadow-sm">นมแม่อุ่นใจ</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={`text-lg font-medium transition-colors hover:text-peachy ${
                  currentView === item.view || (currentView === 'article_detail' && item.view === 'articles')
                    ? 'text-peachy'
                    : 'text-warm-brown/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-brown hover:text-peachy focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-peachy/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNav(item.view)}
                  className={`block w-full text-left px-4 py-3 rounded-2xl text-lg font-medium ${
                    currentView === item.view || (currentView === 'article_detail' && item.view === 'articles')
                      ? 'bg-peachy/10 text-peachy'
                      : 'text-warm-brown hover:bg-cream'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
