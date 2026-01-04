import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Book } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsConfig, getIconComponent } from "@/data/docsConfig";

interface NavSectionProps {
  section: typeof docsConfig[0];
  activeSlug: string;
  onNavigate: (slug: string) => void;
}

const NavSection = ({ section, activeSlug, onNavigate }: NavSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = getIconComponent(section.icon);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          {section.title}
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 opacity-60" />
        ) : (
          <ChevronRight className="w-4 h-4 opacity-60" />
        )}
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-0.5 animate-fade-in">
          {section.items.map((item) => (
            <button
              key={item.slug}
              onClick={() => onNavigate(item.slug)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm text-sidebar-foreground/80 w-full text-left",
                "hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors rounded-md",
                activeSlug === item.slug && "bg-sidebar-accent text-sidebar-primary font-medium"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DocsSidebar = () => {
  const navigate = useNavigate();
  const { slug = "overview" } = useParams();

  const handleNavigate = (newSlug: string) => {
    navigate(`/docs/${newSlug}`);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-sidebar overflow-y-auto border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <Book className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display font-bold text-sidebar-foreground text-lg">Docs</h1>
          <p className="text-xs text-sidebar-foreground/60">v1.0.0</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4">
        {docsConfig.map((section) => (
          <NavSection
            key={section.title}
            section={section}
            activeSlug={slug}
            onNavigate={handleNavigate}
          />
        ))}
      </nav>
    </aside>
  );
};

export default DocsSidebar;
