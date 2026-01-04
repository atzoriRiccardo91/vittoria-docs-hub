import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsHeader from "@/components/docs/DocsHeader";
import DocsMobileSidebar from "@/components/docs/DocsMobileSidebar";
import TableOfContents from "@/components/docs/TableOfContents";
import { docsContent } from "@/data/docsContent";
import { findDocBySlug, findSectionBySlug, getAllDocs } from "@/data/docsConfig";

const DocsPage = () => {
  const { slug = "overview" } = useParams();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = docsContent[slug];
  const currentDoc = findDocBySlug(slug);
  const currentSection = findSectionBySlug(slug);
  const allDocs = getAllDocs();
  const currentIndex = allDocs.findIndex((doc) => doc.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">
            Pagina non trovata
          </h1>
          <button
            onClick={() => navigate("/docs/overview")}
            className="text-primary hover:underline"
          >
            Torna alla documentazione
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <DocsSidebar />
      </div>

      {/* Mobile Sidebar */}
      <DocsMobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-[280px]">
        <DocsHeader onMenuToggle={() => setMobileMenuOpen(true)} />

        <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/docs/overview" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            {currentSection && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span>{currentSection.title}</span>
              </>
            )}
            {currentDoc && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">{currentDoc.title}</span>
              </>
            )}
          </nav>

          {/* Content */}
          <article className="docs-content animate-fade-in">
            <h1 className="text-4xl font-display font-bold text-foreground mb-6">
              {content.title}
            </h1>
            {content.content}
          </article>

          {/* Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between">
              {prevDoc ? (
                <Link
                  to={`/docs/${prevDoc.slug}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-xs">Precedente</div>
                    <div className="font-medium">{prevDoc.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextDoc && (
                <Link
                  to={`/docs/${nextDoc.slug}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <div className="text-xs">Successivo</div>
                    <div className="font-medium">{nextDoc.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </main>

        {/* Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
};

export default DocsPage;
