import Link from 'next/link';
import { ShoppingCart, Shield, Terminal, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website Testing',
    description: 'Tested a complete e-commerce platform including authentication, product search, cart, and checkout workflows.',
    role: 'SQA Engineer',
    testing: ['Functional', 'Regression', 'UI Testing'],
    tools: ['Jira', 'Postman', 'Excel'],
    deliverables: ['50+ Test Cases', '15+ Bug Reports', 'Test Summary Report'],
    achievement: 'Identified critical checkout failure and multiple UI inconsistencies.',
    icon: ShoppingCart,
  },
  {
    title: 'Authentication System Testing',
    description: 'Tested login, signup, password reset, and authentication workflows to validate security, usability, and functional behavior.',
    testing: ['Positive Testing', 'Negative Testing', 'Boundary Value Testing'],
    deliverables: ['30+ Test Cases', '10+ Bug Reports'],
    icon: Shield,
  },
  {
    title: 'Automation Testing Project',
    description: 'Automated authentication workflows to reduce repetitive manual testing and validate critical login scenarios.',
    tools: ['Selenium', '.NET'],
    automated: ['Login validation', 'Form validation'],
    icon: Terminal,
  },
];

export default function Projects() {
  return (
    <section className="py-20 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
              FEATURED PROJECTS
            </p>
            <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
              My Projects
            </h2>
            <p className="text-base text-slate-600 max-w-2xl">
              Selected QA projects demonstrating my experience in functional testing, API testing, automation, and software quality assurance.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5EAF3] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 hover:border-blue-600 transition-all duration-200"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl text-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Role */}
                {project.role && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Role
                    </p>
                    <p className="text-sm text-slate-900">{project.role}</p>
                  </div>
                )}

                {/* Testing Types */}
                {project.testing && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Testing
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.testing.map((test, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools */}
                {project.tools && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Automated */}
                {project.automated && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Automated
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.automated.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                {project.deliverables && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Deliverables
                    </p>
                    <ul className="space-y-1">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-600">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievement */}
                {project.achievement && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs font-semibold text-blue-600 mb-1">
                      Achievement
                    </p>
                    <p className="text-sm text-slate-700">{project.achievement}</p>
                  </div>
                )}

                {/* View Details Link */}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
