import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'QA Engineer',
    company: 'CollabEZ',
    date: 'January 2026 – Present',
    isCurrent: true,
    responsibilities: [
      'Performing manual and functional testing on live applications',
      'Writing and executing detailed test cases',
      'Reporting and tracking bugs using Jira',
      'Collaborating with developers to resolve issues',
      'Ensuring product quality before release',
    ],
  },
  {
    role: 'SQA Engineer',
    company: 'BTECH — Virtual Internship',
    date: 'August 2025 – October 2025',
    isCurrent: false,
    responsibilities: [
      'Learned and applied software testing fundamentals',
      'Designed test cases and test scenarios',
      'Performed regression and functional testing',
      'Reported bugs with proper documentation',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Developer Hub',
    date: 'June 2025 – July 2025 (6 Weeks)',
    isCurrent: false,
    responsibilities: [
      'Developed responsive UI components',
      'Worked with HTML, CSS, and JavaScript',
      'Gained understanding of UI/UX and user behavior',
      'Collaborated in a team environment',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            MY EXPERIENCE
          </p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Hands-on experience in software quality assurance, functional testing, and frontend development, working with teams to deliver reliable and user-friendly software.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white border border-[#E5EAF3] rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 lg:left-8 top-8 w-3 h-3 bg-blue-600 rounded-full" />

              <div className="lg:ml-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="hidden lg:flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg text-blue-600">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
