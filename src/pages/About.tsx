import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import aboutTeam from "@/assets/about-team.jpg";
import infographic from "@/assets/infographic.jpg";
import { Zap, Lock, Sparkles } from "lucide-react";

const About = () => (
  <main>
    <PageBanner title="About Us" breadcrumb="About Us" />

    {/* About Me Section */}
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={aboutTeam} alt="JeetWeb team" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">About Me</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founder of <span className="font-bold text-foreground">JEETWEB</span> — with <span className="text-primary font-semibold">5+ years</span> of experience in full-stack development, AI integration, and digital growth strategies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-foreground">Brajeet</span>, the Founder & Co-Founder and Website Developer of Jeetweb, specializes in creating high-performance, modern, and fully optimized websites that help businesses scale faster and build a powerful online presence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-foreground">Brajeet Kumar Yadav</span> is a visionary entrepreneur and Founder of Jeetweb, dedicated to building smart digital and AI-driven solutions for businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Together, we help businesses launch high-converting websites, automate workflows, and deploy smart AI tools that save time and multiply revenue.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">₹10 lakhs+</p>
                <p className="text-xs text-muted-foreground mt-1">Revenue Generated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Infographic */}
    <section className="py-16 bg-secondary/50">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
          <span className="gradient-text">JEETWEB™</span>
        </h2>
        <p className="text-xl font-semibold text-foreground mb-2">WEB API</p>
        <span className="inline-block bg-gradient-to-r from-primary to-[hsl(271,81%,56%)] text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-8">INFOGRAPHIC 2025</span>
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-primary/20">
          <img src={infographic} alt="JeetWeb Web API infographic" className="w-full" loading="lazy" />
        </div>
      </div>
    </section>

    {/* 3 Feature Cards */}
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-8 text-center border-2 border-primary/30 border-dashed card-hover">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="text-warning" size={40} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Super Fast</h3>
            <p className="text-sm text-muted-foreground">0.2 sec response</p>
          </div>
          <div className="bg-card rounded-2xl p-8 text-center border-2 border-primary/30 border-dashed card-hover">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lock className="text-warning" size={40} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">100% Secure</h3>
            <p className="text-sm text-muted-foreground">Bank-level encryption</p>
          </div>
          <div className="bg-card rounded-2xl p-8 text-center border-2 border-primary/30 border-dashed card-hover">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="text-warning" size={40} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Structure Coding</h3>
            <p className="text-sm text-muted-foreground">Full integration</p>
          </div>
        </div>
      </div>
    </section>

    {/* Large gradient banner */}
    <section className="py-12">
      <div className="section-container">
        <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic">
            JEETWEB™ = Future of Automation
          </h2>
          <p className="mt-4 opacity-80 text-lg">
            Sabka API • Sabka Future • Sabka JEETWEB™
          </p>
        </div>
      </div>
    </section>

    {/* Bottom copyright */}
    <section className="py-8">
      <div className="section-container text-center">
        <p className="text-muted-foreground">© 2025 JEETWEB.IN – India Ka Apna Automation Platform</p>
      </div>
    </section>
  </main>
);

export default About;
