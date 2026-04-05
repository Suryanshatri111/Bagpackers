import { Phone, Mail, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary text-secondary-foreground" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="font-semibold text-lg">Ayush Sharma</p>
            <p className="text-secondary-foreground/70 text-sm">Founder</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <a href="tel:+917023388262" className="font-semibold text-lg hover:text-primary transition-colors">
              +91 7023388262
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <a href="mailto:enterprisesmy111@gmail.com" className="font-semibold text-lg hover:text-primary transition-colors break-all">
              enterprisesmy111@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-secondary-foreground/60 text-sm">
          © 2026 Bagpackers Explores. All rights reserved. Est. 2026
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
