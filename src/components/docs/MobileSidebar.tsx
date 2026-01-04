import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeHref: string;
  onNavigate: (href: string) => void;
}

const MobileSidebar = ({ isOpen, onClose, activeHref, onNavigate }: MobileSidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-[280px] lg:hidden animate-slide-in-left">
        <div className="relative h-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-sidebar-foreground z-10"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="h-full overflow-hidden">
            <Sidebar
              activeHref={activeHref}
              onNavigate={(href) => {
                onNavigate(href);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
