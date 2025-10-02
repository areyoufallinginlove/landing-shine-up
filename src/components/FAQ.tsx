import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "How does HedgerAI help me make profit?",
    answer: "HedgerAI maximizes your profitability through AI-powered predictions that consistently identify high-probability winning bets, real-time arbitrage opportunities that guarantee returns, and smart bankroll management (typically 1-5% per bet). Our PnL Calendar helps you track your performance over time, showing your win rate, average returns, and identifying your most profitable betting patterns. Users typically see consistent monthly gains by following our AI recommendations and practicing disciplined bankroll management."
  },
  {
    question: "How does HedgerAI's AI prediction work?",
    answer: "Our AI analyzes thousands of data points including team performance, player statistics, weather conditions, historical matchups, and real-time betting market movements to generate highly accurate predictions. The system continuously learns and improves from new data."
  },
  {
    question: "What is arbitrage betting?",
    answer: "Arbitrage betting involves placing bets on all possible outcomes of an event across different sportsbooks to guarantee a profit regardless of the result. Our tool identifies these opportunities in real-time by monitoring odds across multiple bookmakers."
  },
  {
    question: "What is the PnL Calendar?",
    answer: "The PnL Calendar is your personal profit and loss tracker that helps you monitor your daily, weekly, and monthly betting performance. It visualizes your winning streaks, identifies profitable patterns, and helps you make data-driven decisions about your betting strategy. Track every bet, see your ROI over time, and optimize your approach based on real results."
  },
  {
    question: "Which sportsbooks do you support?",
    answer: "We support all major sportsbooks including DraftKings, FanDuel, BetMGM, Caesars, PointsBet, and many more. Our system continuously monitors odds across 50+ platforms to find you the best opportunities."
  },
  {
    question: "How do I access the platform after purchase?",
    answer: "After completing your purchase, you'll instantly receive a unique access key. Simply sign up on our platform using this key, and you'll have immediate access to all features including our AI predictions, arbitrage detection, PnL tracking, and Discord community. Your dashboard will be ready to use within minutes."
  },
  {
    question: "Is this legal?",
    answer: "Yes, using analytical tools and arbitrage strategies is completely legal. We provide information and analytics; all betting decisions are made by you. Please ensure sports betting is legal in your jurisdiction before using our service."
  },
  {
    question: "What sports are covered?",
    answer: "We cover all major sports including Football (NFL, College), Basketball (NBA, NCAA), Soccer (Premier League, Champions League), Baseball (MLB), Hockey (NHL), Tennis, MMA, Boxing, and many more."
  }
];

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={ref}
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about HedgerAI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
