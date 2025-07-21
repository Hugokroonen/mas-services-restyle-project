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

  const searchIndex = [
    { 
      title: "Home", 
      href: "/", 
      content: "MAS Services notuleerservice administratieve diensten secretariële diensten Professionele ondersteuning management assistentie boekhouding facturering projectadministratie vergaderingen Gidi Kroonen" 
    },
    { 
      title: "Secretarieel", 
      href: "/secretarieel", 
      content: "Tijdelijke vervanging secretaresse administratief medewerker Secretariaat bestuur stichting vereniging Afhandeling inkomende post e-mails Redigeren teksten tekstverwerking Schrijven zakelijke correspondentie organiseren van vergaderingen, bijeenkomsten en evenementen PowerPoint presentaties maken Verzorgen attenties medewerkers relaties kerstpakketten Optreden als gastvrouw" 
    },
    { 
      title: "Administratie", 
      href: "/administratie", 
      content: "Sorteren, coderen en inboeken van facturen/bonnetjes Geautomatiseerd verwerken van facturen/bonnetjes (AFAS, Twinfield, Exact, Basecone, WeFact) Data-entry Verzorgen van betalingen Verzorgen van facturering Debiteurenbewaking Personeelsadministratie Ledenadministratie voor vereniging, stichting of coöperatie" 
    },
    { 
      title: "Notuleerservice", 
      href: "/notuleerservice", 
      content: "notuleren vergaderingen verslag actielijst taalgebruik spelling grammatica Online vergaderen COVID-19 WhatsApp Zoom Microsoft Teams" 
    },
    { 
      title: "Contact", 
      href: "/contact", 
      content: "offerte vragen bericht sturen Naam E-mail Telefoon Onderwerp Bericht Waarom MAS Services? Ervaren professional Flexibele samenwerking Persoonlijke aanpak Snelle responstijd Betrouwbare dienstverlening Jarenlange ervaring in het vakgebied" 
    },
    { 
      title: "Privacy", 
      href: "/privacy", 
      content: "privacyverklaring persoonsgegevens verwerken toestemming AVG compliance Algemene Verordening Gegevensbescherming" 
    },
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
            {searchIndex.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => handleSelect(item.href)}
                value={`${item.title} ${item.content}`}
                className="cursor-pointer"
              >
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">Ga naar {item.title}</span>
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
