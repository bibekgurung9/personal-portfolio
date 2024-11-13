"use client";
import React, { useState } from 'react';
import { ArrowUpRightIcon, XMarkIcon, Bars2Icon } from '@heroicons/react/16/solid';
import { navigation } from '@/constants';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 text-white">
      <nav className="flex items-center justify-between p-4 lg:px-6" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5" aria-label="Navigate to homepage">
            <h1 className="text-xl font-semibold">Bibek Gurung</h1>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target='_blank'
              className="flex items-center gap-x-2 text-lg hover:text-gray-300 transition-colors"
            >
              {item.name} <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-md text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ?  <XMarkIcon className="h-6 w-6" /> : <Bars2Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-black bg-opacity-75 p-4 space-y-9 z-40">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-4 right-1 text-white p-2 rounded-md"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-lg flex items-center justify-end gap-x-1 hover:text-gray-300"
            >
              {item.name} <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
