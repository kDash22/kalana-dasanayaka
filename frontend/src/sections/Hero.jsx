import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";
import { Download } from "lucide-react";

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
      <div className="absoulute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
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
          {/*Left Col - text */}
          <div className="space-y-8">
            <div className="">
              <span className="inline-flex items-center gap-2 px-4 py2 rounded-full glass text-sm text-primary animate-fade-in-slow">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Coding Enthusiast · Java & Python
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-slow animation-delay-100">
                Developing{" "}
                <span className="text-primary glow-text">reliable</span>
                <br /> soltuions with
                <br />{" "}
                <span className="font-mono italic font-bold text-white">
                  precision
                </span>{" "}
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-slow animation-delay-300">
                Hi, I'm Kalana Dasanayaka, an ICT undergraduate focused on Java
                development and algorithmic problem solving. I build
                logic-driven systems like game engines and rule-based bots, with
                an emphasis on clean architecture. Currently expanding into
                Python for automation and backend development.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/*Right Col - dp */}
        </div>
      </div>
    </section>
  );
};
