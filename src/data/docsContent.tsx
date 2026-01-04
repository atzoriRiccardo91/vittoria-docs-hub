import { ReactNode } from "react";
import CodeBlock from "@/components/docs/CodeBlock";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, CheckCircle, Zap, Shield, Database, Settings } from "lucide-react";

interface DocContentData {
  title: string;
  content: ReactNode;
}

export const docsContent: Record<string, DocContentData> = {
  overview: {
    title: "Panoramica",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Benvenuto nella documentazione tecnica del progetto. Questa guida ti aiuterà a comprendere 
          le funzionalità principali e come integrarle nel tuo flusso di lavoro.
        </p>

        <Alert className="border-accent/20 bg-accent/5">
          <Info className="h-4 w-4 text-accent" />
          <AlertDescription className="text-muted-foreground">
            Questa documentazione è in continuo aggiornamento. Per le ultime novità, 
            consulta regolarmente questa sezione.
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Cos'è questo progetto?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questo progetto fornisce un framework completo per la costruzione di applicazioni 
            web moderne. Include componenti UI predefiniti, gestione dello stato, 
            autenticazione e molto altro.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Funzionalità Principali</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Performance", desc: "Ottimizzato per velocità e reattività" },
              { icon: Shield, title: "Sicurezza", desc: "Best practices di sicurezza integrate" },
              { icon: Database, title: "Database", desc: "Integrazione semplice con vari DB" },
              { icon: Settings, title: "Configurabile", desc: "Altamente personalizzabile" },
            ].map((feature) => (
              <div key={feature.title} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },

  installation: {
    title: "Installazione",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Segui questi passaggi per installare e configurare il progetto nel tuo ambiente di sviluppo.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Prerequisiti</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Node.js versione 18 o superiore</li>
            <li>npm, yarn o pnpm</li>
            <li>Git installato</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Installazione</h2>
          <CodeBlock
            language="bash"
            code={`# Clona il repository
git clone https://github.com/tuo-org/progetto.git

# Entra nella directory
cd progetto

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev`}
          />
        </section>

        <Alert className="border-green-500/20 bg-green-500/5">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-muted-foreground">
            Il server sarà disponibile su <code className="px-1.5 py-0.5 rounded bg-muted text-sm">http://localhost:5173</code>
          </AlertDescription>
        </Alert>
      </div>
    ),
  },

  quickstart: {
    title: "Avvio Rapido",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Inizia rapidamente con un esempio pratico di utilizzo del framework.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Primo Componente</h2>
          <CodeBlock
            language="tsx"
            code={`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <Button onClick={() => alert("Cliccato!")}>
        Clicca qui
      </Button>
    </div>
  );
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Prossimi Passi</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Esplora i componenti disponibili
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Configura l'autenticazione
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Collega il database
            </li>
          </ul>
        </section>
      </div>
    ),
  },

  configuration: {
    title: "Configurazione",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Scopri come configurare il progetto per adattarlo alle tue esigenze.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">File di Configurazione</h2>
          <CodeBlock
            language="typescript"
            code={`// config.ts
export const config = {
  apiUrl: process.env.VITE_API_URL,
  appName: "My App",
  features: {
    darkMode: true,
    analytics: true,
  },
};`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Variabili d'Ambiente</h2>
          <CodeBlock
            language="bash"
            code={`# .env.local
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My Application
VITE_ENABLE_ANALYTICS=true`}
          />
        </section>
      </div>
    ),
  },

  authentication: {
    title: "Autenticazione",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Implementa l'autenticazione utenti nella tua applicazione.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Setup Autenticazione</h2>
          <CodeBlock
            language="tsx"
            code={`import { useAuth } from "@/hooks/useAuth";

function LoginButton() {
  const { login, logout, user } = useAuth();

  if (user) {
    return (
      <div>
        <span>Ciao, {user.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return <button onClick={login}>Login</button>;
}`}
          />
        </section>
      </div>
    ),
  },

  database: {
    title: "Database",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Configura e utilizza il database nella tua applicazione.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Connessione Database</h2>
          <CodeBlock
            language="typescript"
            code={`import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

// Query esempio
const { data, error } = await supabase
  .from("users")
  .select("*")
  .limit(10);`}
          />
        </section>
      </div>
    ),
  },

  endpoints: {
    title: "Endpoints",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Riferimento completo degli endpoint API disponibili.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">GET /api/users</h2>
          <p className="text-muted-foreground">Recupera la lista degli utenti.</p>
          <CodeBlock
            language="bash"
            code={`curl -X GET https://api.example.com/users \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">POST /api/users</h2>
          <p className="text-muted-foreground">Crea un nuovo utente.</p>
          <CodeBlock
            language="bash"
            code={`curl -X POST https://api.example.com/users \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Mario Rossi", "email": "mario@example.com"}'`}
          />
        </section>
      </div>
    ),
  },

  "api-auth": {
    title: "Autenticazione API",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Come autenticare le richieste alle API.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Bearer Token</h2>
          <CodeBlock
            language="typescript"
            code={`const response = await fetch("/api/data", {
  headers: {
    "Authorization": \`Bearer \${token}\`,
    "Content-Type": "application/json",
  },
});`}
          />
        </section>
      </div>
    ),
  },

  "rate-limiting": {
    title: "Rate Limiting",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Informazioni sui limiti di utilizzo delle API.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-foreground">Piano</th>
                <th className="text-left p-3 font-medium text-foreground">Richieste/min</th>
                <th className="text-left p-3 font-medium text-foreground">Richieste/giorno</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 text-muted-foreground">Free</td>
                <td className="p-3 text-muted-foreground">60</td>
                <td className="p-3 text-muted-foreground">1,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 text-muted-foreground">Pro</td>
                <td className="p-3 text-muted-foreground">300</td>
                <td className="p-3 text-muted-foreground">10,000</td>
              </tr>
              <tr>
                <td className="p-3 text-muted-foreground">Enterprise</td>
                <td className="p-3 text-muted-foreground">Illimitato</td>
                <td className="p-3 text-muted-foreground">Illimitato</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  components: {
    title: "Componenti",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Libreria dei componenti UI disponibili.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Button</h2>
          <CodeBlock
            language="tsx"
            code={`import { Button } from "@/components/ui/button";

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
          />
        </section>
      </div>
    ),
  },

  hooks: {
    title: "Hooks",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Custom hooks disponibili nel progetto.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">useLocalStorage</h2>
          <CodeBlock
            language="tsx"
            code={`import { useLocalStorage } from "@/hooks/useLocalStorage";

function Component() {
  const [value, setValue] = useLocalStorage("key", "default");
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
          />
        </section>
      </div>
    ),
  },

  utilities: {
    title: "Utilities",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Funzioni di utilità disponibili.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">cn (className merger)</h2>
          <CodeBlock
            language="tsx"
            code={`import { cn } from "@/lib/utils";

// Combina classi Tailwind in modo intelligente
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary" : "secondary"
)} />`}
          />
        </section>
      </div>
    ),
  },

  environment: {
    title: "Ambiente",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Configurazione delle variabili d'ambiente.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Variabili Disponibili</h2>
          <CodeBlock
            language="bash"
            code={`# Configurazione API
VITE_API_URL=https://api.example.com

# Configurazione Database
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=false`}
          />
        </section>
      </div>
    ),
  },

  deployment: {
    title: "Deployment",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Guida al deployment dell'applicazione.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Build per Produzione</h2>
          <CodeBlock
            language="bash"
            code={`# Build dell'applicazione
npm run build

# Preview locale del build
npm run preview`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Deploy su Vercel</h2>
          <CodeBlock
            language="bash"
            code={`# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel --prod`}
          />
        </section>
      </div>
    ),
  },

  faq: {
    title: "FAQ",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Domande frequenti sul progetto.
        </p>

        <div className="space-y-4">
          {[
            {
              q: "Come posso contribuire al progetto?",
              a: "Puoi contribuire aprendo una pull request sul repository GitHub. Leggi prima le linee guida per i contributori.",
            },
            {
              q: "Il progetto è gratuito?",
              a: "Sì, il progetto è open source e gratuito per uso commerciale e personale.",
            },
            {
              q: "Quali browser sono supportati?",
              a: "Supportiamo tutti i browser moderni: Chrome, Firefox, Safari, Edge nelle ultime 2 versioni.",
            },
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  troubleshooting: {
    title: "Troubleshooting",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Soluzioni ai problemi più comuni.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Errore: Module not found</h2>
          <p className="text-muted-foreground">
            Se ricevi questo errore, prova a eliminare node_modules e reinstallare:
          </p>
          <CodeBlock
            language="bash"
            code={`rm -rf node_modules
npm install`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-foreground">Build fallisce</h2>
          <p className="text-muted-foreground">
            Verifica che tutte le variabili d'ambiente siano configurate correttamente.
          </p>
        </section>
      </div>
    ),
  },
};
