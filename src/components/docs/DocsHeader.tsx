import { useState } from "react";
import { Menu, Search, Github, ExternalLink, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import SearchDialog from "./SearchDialog";

interface DocsHeaderProps {
  onMenuToggle?: () => void;
}

const DocsHeader = ({ onMenuToggle }: DocsHeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-40 h-16 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between h-full px-4 lg:px-8">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Cerca nella documentazione...</span>
              <kbd className="hidden md:inline-flex ml-auto items-center gap-1 px-2 py-0.5 text-xs bg-background border border-border rounded">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default DocsHeader;
