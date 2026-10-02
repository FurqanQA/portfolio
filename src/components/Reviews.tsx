export default function Reviews() {
  return (
    <section className="py-20 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            CLIENT REVIEWS
          </p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Feedback from people I've worked with across testing and software projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white border border-[#E5EAF3] rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Placeholder Avatar */}
              <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-slate-400 text-2xl">?</span>
              </div>

              {/* Placeholder Content */}
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                <div className="h-16 bg-slate-50 rounded mt-4"></div>
              </div>

              {/* Placeholder Text */}
              <p className="text-sm text-slate-400 italic mt-4">
                Client testimonial will be added here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
