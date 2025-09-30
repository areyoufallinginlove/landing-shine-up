import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    period: "per month",
    description: "Perfect for getting started",
    features: [
      "AI-powered predictions",
      "Basic arbitrage detection",
      "Match analysis tools",
      "Email support",
      "100% cashback on first loss"
    ],
    paymentLink: "https://buy.stripe.com/5kA8AbcyC1TjcWk000",
    popular: false
  },
  {
    name: "Pro",
    price: "$39.99",
    period: "per month",
    description: "Most popular for serious bettors",
    features: [
      "Everything in Basic",
      "Advanced AI predictions",
      "Real-time arbitrage alerts",
      "Premium match analytics",
      "Priority support",
      "100% cashback on losses",
      "Custom betting strategies"
    ],
    paymentLink: "https://buy.stripe.com/aEUaIZ9mq0Pf9K828b",
    popular: true
  },
  {
    name: "Elite",
    price: "$79.99",
    period: "per month",
    description: "For professional bettors",
    features: [
      "Everything in Pro",
      "Unlimited AI predictions",
      "Instant arbitrage notifications",
      "Advanced risk management",
      "Dedicated account manager",
      "100% cashback guarantee",
      "API access",
      "White-label options"
    ],
    paymentLink: "https://buy.stripe.com/dR6aIZdCGdFT14A5kn",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start winning with AI-powered insights today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 ${
                plan.popular ? "border-primary shadow-[0_0_40px_rgba(88,101,242,0.4)] scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>

                <Button
                  asChild
                  className={`w-full py-6 text-lg font-bold rounded-xl ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground animate-glow"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>

                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
