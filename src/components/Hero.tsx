import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="Digital agency hero background"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    <div className="section-container relative z-10 py-20">
      <div className="max-w-3xl animate-fade-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          We Build Websites & AI Solutions{" "}
          <span className="gradient-text">That Grow Your Business</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
          JeetWeb is a premium digital agency helping businesses scale with cutting-edge websites,
          AI-powered automation, and world-class mobile applications.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-gradient text-base">
            Start Your Project
          </Link>
          <Link to="/portfolio" className="btn-dark text-base">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
