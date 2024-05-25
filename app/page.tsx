"use client"
import Head from "next/head";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
import Image from "next/image";


export default function Home() {
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        gsap.from(".hero-text", { duration: 1.5, y: 30, opacity: 0, ease: "power4.out", stagger: 0.25 });
        gsap.from(".hero-button", { duration: 1.5, y: 30, opacity: 0, ease: "power4.out", stagger: 0.25 });
        gsap.fromTo(".note", { y: -20, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "bounce.out", stagger: 0.2 });
    })

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Head>
          <title>Home - Together Notes</title>
        </Head>

        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900">Together Notes</h1>
                <nav>
                    <Link href="/login"
                       className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Login</Link>
                </nav>
            </div>
        </header>

          <main className="flex-grow flex items-center justify-center">
              <div className="text-center p-8">
                  <h2 className="hero-text text-4xl font-bold text-gray-900 mb-4">Welcome to Together Notes</h2>
                  <p className="hero-text text-lg text-gray-700 mb-6">Collaborate seamlessly with your team in
                      real-time.</p>
                  <div className="flex justify-center space-x-4">
                      <Link href="/docs"
                            className="hero-button py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#2383E2] hover:bg-[#1a6bbf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2383E2]">
                          Get Started
                      </Link>
                      <Link href="/signup"
                            className="hero-button py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                          Create an account
                      </Link>
                  </div>
                  <div className="flex space-x-4 justify-center mt-4">
                    <div className="note bg-white p-4 rounded-lg shadow-md transform rotate-3">
                        <Image src="/icons/note.svg" alt="Note" width={64} height={64}/>
                    </div>
                    <div className="note bg-white p-4 rounded-lg shadow-md transform -rotate-3">
                        <Image src="/icons/collab.svg" alt="Collab" width={64} height={64}/>
                    </div>
                    <div className="note bg-white p-4 rounded-lg shadow-md transform rotate-6">
                        <Image src="/icons/pencil.svg" alt="Pencil" width={64} height={64}/>
                    </div>
                </div>
            </div>
        </main>

          <footer className="bg-white shadow-md">
              <div className="container mx-auto px-6 py-4 text-center text-gray-700">
                  © 2024 Together Notes. All rights reserved.
              </div>
          </footer>
      </div>
  );
}
