import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Buy Subscription",
    description: "Secure your plan and receive your unique access key instantly."
  },
  {
    number: "2",
    title: "Sign Up & Log In",
    description: "Use your key to access our dashboard and real-time AI software."
  },
  {
    number: "3",
    title: "Start Maximizing Profits",
    description: "Use AI-powered tools to identify profitable betting opportunities across platforms."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-background/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and start winning today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 flex-1">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-8 w-8 text-primary flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
