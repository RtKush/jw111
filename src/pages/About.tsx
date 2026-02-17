import { Link } from "react-router-dom";
import Team from "../components/TeamMembers";
import PageBanner from "@/components/PageBanner";
import aboutme from "@/assets/about-me.jpeg";
import infographic from "@/assets/infographic.jpg";
import { Zap, Lock, Sparkles } from "lucide-react";

const About = () => (
  <main>
    <PageBanner title="About Us" breadcrumb="About Us" />

    {/* About Me Section */}
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl lg:h-[520px]">
            <img
              src={aboutme}
              alt="JeetWeb team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founder of{" "}
              <span className="font-bold text-foreground">JEETWEB</span> — with{" "}
              <span className="text-primary font-semibold">5+ years</span> of
              experience in full-stack development, AI integration, and digital
              growth strategies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-foreground">
                Brajeet Kumar Yadav
              </span>
              , the Founder & Co-Founder and Website Developer of Jeetweb,
              specializes in creating high-performance, modern, and fully
              optimized websites that help businesses scale faster and build a
              powerful online presence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">🌍 Vision – Jeetweb
To become a trusted digital growth partner for emerging businesses by setting new standards in performance, reliability, and online excellence.

            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              🎯 Mission – Jeetweb
To design and deliver strategic, secure, and conversion-focused digital solutions that help businesses establish authority, attract customers, and scale sustainably in the competitive online marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Members Section */}
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Meet Our Team
          </h2>
        </div>

        <Team />
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
            <p className="text-sm text-muted-foreground">
              Bank-level encryption
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 text-center border-2 border-primary/30 border-dashed card-hover">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="text-warning" size={40} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              Structure Coding
            </h3>
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
        <p className="text-muted-foreground">
          © 2025 JEETWEB.IN – India Ka Apna Automation Platform
        </p>
      </div>
    </section>
  </main>
);

export default About;
