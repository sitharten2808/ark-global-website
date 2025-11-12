import { useEffect, useState } from "react";
import { Plane, Thermometer, Users, Clock } from "lucide-react";

const Stats = () => {
  const [counters, setCounters] = useState({
    deliveries: 0,
    countries: 0,
    clients: 0,
    years: 0
  });

  const stats = [
    { icon: Plane, label: "Successful Cryo Deliveries", value: 584, key: "deliveries" },
    { icon: Thermometer, label: "Countries Served", value: 25, key: "countries" },
    { icon: Users, label: "Satisfied Clients", value: 150, key: "clients" },
    { icon: Clock, label: "Years of Experience", value: 8, key: "years" }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, duration / steps);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-subtle">
      {/* Background Pattern */}

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in cryogenic shipping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-strong transition-all duration-300 border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-poppins font-bold text-5xl text-foreground">
                      {counters[stat.key]}
                      {stat.key === "deliveries" && "+"}
                    </div>
                    <p className="font-inter font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 inline-block shadow-elegant border border-border/50">
            <p className="font-inter text-foreground/80">
              <span className="font-semibold text-primary">100% Success Rate</span> • 
              <span className="mx-2">IATA Compliant</span> • 
              <span className="mx-2">EU Tissue Directives Certified</span> • 
              <span className="font-semibold text-primary">24/7 Monitoring</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;