import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import serviceWeb from "@/assets/service-web.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceApp from "@/assets/service-app.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import {
  Globe, Bot, Smartphone, Zap, Shield, Clock,
  HeadphonesIcon, Code, TrendingUp, Star, Phone, Mail,
} from "lucide-react";

const services = [
  { image: serviceWeb, title: "Website Development", desc: "Custom, responsive websites built for performance and conversions." },
  { image: serviceAi, title: "AI & Automation", desc: "Intelligent solutions that automate workflows and boost productivity." },
  { image: serviceApp, title: "App Development", desc: "Native & cross-platform mobile apps with stunning user experiences." },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed, scoring 95+ on all performance metrics." },
  { icon: Shield, title: "100% Secure", desc: "Enterprise-grade security baked into every project we build." },
  { icon: Code, title: "Clean Code", desc: "Maintainable, scalable codebase following best practices." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Dedicated support team available round the clock." },
  { icon: TrendingUp, title: "SEO Optimized", desc: "Built with search engines in mind to maximize organic traffic." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and deliver projects ahead of schedule." },
];

const testimonials = [
  { quote: "JeetWeb transformed our online presence completely. Revenue grew 3x within 6 months!", name: "Rahul Sharma", designation: "CEO, TechStart India", avatar: "RS" },
  { quote: "The AI chatbot they built reduced our support tickets by 60%. Incredible team!", name: "Priya Patel", designation: "CTO, FinServe", avatar: "PP" },
  { quote: "Best agency we've worked with. Professional, fast, and the results speak for themselves.", name: "Amit Verma", designation: "Founder, GrowthBox", avatar: "AV" },
];

const Index = () => (
  <main>
    <Hero />

    {/* What We Do */}
    <section className="py-20">
      <div className="section-container">
        <SectionHeading title="What We Do" subtitle="We deliver end-to-end digital solutions that drive real results." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group card-hover rounded-3xl overflow-hidden bg-card shadow-lg border border-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="text-sm font-semibold text-primary hover:underline">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose JeetWeb */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <SectionHeading title="Why Choose JeetWeb" subtitle="We combine expertise, speed, and reliability to deliver excellence." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </div>
    </section>

    {/* Client Success Stories */}
    <section className="py-20">
      <div className="section-container">
        <SectionHeading title="Client Success Stories" subtitle="Don't just take our word for it — hear from our clients." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="bg-card rounded-3xl shadow-lg border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-5xl font-extrabold text-foreground">4.9<span className="text-2xl text-muted-foreground">/5.0</span></p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Based on 120+ reviews</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 70001 86189</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> support@jeetweb.com</span>
          </div>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={aboutTeam} alt="JeetWeb Team" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              About <span className="gradient-text">JeetWeb</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital age. With a track record of 50+ successful projects, we deliver solutions that make an impact.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">₹5 lakh+</p>
                <p className="text-xs text-muted-foreground mt-1">Revenue Generated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </div>
            <Link to="/about" className="btn-gradient text-sm">Learn More About Us</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
          Ready to <span className="gradient-text">10x Your Business?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's build something incredible together. Get a free consultation today.
        </p>
        <Link to="/contact" className="btn-dark text-base">Start Your Project Now</Link>
      </div>
    </section>
  </main>
);

export default Index;
