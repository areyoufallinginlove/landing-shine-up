import { Target, TrendingUp, Search, Shield, Calendar, Bot, Users, BarChart3, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Target,
    title: "AI-Powered Predictions",
    description: "Advanced machine learning algorithms analyze thousands of data points to predict outcomes with unprecedented accuracy."
  },
  {
    icon: TrendingUp,
    title: "Arbitrage Detection",
    description: "Instantly identify profitable arbitrage opportunities across multiple sportsbooks in real-time."
  },
  {
    icon: Search,
    title: "Match Analyzer",
    description: "Deep dive into detailed stats, player performance, weather conditions, and historical data for informed decisions."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Personalized bankroll strategies tailored to your funds. We calculate the optimal bet size and risk percentage for each wager, ensuring you bet smart and protect your capital."
  },
  {
    icon: Calendar,
    title: "PnL Calendar",
    description: "Track your daily, weekly, and monthly profit and loss with our comprehensive calendar view. Monitor your winning streaks and identify patterns."
  },
  {
    icon: Bot,
    title: "AI Match Chatbot",
    description: "Ask any question about upcoming matches and get instant AI-powered insights. Deep dive into team stats, player form, and historical data.",
    comingSoon: true
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a thriving community of like-minded bettors sharing the same goal: making consistent profits. Exchange strategies, celebrate wins, and grow together."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live data feeds from multiple APIs deliver up-to-the-second odds changes, market movements, and betting opportunities across all major sportsbooks."
  },
  {
    icon: Bell,
    title: "Discord Webhook Integration",
    description: "Get instant notifications for high-confidence predictions and arbitrage opportunities directly in your Discord server. Never miss a profitable bet again."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Why Choose <span className="text-primary">HedgerAI</span>?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Your Unfair Advantage
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These exact same features and tools have generated over <span className="text-primary font-semibold">$10,000+</span> through sportsbetting every single day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.3)] group relative"
            >
              {feature.comingSoon && (
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/50">
                  Coming Soon
                </Badge>
              )}
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
