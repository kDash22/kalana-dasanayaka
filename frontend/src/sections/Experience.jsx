const experiences = [
  {
    period: "2025 - Present",
    role: "Undergrad Bsc in ICT(general)",
    company: "University of Sri Jayewardenepura",
    description: " ",
    technologies: " ",
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks for itself.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my growth as a developer, from a curious beginner to
            (hopefully) a capable and reliable software engineer.
          </p>
        </div>

        {/* Timeline */}
      </div>
    </section>
  );
};
