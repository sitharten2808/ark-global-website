import { useEffect, useState } from "react";
import { Eye, Globe, TrendingUp } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get, increment, runTransaction, serverTimestamp } from "firebase/database";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase once
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({
    total: 0,
    today: 0,
  });

  useEffect(() => {
    const totalRef = ref(db, "visitors/total");
    const todayRef = ref(db, "visitors/today");

    // ✅ Increment total visitors on each page load
    runTransaction(totalRef, (currentValue) => (currentValue || 0) + 1);

    // ✅ Increment today's visitors
    runTransaction(todayRef, (currentValue) => (currentValue || 0) + 1);

    // ✅ Listen to real-time updates
    const unsubscribeTotal = onValue(totalRef, (snap) => {
      setVisitorData((prev) => ({ ...prev, total: snap.val() || 0 }));
    });

    const unsubscribeToday = onValue(todayRef, (snap) => {
      setVisitorData((prev) => ({ ...prev, today: snap.val() || 0 }));
    });

    return () => {
      unsubscribeTotal();
      unsubscribeToday();
    };
  }, []);

  const stats = [
    {
      icon: Eye,
      label: "Total Visitors",
      value: visitorData.total,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      label: "Today's Visitors",
      value: visitorData.today,
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
            Website Analytics
          </h2>
          <p className="font-inter text-muted-foreground">
            Real-time visitor statistics and engagement metrics
          </p>
        </div>

        {/* Visitor Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-elegant border border-border/50 text-center transition-transform hover:scale-[1.02]"
              >
                <div
                  className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                <div className="space-y-2">
                  <div
                    className={`font-poppins font-bold text-4xl ${stat.color}`}
                  >
                    {stat.value.toLocaleString()}
                  </div>
                  <p className="font-inter text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 inline-block shadow-elegant border border-border/50">
            <p className="font-inter text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Last updated:</span>{" "}
              Just now • <span className="text-primary font-semibold">Live counts</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
