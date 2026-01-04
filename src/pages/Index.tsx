import { useState } from "react";
import Sidebar from "@/components/docs/Sidebar";
import Header from "@/components/docs/Header";
import DocContent from "@/components/docs/DocContent";
import MobileSidebar from "@/components/docs/MobileSidebar";

const Index = () => {
  const [activeHref, setActiveHref] = useState("#overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeHref={activeHref} onNavigate={handleNavigate} />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeHref={activeHref}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <div className="lg:ml-[280px]">
        <Header onMenuToggle={() => setMobileMenuOpen(true)} />
        <main>
          <DocContent />
        </main>
      </div>
    </div>
  );
};

export default Index;
