import { Target, TrendingUp, Search, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    description: "100% cashback protection on losses ensures you can bet with confidence and minimize your risk."
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets sports betting intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.3)] group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
