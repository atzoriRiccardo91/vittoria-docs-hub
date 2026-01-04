import { Book, FileText, Code, Zap, Settings, HelpCircle } from "lucide-react";

export interface DocPage {
  title: string;
  slug: string;
  description?: string;
}

export interface DocSection {
  title: string;
  icon: string;
  items: DocPage[];
}

export const docsConfig: DocSection[] = [
  {
    title: "Introduzione",
    icon: "Book",
    items: [
      { title: "Panoramica", slug: "overview", description: "Introduzione al progetto e ai suoi obiettivi" },
      { title: "Installazione", slug: "installation", description: "Come installare e configurare il progetto" },
      { title: "Avvio rapido", slug: "quickstart", description: "Guida rapida per iniziare" },
    ],
  },
  {
    title: "Guide",
    icon: "FileText",
    items: [
      { title: "Configurazione", slug: "configuration", description: "Opzioni di configurazione avanzate" },
      { title: "Autenticazione", slug: "authentication", description: "Gestione dell'autenticazione utenti" },
      { title: "Database", slug: "database", description: "Configurazione e utilizzo del database" },
    ],
  },
  {
    title: "API Reference",
    icon: "Code",
    items: [
      { title: "Endpoints", slug: "endpoints", description: "Elenco degli endpoint disponibili" },
      { title: "Autenticazione API", slug: "api-auth", description: "Autenticazione delle richieste API" },
      { title: "Rate Limiting", slug: "rate-limiting", description: "Limiti di utilizzo delle API" },
    ],
  },
  {
    title: "Funzionalità",
    icon: "Zap",
    items: [
      { title: "Componenti", slug: "components", description: "Libreria dei componenti UI" },
      { title: "Hooks", slug: "hooks", description: "Custom hooks disponibili" },
      { title: "Utilities", slug: "utilities", description: "Funzioni di utilità" },
    ],
  },
  {
    title: "Configurazione",
    icon: "Settings",
    items: [
      { title: "Ambiente", slug: "environment", description: "Variabili d'ambiente" },
      { title: "Deployment", slug: "deployment", description: "Guida al deployment" },
    ],
  },
  {
    title: "Supporto",
    icon: "HelpCircle",
    items: [
      { title: "FAQ", slug: "faq", description: "Domande frequenti" },
      { title: "Troubleshooting", slug: "troubleshooting", description: "Risoluzione problemi comuni" },
    ],
  },
];

export const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Book,
    FileText,
    Code,
    Zap,
    Settings,
    HelpCircle,
  };
  return icons[iconName];
};

export const getAllDocs = (): DocPage[] => {
  return docsConfig.flatMap((section) => section.items);
};

export const findDocBySlug = (slug: string): DocPage | undefined => {
  return getAllDocs().find((doc) => doc.slug === slug);
};

export const findSectionBySlug = (slug: string): DocSection | undefined => {
  return docsConfig.find((section) =>
    section.items.some((item) => item.slug === slug)
  );
};
