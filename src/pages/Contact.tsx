import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { Shield, Clock, Star } from "lucide-react";

const Contact = () => (
  <main>
    <PageBanner title="Contact Us" breadcrumb="Contact" />

    {/* CTA section */}
    <section className="py-20">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Let's Build <span className="gradient-text">Together</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to 10x Your Business? Let's talk.
        </p>
        <a href="https://wa.me/70001 86189" target="_blank" rel="noopener noreferrer" className="btn-gradient text-base inline-block">
          Start Your Project Now
        </a>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto gradient-bg rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>

    {/* Trust badges */}
    <section className="py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <Shield className="mx-auto text-primary mb-2" size={28} />
            <p className="text-sm font-semibold text-foreground">100% Secure</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-primary mb-2" size={28} />
            <p className="text-sm font-semibold text-foreground">5-Min Response</p>
          </div>
          <div className="text-center">
            <Star className="mx-auto text-primary mb-2" size={28} />
            <p className="text-sm font-semibold text-foreground">4.9/5 Rating</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
