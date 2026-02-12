import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import GradientCard from "@/components/GradientCard";
import {
  Building2,
  Briefcase,
  User,
  MapPin,
  Calendar,
  FileText,
  GraduationCap,
  Store,
  Newspaper,
  Check,
} from "lucide-react";

const serviceCategories = [
  {
    icon: Building2,
    title: "Company",
    subtitle: "Company Websites",
    items: [
      "Business portfolio website",
      "Company profile website",
      "About, services, careers, contact pages",
    ],
  },
  {
    icon: Briefcase,
    title: "Service",
    subtitle: "Service-Based Business Websites the idea",
    items: [
      "Coaching website",
      "Agency website",
      "Freelancer website",
      "Consultation booking website",
    ],
  },
  {
    icon: User,
    title: "Person",
    subtitle: "Personal Branding Websites",
    items: [
      "Portfolio website",
      "Influencer website",
      "Author / speaker website",
      "Resume website",
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    subtitle: "Local Business Websites",
    items: ["Restaurant", "Gym & fitness", "Salons", "Real estate businesses"],
  },
  {
    icon: Calendar,
    title: "Calendar",
    subtitle: "Booking & Appointment Websites",
    items: [
      "Doctor appointment system",
      "Salon booking",
      "Event booking",
      "Online scheduling system",
    ],
  },
  {
    icon: FileText,
    title: "Briefcase",
    subtitle: "Professional Service Websites",
    items: [
      "Lawyers",
      "CA / Finance",
      "Consultants",
      "Architecture & interior",
    ],
  },
  {
    icon: GraduationCap,
    title: "GraduationCap",
    subtitle: "Educational Websites",
    items: [
      "Coaching institute",
      "LMS (Learning Management System)",
      "Online courses website",
      "Digital classroom",
    ],
  },
  {
    icon: Store,
    title: "Store",
    subtitle: "Marketplace Websites",
    items: [
      "Multi-vendor marketplace",
      "Service marketplace",
      "Rental marketplace",
    ],
  },
  {
    icon: Newspaper,
    title: "Newspaper",
    subtitle: "Blogging & News Websites",
    items: ["Magazine style", "News portal", "Content management system"],
  },
];

const Services = () => (
  <main>
    <PageBanner title="Services" breadcrumb="Services" />

    {/* Intro */}
    <section className="py-16">
      <div className="section-container text-center">
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          We build all types of business websites — from simple corporate sites
          to advanced e-commerce, booking systems, web apps, and complete
          digital solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-dark text-sm">
            Call to action
          </Link>
          <a
            href="mailto:hello@jeetweb.com"
            className="px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>

    {/* Jeetweb Services Banner */}
    <section className="py-8">
      <div className="section-container">
        <div className="gradient-bg rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-xl font-bold mb-3">Jeetweb Services</h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-4xl">
            Jeetweb delivers smart digital solutions designed to attract
            customers, build trust, and accelerate business growth. We create
            modern, high-speed, mobile-friendly websites that instantly make
            your brand look professional and credible. Our custom Android and
            iOS apps help businesses automate operations and increase customer
            engagement. With powerful AI branding and graphic design we shape a
            visual identity that grabs attention and stays memorable. Our
            digital marketing strategies—SEO, Google Ads, Meta Ads, and targeted
            lead generation—are crafted to convert clicks into real customers.
            At Jeetweb, we focus on quality, speed, and long-term results that
            help your business grow confidently.
          </p>
        </div>
      </div>
    </section>

    {/* Main Headline */}
    <section className="py-16">
      <div className="section-container text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
          We build all types of business websites that create
        </h2>
        <p className="text-xl sm:text-2xl font-semibold gradient-text">
          trust, attract customers, and convert your traffic into sales.
        </p>
      </div>
    </section>

    {/* Service Categories Grid */}
    <section className="py-12 bg-secondary/50">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">
                {cat.title}
              </h3>
              <p className="text-sm font-semibold text-primary mb-4">
                {cat.subtitle}
              </p>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      size={14}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-20">
      <div className="section-container">
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
          Choose Your Perfect Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Basic */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              SPECIAL OFFER
            </span>
            <h3 className="text-xl font-bold mb-1">BASIC</h3>
            <p className="text-sm opacity-80 mb-4">Single Page Websites</p>
            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• Starter One-Small Business / Personal</li>
              <li>• Starter Offer: 1 Year Free Domain & Hosting</li>
              <li>• 1 Template</li>
              <li>• Contact Form + Social Media Integration</li>
              <li>• Full Responsive Design</li>
              <li>• SSL Certificate Included</li>
            </ul>
            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹12,000</span>
              <p className="text-3xl font-extrabold">₹5,999</p>
            </div>
            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* Standard */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              BEST SELLING
            </span>
            <h3 className="text-xl font-bold mb-1">STANDARD</h3>
            <p className="text-sm opacity-80 mb-4">Multi Page Best Selling</p>
            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• Starter Offer: 1 Year Free Domain & Hosting</li>
              <li>• Basic E-commerce Setup (up to 10 products)</li>
              <li>• Full Custom Coding</li>
              <li>• Full Responsive Design</li>
              <li>• Pages: 10-15 Customizable Pages</li>
              <li>• Blog / News Section</li>
            </ul>
            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹18,000</span>
              <p className="text-3xl font-extrabold">₹9,999</p>
            </div>
            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* Advance */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[hsl(271,81%,56%)] to-[hsl(271,81%,40%)] text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              SPECIAL OFFER
            </span>
            <h3 className="text-xl font-bold mb-1">ADVANCE</h3>
            <p className="text-sm opacity-80 mb-4">
              Fully Functional (Dynamic)
            </p>
            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• Starter Offer: 1 Year Free Domain & Premium Hosting</li>
              <li>• Starter Yearly – Free Maintenance (1 Year)</li>
              <li>• Admin Panel + User Login System</li>
              <li>• Payment Gateway Integration</li>
              <li>• Full Custom Coding (Fully Responsive)</li>
              <li>• Advanced SEO & Performance Optimization</li>
            </ul>
            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹40,000</span>
              <p className="text-3xl font-extrabold">₹14,999</p>
            </div>
            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[hsl(330,80%,50%)] to-[hsl(271,81%,56%)] text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              SPECIAL OFFER
            </span>
            <h3 className="text-xl font-bold mb-1">PREMIUM</h3>
            <p className="text-sm opacity-80 mb-4">
              Fully Functional Premium Website
            </p>
            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• Starter Offer: 1 Year Free Domain & Hosting</li>
              <li>• All Admin Products / Services</li>
              <li>• Unlimited Products / Services</li>
              <li>• Advanced SEO & Performance Optimization</li>
              <li>• Payment Gateway + Wallet System</li>
              <li>• Multi Language + Multi Currency</li>
              <li>• Live Chat + WhatsApp Business API</li>
            </ul>
            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹60,000</span>
              <p className="text-3xl font-extrabold">₹24,999</p>
            </div>
            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Social Media Management Pricing */}
    <section className="py-10">
      <div className="section-container">
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
          Choose Your Social Media Growth Strategy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1 Month */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              STARTER
            </span>
            <h3 className="text-xl font-bold mb-1">1 Month</h3>
            <p className="text-sm opacity-80 mb-4">
              Best For: Startups & Trial
            </p>

            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• 4 Posts Per Week (16 Posts)</li>
              <li>• Graphics + Reels Content</li>
              <li>• Basic Profile Optimization</li>
              <li>• Hashtag Strategy</li>
              <li>• Weekly Report</li>
              <li>• 3 Platforms Management</li>
            </ul>

            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹7,999</span>
              <p className="text-3xl font-extrabold">₹4,999</p>
            </div>

            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* 4 Months */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              GROWTH
            </span>
            <h3 className="text-xl font-bold mb-1">4 Months</h3>
            <p className="text-sm opacity-80 mb-4">Consistent Growth Plan</p>

            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• 4 Posts Per Week (64 Posts)</li>
              <li>• Reels Strategy</li>
              <li>• Full Profile Setup</li>
              <li>• Advanced Hashtag Research</li>
              <li>• Weekly Analytics</li>
              <li>• Engagement Strategy</li>
              <li>• Competitor Analysis</li>
            </ul>

            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹24,999</span>
              <p className="text-3xl font-extrabold">₹14,999</p>
            </div>

            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* 8 Months */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[hsl(271,81%,56%)] to-[hsl(271,81%,40%)] text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              PROFESSIONAL
            </span>
            <h3 className="text-xl font-bold mb-1">8 Months</h3>
            <p className="text-sm opacity-80 mb-4">Brand Building Plan</p>

            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• 4 Posts Per Week (128 Posts)</li>
              <li>• Premium Reels Strategy</li>
              <li>• Advanced Optimization</li>
              <li>• Audience Targeting</li>
              <li>• Weekly + Monthly Reports</li>
              <li>• Brand Positioning Support</li>
            </ul>

            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹48,999</span>
              <p className="text-3xl font-extrabold">₹29,999</p>
            </div>

            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* 12 Months */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[hsl(330,80%,50%)] to-[hsl(271,81%,56%)] text-primary-foreground p-6 flex flex-col">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full self-start mb-4">
              ELITE
            </span>
            <h3 className="text-xl font-bold mb-1">12 Months</h3>
            <p className="text-sm opacity-80 mb-4">Authority & Domination</p>

            <ul className="space-y-2 text-xs opacity-90 flex-1 mb-6">
              <li>• 4 Posts Per Week (192 Posts)</li>
              <li>• Complete Content Strategy</li>
              <li>• Full Profile Optimization</li>
              <li>• Paid Ads Guidance</li>
              <li>• Advanced Analytics</li>
              <li>• Market + Competitor Analysis</li>
              <li>• Monthly Strategy Calls</li>
            </ul>

            <div className="mb-4">
              <span className="text-sm line-through opacity-60">₹59,999</span>
              <p className="text-3xl font-extrabold">₹34,999</p>
            </div>

            <Link
              to="/contact"
              className="bg-primary-foreground text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="section-container">
        <GradientCard
          title="Ready to Build Your Dream Website?"
          description="Let's turn your vision into a reality. Contact us today for a free consultation."
          buttonText="Start Your Project"
          buttonTo="/contact"
        />
      </div>
    </section>
  </main>
);

export default Services;
