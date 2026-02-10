import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ACity: ${form.city}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          maxLength={100}
          className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          maxLength={255}
          className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          maxLength={20}
          className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          maxLength={100}
          className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
      </div>
      <textarea
        placeholder="Tell us about your project..."
        rows={4}
        required
        maxLength={1000}
        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit" className="w-full sm:w-auto px-8 py-3 rounded-full bg-success text-success-foreground font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
        <Send size={16} />
        Send Message
      </button>
      <p className="text-xs text-muted-foreground">Opens WhatsApp · Reply in 5 mins</p>
    </form>
  );
};

export default ContactForm;
