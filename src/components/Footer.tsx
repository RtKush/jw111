import { Link } from "react-router-dom";
import { Instagram, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/80 border-t border-border">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
              JW
            </div>
            <span className="text-xl font-extrabold text-foreground">JEETWEB</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            JeetWeb – We Build Websites & AI Solutions That Grow Your Business. Your trusted partner for Web Development, AI Tools & Branding.
          </p>
          <div className="mb-4">
            <p className="text-sm font-semibold text-foreground">The Location</p>
            <p className="text-sm text-primary">Indore, Madhya Pradesh<br />India</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* IT Services */}
        <div>
          <h4 className="font-bold text-foreground mb-4">IT Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Modern Website Development</li>
            <li>Branding & Graphic Design</li>
            <li>Premium UI/UX Design</li>
            <li>Software Development</li>
            <li>Website Maintenance & Security</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Optimization</li>
            <li>24/7 Technical Security</li>
            <li>Fast Support</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div>
          <a
            href="https://wa.me/70001 86189"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6">
      <div className="section-container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} JeetWeb. All rights reserved. Proudly crafted with love in India
      </div>
    </div>
  </footer>
);

export default Footer;
