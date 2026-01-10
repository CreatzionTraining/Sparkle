import React from 'react';

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Explore Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tailored curriculums designed to help you smash your target scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'IELTS Academic', color: 'bg-orange-50', iconColor: 'text-orange-600', desc: 'Expert guidance for reading, writing, listening, and speaking modules.' },
              { title: 'TOEFL iBT', color: 'bg-blue-50', iconColor: 'text-blue-600', desc: 'Master the internet-based test with our specialized strategies.' },
              { title: 'PTE', color: 'bg-green-50', iconColor: 'text-green-600', desc: 'Fast-track your english proficiency for study and migration.' },
              { title: 'GRE', color: 'bg-purple-50', iconColor: 'text-purple-600', desc: 'Ace the verbal and quantitative sections for grad school admission.' },
              { title: 'GMAT', color: 'bg-indigo-50', iconColor: 'text-indigo-600', desc: 'Top-tier preparation for business school aspirants.' },
              { title: 'Spoken English', color: 'bg-rose-50', iconColor: 'text-rose-600', desc: 'Build confidence and fluency for personal and professional growth.' },
            ].map((course, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#1D4ED8]/20 bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden">
                 <div className={`absolute top-0 right-0 w-24 h-24 ${course.color} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                 <h3 className="text-2xl font-bold text-[#0F172A] mb-3 relative z-10">{course.title}</h3>
                 <p className="text-gray-600 mb-6 relative z-10">{course.desc}</p>
                 <a href="#" className={`font-semibold ${course.iconColor} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                   Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                 </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800/50">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">10k+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E63946] mb-2">50+</div>
              <div className="text-gray-400">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-2">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gradient-to-br from-[#1D4ED8] to-[#1e40af] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             
             <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to start your journey?</h2>
             <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
               Join thousands of students who have already achieved their dream scores with Sparkle.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <button className="px-8 py-3 bg-white text-[#1D4ED8] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
                 Book Free Consultation
               </button>
               <button className="px-8 py-3 bg-[#E63946] text-white font-bold rounded-full hover:bg-[#d62839] transition-colors shadow-lg">
                 Enroll Now
               </button>
             </div>
           </div>
         </div>
       </section>

      {/* Footer Placeholder */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center">
             <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#E63946] to-[#FA8072] flex items-center justify-center text-white font-bold text-xs">S</div>
               <span className="font-bold text-xl text-gray-900">Sparkle</span>
             </div>
             <div className="text-gray-500 text-sm">
               © {new Date().getFullYear()} Sparkle Education. All rights reserved.
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
