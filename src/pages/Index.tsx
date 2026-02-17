import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import serviceWeb from "@/assets/service-web.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceApp from "@/assets/service-app.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import degitalmarking from "@/assets/digital-marketing.jpg";
import socialmedia from "@/assets/social-media-management.png";
import seoranking from "@/assets/seo-google-ranking.jpg";
import robot from "../assets/robot.jpeg";
import {
  Globe,
  Bot,
  Smartphone,
  Zap,
  Shield,
  Clock,
  HeadphonesIcon,
  Code,
  TrendingUp,
  Star,
  Phone,
  Mail,
} from "lucide-react";

const services = [
  {
    image: serviceWeb,
    title: "Website Development",
    desc: "Custom, responsive websites built for performance and conversions.",
  },
  {
    image: serviceAi,
    title: "AI & Automation",
    desc: "Intelligent solutions that automate workflows and boost productivity.",
  },
  {
    image: serviceApp,
    title: "App Development",
    desc: "Native & cross-platform mobile apps with stunning user experiences.",
  },
  // NEW SERVICES 👇
  {
    image: degitalmarking,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies including SEO, paid ads, funnel optimization, and brand positioning to generate consistent leads and measurable growth.",
  },
  {
    image: socialmedia,
    title: "Social Media Management",
    desc: "Strategic content planning, high-quality creatives, reels editing, and audience engagement to build a powerful and profitable social media presence.",
  },
  {
    image: seoranking,
    title: "SEO & Google Ranking",
    desc: "Advanced search engine optimization techniques to improve your Google rankings, increase organic traffic, and dominate your niche with long-term visibility.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized for speed, scoring 95+ on all performance metrics.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Enterprise-grade security baked into every project we build.",
  },
  {
    icon: Code,
    title: "Clean Code",
    desc: "Maintainable, scalable codebase following best practices.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Dedicated support team available round the clock.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    desc: "Built with search engines in mind to maximize organic traffic.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects ahead of schedule.",
  },
];

const testimonials = [
{
  quote:
    "Focused implementation improved client retention rates, strengthened communication clarity, and increased profitability.",
  name: "Rahul Sharma",
  location: "Vijay Nagar,MP",
  avatar: "RS",
},
{
  quote:
    "Their technical expertise boosted engagement levels, optimized performance metrics, and improved market positioning.",
  name: "Aditya Mishra",
  location: "Palasia, Indore",
  avatar: "AM",
},
{
  quote:
    "Creative strategy enhanced visibility online, strengthened outreach campaigns, and increased valuable inquiries.",
  name: "Amit Verma",
  location: "Rajendra Nagar,MP",
  avatar: "AV",
},
{
  quote:
    "Professional execution accelerated revenue channels, simplified workflows internally, and reinforced brand credibility.",
  name: "Rohit Singh",
  location: "Sudama Nagar,MP",
  avatar: "RS",
},
{
  quote:
    "Innovative solutions expanded audience reach, refined communication efforts, and supported consistent expansion.",
  name: "Saurabh Kumar",
  location: "Rau, Indore",
  avatar: "SK",
},
{
  quote:
    "Strategic planning elevated conversion rates, strengthened partnerships externally, and improved operational efficiency.",
  name: "Aman Yadav",
  location: "Mhow, Indore",
  avatar: "AY",
},


];

const Index = () => (
  <main>
    <Hero />

    {/* What We Do */}
    <section className="py-20">
      <div className="section-container">
        <SectionHeading
          title="What We Do"
          subtitle="We deliver end-to-end digital solutions that drive real results."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card-hover rounded-3xl overflow-hidden bg-card shadow-lg border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={aboutTeam}
            alt="JeetWeb Team"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              About <span className="gradient-text">JeetWeb</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a team of passionate developers, designers, and strategists
              dedicated to helping businesses thrive in the digital age. With a
              track record of 50+ successful projects, we deliver solutions that
              make an impact.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Projects Done
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">₹5 lakh+</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Revenue Generated
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
            <Link to="/about" className="btn-gradient text-sm">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose JeetWeb */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <SectionHeading
          title="Why Choose JeetWeb"
          subtitle="We combine expertise, speed, and reliability to deliver excellence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.desc}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Client Success Stories */}
    <section className="py-20">
      <div className="section-container">
        <SectionHeading
          title="Client Success Stories"
          subtitle="Don't just take our word for it — hear from our clients."
        />
       <div className="relative overflow-hidden mb-12">

  {/* Fade effect left */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />

  {/* Fade effect right */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

<div className="relative overflow-hidden mb-12">
  <div className="flex gap-6 animate-scroll">
    {[...testimonials, ...testimonials].map((t, i) => (
      <div key={i} className="w-[220px] flex-shrink-0">
        <TestimonialCard {...t} />
      </div>
    ))}
  </div>
</div>



</div>

        <div className="bg-card rounded-3xl shadow-lg border border-border p-21 md:p-15 flex flex-col md:flex-row items-center justify-between gap-8">
  
  <div className="w-full md:w-[45%] flex justify-center md:justify-start md:pl-6">
    <img
      src={robot} 
      alt="Client Success"
      className="w-40 md:w-40 rounded-2x1 shadow-md object-cover"
    />
  </div>

  <div className="hidden md:flex flex-col items-center text-center px-8">
  <TrendingUp size={32} className="text-primary mb-3" />

  <p className="text-lg font-semibold text-foreground">
    Growth-Driven Results
  </p>

  <p className="text-sm text-muted-foreground mt-2 max-w-xs">
    We focus on performance, ROI, and long-term brand authority.
  </p>
</div>



  <div className="w-full md:w-[55%] flex flex-col gap-6 md:items-end text-center md:text-right md:pr-6">

    <div className="text-left md:text-right">
      <p className="text-5xl font-extrabold text-foreground">
        4.9<span className="text-2xl text-muted-foreground">/5.0</span>
      </p>

      <div className="flex md:justify-end gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className="fill-primary text-primary"
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-1">
        Based on 120+ reviews
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
      <span className="flex items-center gap-2">
        <Phone size={14} className="text-primary" /> +91 95082 37650
      </span>

      <span className="flex items-center gap-2">
        <Mail size={14} className="text-primary" /> support@jeetweb.tech
      </span>
    </div>
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
          Let's build something incredible together. Get a free consultation
          today.
        </p>
        <Link to="/contact" className="btn-dark text-base">
          Start Your Project Now
        </Link>
      </div>
    </section>
  </main>
);

export default Index;
