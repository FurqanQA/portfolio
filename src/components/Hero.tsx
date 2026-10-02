import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[600px] bg-white pt-12 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-[52%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
                Software Quality Assurance Engineer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-3">
              Furqan{' '}
              <span className="text-blue-600">Mehdi</span>
            </h1>

            {/* Role */}
            <p className="text-2xl font-semibold text-slate-900 leading-relaxed mb-5">
              Software Quality Assurance Engineer
            </p>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-600 max-w-[570px] mb-7">
              Detail-oriented SQA Engineer with hands-on experience in manual and automation testing. Skilled in identifying critical defects, improving software quality, and ensuring seamless user experience. Strong background in test case design, bug reporting, and working with modern QA tools in Agile environments.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                aria-label="View Projects"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@furqanmehdi.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 w-full lg:w-[45%] relative">
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl -z-10 transform translate-x-4 translate-y-4" />
            
            {/* Profile Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Furqan Mehdi - Software Quality Assurance Engineer"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Decorative Text */}
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-blue-100">
              <p className="text-sm font-medium text-blue-600 italic">
                Quality Builds Trust
              </p>
            </div>

            {/* Stats Card */}
            <div className="absolute -left-4 top-1/4 bg-white px-5 py-4 rounded-xl shadow-lg border border-slate-100">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">1+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Years of</p>
                    <p className="text-sm font-semibold text-slate-900">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">50+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Test</p>
                    <p className="text-sm font-semibold text-slate-900">Cases</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">15+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Bug</p>
                    <p className="text-sm font-semibold text-slate-900">Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
