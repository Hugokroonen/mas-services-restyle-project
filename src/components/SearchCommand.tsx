
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const searchItems = [
    { title: "Home", href: "/", description: "Terug naar de hoofdpagina" },
    { title: "Secretarieel", href: "/secretarieel", description: "Secretariële diensten en ondersteuning" },
    { title: "Administratie", href: "/administratie", description: "Administratieve ondersteuning en boekhouding" },
    { title: "Notuleerservice", href: "/notuleerservice", description: "Professioneel notuleren van vergaderingen" },
    { title: "Contact", href: "/contact", description: "Neem contact op met MAS Services" },
    { title: "Privacy", href: "/privacy", description: "Privacybeleid en voorwaarden" },
  ];

  const handleSelect = (href: string) => {
    navigate(href);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Zoeken...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Zoek op de website..." />
        <CommandList>
          <CommandEmpty>Geen resultaten gevonden.</CommandEmpty>
          <CommandGroup heading="Pagina's">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => handleSelect(item.href)}
                className="cursor-pointer"
              >
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchCommand;
