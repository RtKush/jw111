import { useState } from "react";
import { Mail } from "lucide-react";
<<<<<<< akk
=======
import emailjs from "@emailjs/browser";
>>>>>>> main

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
<<<<<<< akk

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    message?: string;
  }>({});

  // ✅ Validation Function
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    } else if (!/^[A-Za-z\s]{3,50}$/.test(form.city)) {
      newErrors.city = "City must contain only letters (min 3 characters)";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };
=======
>>>>>>> main

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    message?: string;
  }>({});

  const [sending, setSending] = useState(false);

  // ✅ Validation
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!form.city.trim()) newErrors.city = "City is required";

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

<<<<<<< akk
    const subject = encodeURIComponent("New Website Inquiry - Jeetweb");

    const body = encodeURIComponent(`
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
City: ${form.city}

Message:
${form.message}
    `);

    window.location.href = `mailto:support@jeetweb.tech?subject=${subject}&body=${body}`;
=======
    setSending(true);

    try {
      await emailjs.send(
        "service_darzdrm",      // service ID
        "template_ncqxytu",     // template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          message: form.message,
        },
        "2NCc-dlaMgQNTeGQp"      // public key
      );

      alert("Message sent. Kindly wait till our team will reach to you.");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });

    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setSending(false);
>>>>>>> main
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<<<<<<< akk
        {/* Name */}
=======
>>>>>>> main
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

<<<<<<< akk
        {/* Email */}
=======
>>>>>>> main
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

<<<<<<< akk
        {/* Phone */}
=======
>>>>>>> main
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value.replace(/\D/g, ""),
              })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

<<<<<<< akk
        {/* City */}
=======
>>>>>>> main
        <div>
          <input
            type="text"
            placeholder="City"
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

      </div>

<<<<<<< akk
      {/* Message */}
=======
>>>>>>> main
      <div>
        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

<<<<<<< akk
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
      >
        <Mail size={16} />
        Send Mail
      </button>

      <p className="text-xs text-destructive-foreground">
        Opens your email app · Click send to complete
      </p>
=======
      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
      >
        <Mail size={16} />
        {sending ? "Sending..." : "Send Message"}
      </button>

>>>>>>> main
    </form>
  );
};

export default ContactForm;
