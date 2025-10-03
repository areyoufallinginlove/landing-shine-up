import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dashboardImage from "@/assets/dashboard-preview.png";

export const DashboardShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <img
              src={dashboardImage}
              alt="Hedger AI Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
