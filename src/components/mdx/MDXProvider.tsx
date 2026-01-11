import { MDXProvider as BaseMDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./MDXComponents";

interface MDXProviderProps {
  children: React.ReactNode;
}

export const MDXProvider = ({ children }: MDXProviderProps) => {
  return (
    <BaseMDXProvider components={mdxComponents}>
      {children}
    </BaseMDXProvider>
  );
};

export default MDXProvider;
