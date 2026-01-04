import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { docsConfig, DocSection } from "@/data/docsConfig";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();

  const handleSelect = (slug: string) => {
    navigate(`/docs/${slug}`);
    onOpenChange(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Cerca nella documentazione..." />
      <CommandList>
        <CommandEmpty>Nessun risultato trovato.</CommandEmpty>
        {docsConfig.map((section: DocSection) => (
          <CommandGroup key={section.title} heading={section.title}>
            {section.items.map((item) => (
              <CommandItem
                key={item.slug}
                value={`${item.title} ${item.description || ""}`}
                onSelect={() => handleSelect(item.slug)}
                className="cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4" />
                <div>
                  <span className="font-medium">{item.title}</span>
                  {item.description && (
                    <span className="ml-2 text-muted-foreground text-sm">
                      {item.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
