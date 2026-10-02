import { Search, Code, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Testing Types',
    icon: Search,
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'UI/UX Testing',
      'API Testing',
    ],
  },
  {
    title: 'Automation Tools',
    icon: Code,
    skills: [
      'Selenium — Python / .NET',
      'Cypress',
      'Playwright',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      'Jira — Bug Tracking',
      'Postman — API Testing',
      'Git & GitHub',
      'Chrome DevTools',
    ],
  },
  {
    title: 'QA & Methodologies',
    icon: Lightbulb,
    skills: [
      'SDLC & STLC',
      'Agile / Scrum',
      'Test Case Design',
      'Bug Reporting',
      'Regression Testing',
      'Test Scenario Design',
    ],
  },
];

const techStack = [
  'Jira',
  'Postman',
  'Playwright',
  'Selenium',
  'Cypress',
  'Git',
  'GitHub',
  'DevTools',
];

export default function Skills() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            MY SKILLS
          </p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Tools, testing methodologies, and technologies I use to analyze, test, and improve software quality.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
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
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Technology Strip */}
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-[#E5EAF3] rounded-full text-sm text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
