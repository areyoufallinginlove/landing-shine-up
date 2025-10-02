import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOSModal } from "./TOSModal";
import logo from "@/assets/logo.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
          <img src={logo} alt="" className="h-6 w-6" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Win smarter with Artificial-Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            Hedger AI
          </span>
        </h1>

        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-foreground">
            We've Got Your Back — Bet Confidently, Win Comfortably with AI Insights
          </span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Unlock AI-powered odds predictions and arbitrage wins. Leverage real-time data to gain a statistical edge across sportsbooks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            size="lg"
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full animate-glow transition-all hover:scale-105"
          >
            <a href="#pricing" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img src={avatar1} alt="" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={avatar2} alt="" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={avatar3} alt="" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={avatar4} alt="" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
            </div>
            <span className="text-sm font-semibold">
              <span className="text-primary">300+</span> active members and counting <span className="text-primary">making daily profits</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">95%</span> of new users become long-term members
            </span>
          </div>
        </div>

        <p className="text-sm font-bold pt-8">
          By using our service, you accept our{" "}
          <TOSModal />
        </p>
      </div>
    </section>
  );
};
