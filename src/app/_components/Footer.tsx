"use client";
import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { navigation } from '@/constants';

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-sm">
                <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="sm:text-center">
                        © 2024 <a href="#" className="hover:opacity-80">Bibek Gurung</a>. All rights reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-4 items-center">
                        {navigation.map((item) => (
                            <a key={item.id} target='_blank' href={item.href} className="flex items-center gap-x-2 hover:opacity-80 transition-colors">
                                {item.name} <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-300">
                    <span>Last Updated: <time dateTime="2024-11-12">November 13, 2024</time></span>
                </div>
            </div>
        </footer>
    );
}