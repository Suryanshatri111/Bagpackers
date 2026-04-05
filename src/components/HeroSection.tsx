import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9zdmc+')] bg-repeat" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
        <img
          src={logo}
          alt="Bagpackers Explores Logo"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-2xl mb-8 border-4 border-primary"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
          Explore the Unknown,<br />Together.
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-xl mb-8">
          Join fellow adventurers on treks and tours to breathtaking destinations. 
          Meet new people, create memories, and discover the world with Bagpackers.
        </p>
        <a
          href="#enquiry"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          Plan Your Adventure →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
