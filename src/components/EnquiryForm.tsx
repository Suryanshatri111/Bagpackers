import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    number_of_people: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("enquiries").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      number_of_people: form.number_of_people ? parseInt(form.number_of_people) : null,
      destination: form.destination || null,
      message: form.message || null,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } else {
      toast({ title: "Enquiry Sent! 🎉", description: "We'll get back to you soon. Happy trails!" });
      setForm({ name: "", email: "", phone: "", number_of_people: "", destination: "", message: "" });
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <section className="py-20 px-4 bg-accent/30" id="enquiry">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Ready for an Adventure?
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Fill in the form below and we'll plan the perfect trip for you!
        </p>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 space-y-5 border border-border">
          <div className="grid md:grid-cols-2 gap-5">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputClass} />
            <input name="number_of_people" type="number" min="1" value={form.number_of_people} onChange={handleChange} placeholder="Number of People" className={inputClass} />
          </div>
          <input name="destination" value={form.destination} onChange={handleChange} placeholder="Preferred Destination (e.g., Manali, Ladakh)" className={inputClass} />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your dream trip..." rows={4} className={inputClass + " resize-none"} />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Enquiry 🏔️"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
