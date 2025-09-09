import { useEffect, useState } from "react";
import { Eye, Globe, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({
    total: 0,
    today: 0,
    online: 0
  });

  useEffect(() => {
    // Simulate visitor data - in real implementation, this would come from analytics
    const baseVisitors = 12847;
    const todayBase = 156;
    const onlineBase = 8;
    
    // Add some random variation to make it look realistic
    const totalVisitors = baseVisitors + Math.floor(Math.random() * 100);
    const todayVisitors = todayBase + Math.floor(Math.random() * 20);
    const onlineVisitors = onlineBase + Math.floor(Math.random() * 5);

    // Animate counters
    const animateCounter = (target: number, key: keyof typeof visitorData) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setVisitorData(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 30);
    };

    // Start animations with delays
    setTimeout(() => animateCounter(totalVisitors, 'total'), 100);
    setTimeout(() => animateCounter(todayVisitors, 'today'), 300);
    setTimeout(() => animateCounter(onlineVisitors, 'online'), 500);

    // Update online count periodically
    const onlineInterval = setInterval(() => {
      const newOnline = onlineBase + Math.floor(Math.random() * 5);
      setVisitorData(prev => ({ ...prev, online: newOnline }));
    }, 15000);

    return () => clearInterval(onlineInterval);
  }, []);

  const stats = [
    {
      icon: Eye,
      label: "Total Visitors",
      value: visitorData.total,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      label: "Today's Visitors",
      value: visitorData.today,
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: Globe,
      label: "Online Now",
      value: visitorData.online,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
            Website Analytics
          </h2>
          <p className="font-inter text-muted-foreground">
            Real-time visitor statistics and engagement metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-elegant border border-border/50 text-center">
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                <div className="space-y-1">
                  <div className={`font-poppins font-bold text-3xl ${stat.color}`}>
                    {stat.value.toLocaleString()}
                    {stat.label === "Online Now" && (
                      <div className="inline-block w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse"></div>
                    )}
                  </div>
                  <p className="font-inter text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 inline-block shadow-elegant border border-border/50">
            <p className="font-inter text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Last updated:</span> Just now • 
              <span className="mx-2">Global reach from Malaysia</span> • 
              <span className="text-primary font-semibold">Growing daily</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;