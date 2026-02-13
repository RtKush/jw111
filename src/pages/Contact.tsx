import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { Shield, Clock, Star } from "lucide-react";

const Contact = () => (
  <main>
    {/* CTA Section */}
    <section className="py-28">
      <div className="section-container max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1
          data-aos="fade-down"
          className="text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 leading-tight"
        >
          Let's Build Together
        </h1>

        {/* Sub Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mt-6"
        >
          Your Success Is Our Mission
        </p>

        {/* Gradient Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-40 md:w-56 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full shadow-lg"
        ></div>

        {/* Platform Line */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 text-lg md:text-xl font-semibold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
          JEETWEB —
          </span>
          <span className="mt-10 text-lg md:text-xl font-thin text-gray-500">
           India’s First AI-Powered Smart Business Platform
          </span>
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-gray-600 text-base font-thin md:text-lg mt-5"
        >
          One platform. All solutions. Zero headache.
        </p>

        {/* CTA Line */}
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="mt-10 py-5 text-4xl md:text-6xl font-black text-gray-900 leading-tight"
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">10x Your Business?</span> 
        </p>

        {/* CTA Button */}
        <a
          data-aos="zoom-in"
          data-aos-delay="1200"
          href="https://wa.me/+919508237650"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Start Your Project Now
        </a>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto gradient-bg rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">
            Send Us a Message
          </h3>
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
            <p className="text-sm font-semibold text-foreground">
              5-Min Response
            </p>
          </div>
          <div className="text-center">
            <Star className="mx-auto text-primary mb-2" size={28} />
            <p className="text-sm font-semibold text-foreground">
              4.9/5 Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
