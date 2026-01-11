import type { ComponentPropsWithoutRef } from "react";
import CodeBlock from "@/components/docs/CodeBlock";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

// Custom MDX components mapping
export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl font-display font-bold text-foreground mb-6 mt-8 first:mt-0"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl font-display font-semibold text-foreground mb-4 mt-8 pb-2 border-b border-border"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-xl font-display font-medium text-foreground mb-3 mt-6"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-lg font-display font-medium text-foreground mb-2 mt-4"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-primary hover:underline transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-border" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border border-border bg-muted px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
    // Extract code from pre > code structure
    const codeElement = children as React.ReactElement<{ children: string; className?: string }>;
    const code = codeElement?.props?.children || "";
    const className = codeElement?.props?.className || "";
    const language = className.replace("language-", "") || "text";
    
    return <CodeBlock code={String(code).trim()} language={language} />;
  },
  code: (props: ComponentPropsWithoutRef<"code">) => {
    // Inline code (not inside pre)
    if (typeof props.children === "string" && !props.className?.includes("language-")) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  // Custom components for MDX
  Info: ({ children }: { children: React.ReactNode }) => (
    <Alert className="my-4 border-blue-500/50 bg-blue-500/10">
      <Info className="h-4 w-4 text-blue-500" />
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  ),
  Warning: ({ children }: { children: React.ReactNode }) => (
    <Alert className="my-4 border-yellow-500/50 bg-yellow-500/10">
      <AlertTriangle className="h-4 w-4 text-yellow-500" />
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  ),
  Success: ({ children }: { children: React.ReactNode }) => (
    <Alert className="my-4 border-green-500/50 bg-green-500/10">
      <CheckCircle className="h-4 w-4 text-green-500" />
      <AlertDescription className="text-muted-foreground">{children}</AlertDescription>
    </Alert>
  ),
};
