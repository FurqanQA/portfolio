import Link from 'next/link';
import { Search, Plug, Bug, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Manual Testing',
    description: 'Functional, regression, exploratory, UI/UX, and cross-browser testing to identify issues before they reach users.',
    icon: Search,
  },
  {
    title: 'API Testing',
    description: 'Validate APIs using Postman by checking endpoints, request/response behavior, status codes, data validation, and error handling.',
    icon: Plug,
  },
  {
    title: 'Bug Reporting',
    description: 'Clear and actionable bug reports with reproduction steps, expected vs actual results, severity, priority, screenshots, and supporting evidence.',
    icon: Bug,
  },
  {
    title: 'QA Consultation',
    description: 'Test planning, test case design, QA process improvement, and practical recommendations for improving product quality.',
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            MY SERVICES
          </p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
            What I Offer
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Reliable, detail-oriented QA services focused on finding defects, improving usability, and helping teams release better software.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5EAF3] rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl text-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
