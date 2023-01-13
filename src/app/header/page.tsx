"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'

type Props = {}

export default function Header({ }: Props) {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full shadow overflow-hidden">
      <div className={`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ${navbar ? "sm:min-h-screen " : "" } `}>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block text-white">
            <a href="/">
            Logo
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center h-100 space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200 sm:text-center">
                <Link href={'/'} onClick={() => setNavbar(false)}>Αρχική</Link>
              </li>
              <li className="text-white hover:text-indigo-200 sm:text-center">
                <Link href={'/about'} onClick={() => setNavbar(false)}>Σχετικά με</Link>
              </li>
              <li className="text-white hover:text-indigo-200 sm:text-center">
                <Link href={'/pricing'} onClick={() => setNavbar(false)}>Τιμοκατάλογος</Link>
              </li>
              <li className="text-white hover:text-indigo-200 sm:text-center">
                <Link href={'/contact'} onClick={() => setNavbar(false)}>Επικοινωνία</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              <a
                href="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="/login"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}