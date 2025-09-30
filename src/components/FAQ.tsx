import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    question: "How does the 30-day access work?",
    answer: "When you purchase a HedgerAI key, you get full access to all features for 30 days from the date of purchase. There's no auto-renewal or subscription - you simply purchase another key when you're ready to continue. This gives you full control over your investment."
  },
  {
    question: "Is this legal?",
    answer: "Yes, using analytical tools and arbitrage strategies is completely legal. We provide information and analytics; all betting decisions are made by you. Please ensure sports betting is legal in your jurisdiction before using our service."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 7-day money-back guarantee on all key purchases. If you're not satisfied within the first week, contact our support team for a full refund, no questions asked."
  },
  {
    question: "What sports are covered?",
    answer: "We cover all major sports including Football (NFL, College), Basketball (NBA, NCAA), Soccer (Premier League, Champions League), Baseball (MLB), Hockey (NHL), Tennis, MMA, Boxing, and many more."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
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
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-300"
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
