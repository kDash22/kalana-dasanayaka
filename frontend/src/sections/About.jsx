import { Code2, ClockArrowDown, Users, Lightbulb } from "lucide-react";
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },

  {
    icon: ClockArrowDown,
    title: "Optimization",
    description: "Finding the best posible route to the destination.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with teams to achieve maximum output and bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in-slow">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-slow animation-delay-100 text-secondary-foreground">
              Building solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one ALGORITHM at a time.
              </span>
            </h2>

            <div className="text-lg space-y-4 text-muted-foreground animate-fade-in-slow animation-delay-200 ">
              <p>
                I am an undergraduate of Bsc in ICT(General) at the University
                of Sri Jayewardenepura, Sri lanka. I build and experiment with
                software outside academics as a continuous practice. My interest
                in programming began with curiosity about how programs “think”
                and respond, which led me into exploring algorithms through
                personal projects.
              </p>

              <p>
                My current focus is on algorithmic systems such as chess engines
                and turn-based game engines. I primarily work with Java,
                strengthening my understanding of core software development
                concepts including data structures, algorithms, object-oriented
                design, and clean architecture.
              </p>

              <p>
                I am also interested in artificial intelligence and machine
                learning, and I aim to expand into Python to support this
                direction. I prioritize writing maintainable, readable, and
                well-structured code.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in-slow animation-delay-300 ">
              <p className="text-lg font-medium italic text-foreground">
                To deepen my understanding of computer science by building
                systems that emphasize correctness, efficiency, and clean
                design.
              </p>{" "}
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl animate-fade-in">
                <div>
                  <item.icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
