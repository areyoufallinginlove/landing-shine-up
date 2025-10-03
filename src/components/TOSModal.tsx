import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export const TOSModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-primary hover:underline font-medium">
          Terms of Service
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms carefully before using HedgerAI
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">1. Acceptance of Terms</h3>
              <p className="leading-relaxed">
                By accessing and using HedgerAI ("the Service"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">2. Service Description</h3>
              <p className="leading-relaxed mb-3">
                HedgerAI provides AI-powered sports betting analytics, arbitrage detection, and predictive tools. Our service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time odds comparison across multiple sportsbooks</li>
                <li>AI-generated predictions and probability calculations</li>
                <li>Arbitrage opportunity identification</li>
                <li>Match analysis and statistical insights</li>
                <li>Risk management tools</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">3. User Responsibilities</h3>
              <p className="leading-relaxed mb-3">As a user of HedgerAI, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws regarding sports betting in your jurisdiction</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to manipulate, hack, or reverse-engineer the Service</li>
                <li>Verify you are of legal gambling age in your jurisdiction</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">4. No Guarantee of Profits</h3>
              <p className="leading-relaxed">
                HedgerAI provides analytical tools and information only. We do not guarantee profits or winning bets. 
                Sports betting involves risk, and you may lose money. Our AI predictions and arbitrage findings are based 
                on statistical analysis and should not be considered financial advice. Past performance does not guarantee future results.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">5. Loss Protection Program</h3>
              <p className="leading-relaxed mb-3">
                Our loss protection features are designed to help manage risk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protection applies to your first qualifying loss within the first 7 days of key activation</li>
                <li>Credits are issued to your HedgerAI account for platform use, not as direct monetary refunds</li>
                <li>Protection limits and eligibility vary by access tier</li>
                <li>We reserve the right to modify or discontinue the protection program with notice</li>
                <li>Fraudulent activity will result in forfeiture of protection eligibility</li>
                <li>This is a platform feature benefit, not a gambling insurance product</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">6. Access Keys and Payment</h3>
              <p className="leading-relaxed mb-3">
                Key purchase terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access keys provide 30 days of full platform access from activation date</li>
                <li>Payment is processed through our secure payment provider, Stripe</li>
                <li>Keys are non-transferable and for single-user use only</li>
                <li>No auto-renewal - you maintain full control of future purchases</li>
                <li>Refunds are subject to our 7-day money-back guarantee for first-time purchasers</li>
                <li>We reserve the right to modify pricing with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">7. Data Accuracy</h3>
              <p className="leading-relaxed">
                While we strive to provide accurate and timely information, odds and data may change rapidly. 
                We are not responsible for losses resulting from delayed, inaccurate, or incomplete data. 
                Always verify odds with the actual sportsbook before placing bets.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">8. Third-Party Services</h3>
              <p className="leading-relaxed">
                HedgerAI integrates with third-party sportsbooks and data providers. We are not responsible for 
                the availability, accuracy, or policies of these third-party services. Your interactions with 
                sportsbooks are governed by their respective terms and conditions.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">9. Intellectual Property</h3>
              <p className="leading-relaxed">
                All content, algorithms, designs, and functionality of HedgerAI are protected by copyright and 
                intellectual property laws. You may not copy, distribute, modify, or create derivative works 
                without our explicit written permission.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">10. Limitation of Liability</h3>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, HedgerAI and its operators shall not be liable for any 
                indirect, incidental, special, or consequential damages resulting from your use of the Service. 
                This includes but is not limited to betting losses, lost profits, or data loss.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">11. Account Termination</h3>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these terms, engage in 
                fraudulent activity, or misuse the Service. You may cancel your account at any time through 
                your account settings.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">12. Privacy and Data Protection</h3>
              <p className="leading-relaxed">
                Your privacy is important to us. We collect and process personal data in accordance with our 
                Privacy Policy and applicable data protection laws including GDPR and CCPA. By using the Service, 
                you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">13. Modifications to Terms</h3>
              <p className="leading-relaxed">
                We may update these Terms of Service periodically. Continued use of the Service after changes 
                constitutes acceptance of the modified terms. Material changes will be communicated via email 
                or in-app notifications.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">14. Governing Law</h3>
              <p className="leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which HedgerAI is registered, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">15. Contact Information</h3>
              <p className="leading-relaxed">
                For questions about these Terms of Service, please contact us through our Discord community or 
                support email provided on our website.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </ScrollArea>
        <div className="flex justify-end pt-4 border-t border-border mt-4">
          <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
