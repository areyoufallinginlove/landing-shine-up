import logo from "@/assets/logo.png";
import discordLogo from "@/assets/discord-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="HedgerAI" className="h-8 w-8" />
              <span className="font-bold text-xl">HedgerAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered sports betting analytics and arbitrage detection.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://main.hedgerai.com/login" className="hover:text-foreground transition-colors">Login</a></li>
              <li><a href="https://discord.gg/nKrWNHj4nE" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <a
              href="https://discord.gg/nKrWNHj4nE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <img src={discordLogo} alt="Discord" className="h-5 w-5" />
              <span>Join our Discord</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HedgerAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
