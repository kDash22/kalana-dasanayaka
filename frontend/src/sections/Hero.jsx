import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";
import { Download } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const skills = [
  "Java",
  "Python",
  "SQL",
  "React",
  "Javascript",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Git",
  "Docker",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero img"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background"></div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Col - dp */}
          <div className="relative lg:-translate-y-8 animate-fade-in-slow animation-delay-100">
            {/* Profile Image */}
            <div className="relative w-80 h-80 md mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br
              from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-full p-2 glow-border">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpeg`}
                  alt="Kalana Dasanayaka"
                  className="w-full h-full object-cover rounded-full aspect-square"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-center py-3 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in-slow animation-delay-100">
                Kalana Dasanayaka
              </h1>
              <div className="text-center">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-basic 
                text-primary animate-fade-in-slow animation-delay-200"
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Coding Enthusiast · Java & Python
                </span>
              </div>
              <p className="text-basic text-center mx-auto items-center text-muted-foreground max-w-lg animate-fade-in-slow animation-delay-300">
                An ICT undergraduate interested in Java development and
                algorithmic problem solving.
              </p>
            </div>
          </div>

          {/*Right Col - text */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-slow animation-delay-100">
                Developing{" "}
                <span className="text-primary glow-text">reliable</span>
                <br /> solutions with
                <br />{" "}
                <span className="font-serif italic font-bold text-white">
                  precision
                </span>{" "}
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-slow animation-delay-200">
                I am working on building logic-driven systems like game engines
                and rule-based bots, with an emphasis on clean architecture.
                Currently expanding into Python for automation and backend
                development.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-slow animation-delay-300">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in-slow animation-delay-400">
              <span className="text-lg text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/kDash22" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/kalana-dasanayaka-ab3524407/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-8 h-8" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Skills section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
