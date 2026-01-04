import Breadcrumb from "./Breadcrumb";
import CodeBlock from "./CodeBlock";
import { Link2, AlertCircle, CheckCircle, Info } from "lucide-react";

const DocContent = () => {
  return (
    <article className="docs-content animate-fade-in">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Introduzione" },
          { label: "Panoramica" },
        ]}
      />

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">
          Panoramica
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Benvenuto nella documentazione tecnica. Questa guida ti aiuterà a iniziare
          rapidamente con l'integrazione e la configurazione del sistema.
        </p>
      </div>

      {/* Alert */}
      <div className="flex gap-3 p-4 rounded-lg bg-secondary border border-accent/20 mb-8">
        <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground">Nota importante</p>
          <p className="text-sm text-muted-foreground mt-1">
            Assicurati di avere i permessi necessari prima di procedere con l'installazione.
          </p>
        </div>
      </div>

      {/* Section */}
      <section id="overview" className="mb-12">
        <h2 className="group flex items-center gap-2 text-2xl font-display font-semibold text-foreground mb-4">
          <span>Cos'è questo progetto?</span>
          <a href="#overview" className="docs-heading-anchor">
            <Link2 className="w-5 h-5" />
          </a>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Questo sistema fornisce un'architettura completa per la gestione delle
          applicazioni enterprise. Include funzionalità avanzate per l'autenticazione,
          la gestione dei dati e l'integrazione con servizi esterni.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La piattaforma è progettata seguendo i principi di <code className="docs-inline-code">clean architecture</code> e
          offre un'esperienza di sviluppo ottimale grazie a strumenti moderni e best practices.
        </p>
      </section>

      {/* Installation */}
      <section id="installation" className="mb-12">
        <h2 className="group flex items-center gap-2 text-2xl font-display font-semibold text-foreground mb-4">
          <span>Installazione</span>
          <a href="#installation" className="docs-heading-anchor">
            <Link2 className="w-5 h-5" />
          </a>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Per iniziare, installa le dipendenze necessarie utilizzando il tuo package manager preferito:
        </p>

        <CodeBlock
          title="Terminal"
          language="bash"
          code={`# Usando npm
npm install @vittoria/sdk

# Usando yarn
yarn add @vittoria/sdk

# Usando pnpm
pnpm add @vittoria/sdk`}
        />

        <p className="text-muted-foreground leading-relaxed">
          Dopo l'installazione, importa il modulo principale nel tuo progetto:
        </p>

        <CodeBlock
          language="typescript"
          code={`import { VittoriaClient } from '@vittoria/sdk';

const client = new VittoriaClient({
  apiKey: process.env.VITTORIA_API_KEY,
  environment: 'production'
});

// Inizializza la connessione
await client.connect();`}
        />
      </section>

      {/* Features */}
      <section id="features" className="mb-12">
        <h2 className="group flex items-center gap-2 text-2xl font-display font-semibold text-foreground mb-4">
          <span>Funzionalità Principali</span>
          <a href="#features" className="docs-heading-anchor">
            <Link2 className="w-5 h-5" />
          </a>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          {[
            {
              title: "Autenticazione Sicura",
              description: "Sistema OAuth 2.0 con supporto per SSO e multi-factor authentication.",
            },
            {
              title: "API RESTful",
              description: "Endpoints ben documentati con supporto per versioning e rate limiting.",
            },
            {
              title: "Scalabilità",
              description: "Architettura cloud-native pronta per gestire milioni di richieste.",
            },
            {
              title: "Monitoraggio",
              description: "Dashboard integrate per analytics e performance monitoring.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="mt-12 p-6 rounded-lg bg-gradient-hero text-sidebar-foreground">
        <h3 className="font-display font-semibold text-xl mb-2">Prossimi passi</h3>
        <p className="text-sidebar-foreground/80 mb-4">
          Ora che hai installato il sistema, continua con la configurazione dell'ambiente
          e la personalizzazione delle impostazioni.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#configuration"
            className="inline-flex items-center gap-2 px-4 py-2 bg-sidebar-primary text-sidebar-primary-foreground rounded-md text-sm font-medium hover:bg-sidebar-primary/90 transition-colors"
          >
            Configurazione
          </a>
          <a
            href="#api"
            className="inline-flex items-center gap-2 px-4 py-2 bg-sidebar-accent text-sidebar-foreground rounded-md text-sm font-medium hover:bg-sidebar-accent/80 transition-colors"
          >
            API Reference
          </a>
        </div>
      </section>

      {/* Footer nav */}
      <nav className="flex justify-between mt-12 pt-6 border-t border-border">
        <div></div>
        <a
          href="#installation"
          className="group flex flex-col items-end text-right hover:text-accent transition-colors"
        >
          <span className="text-xs text-muted-foreground mb-1">Prossimo</span>
          <span className="font-medium text-foreground group-hover:text-accent">
            Installazione →
          </span>
        </a>
      </nav>
    </article>
  );
};

export default DocContent;
