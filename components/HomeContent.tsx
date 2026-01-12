import React from 'react';
import { Courses } from './Courses';
import { Footer } from './Footer';
import { Certificates } from './Certificates';

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#E63946] selection:text-white">
      {/* Navbar Placeholder - In a real app, this would be a layout component */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E63946] to-[#FA8072] flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#1D4ED8]">Sparkle</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="font-medium text-gray-700 hover:text-[#1D4ED8] transition-colors">Home</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#1D4ED8] transition-colors">Courses</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#1D4ED8] transition-colors">About Us</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#1D4ED8] transition-colors">Blog</a>
              <button className="bg-[#E63946] hover:bg-[#D62839] text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transform hover:-translate-y-0.5">
                Enquiry Now
              </button>
            </div>
            {/* Mobile menu button placeholder */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-700 hover:text-[#1D4ED8]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#1D4ED8]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E63946]/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1D4ED8] font-semibold text-sm mb-6 border border-blue-100">
              🚀 Start your study abroad journey today
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-8 leading-tight">
              Unlock Your Global Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#2563EB]">Sparkle</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Master IELTS, TOEFL, PTE, GRE, and GMAT with our expert-led training.
              We don't just teach; we pave the way for your international success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#E63946] hover:bg-[#D62839] text-white rounded-full font-semibold text-lg transition-all shadow-xl shadow-red-500/20 hover:shadow-red-500/30 flex items-center justify-center gap-2">
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 rounded-full font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-70">
              {/* Trust badges placeholders */}
              <span className="font-bold text-xl">IDP</span>
              <span className="font-bold text-xl">British Council</span>
              <span className="font-bold text-xl">Pearson</span>
              <span className="font-bold text-xl">ETS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      {/* Courses Grid */}
      <Courses />

      {/* Certificates Section */}
      <Certificates />

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
}
