import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "IVF Specialist",
      clinic: "Singapore Fertility Centre",
      content: "ARKGlobal has been our trusted partner for cryo shipping for over 3 years. Their attention to detail and commitment to maintaining the cold chain is unmatched. Every delivery has been perfect.",
      rating: 5,
      location: "Singapore"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Reproductive Endocrinologist", 
      clinic: "Bangkok IVF Clinic",
      content: "The peace of mind that ARKGlobal provides is invaluable. Their real-time tracking and professional handling gives our patients confidence during the most critical moments of their fertility journey.",
      rating: 5,
      location: "Thailand"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Embryologist",
      clinic: "KL Reproductive Medicine",
      content: "What sets ARKGlobal apart is their understanding of how precious these samples are. The hand-carry service and temperature monitoring throughout the entire journey is exceptional.",
      rating: 5,
      location: "Malaysia"
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      clinic: "European Stem Cell Institute",
      content: "For our international stem cell research collaborations, ARKGlobal has been indispensable. Their compliance with EU regulations and flawless logistics make complex shipments seem effortless.",
      rating: 5,
      location: "Netherlands"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading fertility clinics and research institutions worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-strong transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <blockquote className="font-inter text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="font-inter text-sm text-primary font-medium">
                      {testimonial.clinic}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-inter text-sm text-muted-foreground">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
            <h3 className="font-poppins font-bold text-2xl text-background mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="font-inter text-background/90 mb-6 max-w-2xl mx-auto">
              Experience the same level of trust and reliability that our clients have come to expect. 
              Let us handle your precious cargo with the care it deserves.
            </p>
            <button className="bg-background text-primary font-inter font-semibold px-8 py-3 rounded-xl hover:bg-background/90 transition-colors">
              Get Your Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;