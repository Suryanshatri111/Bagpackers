import { Mountain, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Thrilling Treks",
    description: "From serene mountain trails to challenging summit climbs, we curate treks for every level of adventurer.",
  },
  {
    icon: Users,
    title: "Meet New People",
    description: "Travel with like-minded strangers who become lifelong friends. Every trip is a new community.",
  },
  {
    icon: MapPin,
    title: "Stunning Destinations",
    description: "Handpicked locations across India and beyond — hidden gems and iconic spots alike.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Travel With Us?
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Bagpackers is not just a travel company — it's a community of explorers who believe the best journeys are shared with others.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
