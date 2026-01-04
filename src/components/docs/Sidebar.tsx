import { useState } from "react";
import { ChevronDown, ChevronRight, Book, FileText, Code, Zap, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Introduzione",
    icon: <Book className="w-4 h-4" />,
    children: [
      { title: "Panoramica", href: "#overview" },
      { title: "Installazione", href: "#installation" },
      { title: "Avvio rapido", href: "#quickstart" },
    ],
  },
  {
    title: "Guide",
    icon: <FileText className="w-4 h-4" />,
    children: [
      { title: "Configurazione", href: "#configuration" },
      { title: "Autenticazione", href: "#authentication" },
      { title: "Database", href: "#database" },
    ],
  },
  {
    title: "API Reference",
    icon: <Code className="w-4 h-4" />,
    children: [
      { title: "Endpoints", href: "#endpoints" },
      { title: "Autenticazione API", href: "#api-auth" },
      { title: "Rate Limiting", href: "#rate-limiting" },
    ],
  },
  {
    title: "Funzionalità",
    icon: <Zap className="w-4 h-4" />,
    children: [
      { title: "Componenti", href: "#components" },
      { title: "Hooks", href: "#hooks" },
      { title: "Utilities", href: "#utilities" },
    ],
  },
  {
    title: "Configurazione",
    icon: <Settings className="w-4 h-4" />,
    children: [
      { title: "Ambiente", href: "#environment" },
      { title: "Deployment", href: "#deployment" },
    ],
  },
  {
    title: "Supporto",
    icon: <HelpCircle className="w-4 h-4" />,
    children: [
      { title: "FAQ", href: "#faq" },
      { title: "Troubleshooting", href: "#troubleshooting" },
    ],
  },
];

interface NavSectionProps {
  item: NavItem;
  activeHref: string;
  onNavigate: (href: string) => void;
}

const NavSection = ({ item, activeHref, onNavigate }: NavSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 opacity-60" />
        ) : (
          <ChevronRight className="w-4 h-4 opacity-60" />
        )}
      </button>
      {isOpen && item.children && (
        <div className="ml-4 mt-1 space-y-0.5 animate-fade-in">
          {item.children.map((child) => (
            <button
              key={child.href}
              onClick={() => child.href && onNavigate(child.href)}
              className={cn(
                "docs-nav-item w-full text-left",
                activeHref === child.href && "docs-nav-item-active"
              )}
            >
              {child.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  activeHref: string;
  onNavigate: (href: string) => void;
}

const Sidebar = ({ activeHref, onNavigate }: SidebarProps) => {
  return (
    <aside className="docs-sidebar scrollbar-thin">
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
        {navigation.map((item) => (
          <NavSection
            key={item.title}
            item={item}
            activeHref={activeHref}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
