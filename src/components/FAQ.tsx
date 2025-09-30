import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does HedgerAI's AI prediction work?",
    answer: "Our AI analyzes thousands of data points including team performance, player statistics, weather conditions, historical matchups, and real-time betting market movements to generate highly accurate predictions. The system continuously learns and improves from new data."
  },
  {
    question: "What is arbitrage betting?",
    answer: "Arbitrage betting involves placing bets on all possible outcomes of an event across different sportsbooks to guarantee a profit regardless of the result. Our tool identifies these opportunities in real-time by monitoring odds across multiple bookmakers."
  },
  {
    question: "How does the 100% cashback on losses work?",
    answer: "If your bet loses, we'll credit your account with the full amount you lost, up to the limits specified in your plan. This ensures you can bet with confidence while minimizing risk. Terms and conditions apply."
  },
  {
    question: "Which sportsbooks do you support?",
    answer: "We support all major sportsbooks including DraftKings, FanDuel, BetMGM, Caesars, PointsBet, and many more. Our system continuously monitors odds across 50+ platforms to find you the best opportunities."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period."
  },
  {
    question: "Is this legal?",
    answer: "Yes, using analytical tools and arbitrage strategies is completely legal. We provide information and analytics; all betting decisions are made by you. Please ensure sports betting is legal in your jurisdiction before using our service."
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a 7-day money-back guarantee on all plans. If you're not satisfied within the first week, contact our support team for a full refund."
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
