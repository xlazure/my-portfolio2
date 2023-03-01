import { useContext, useState, createContext } from "react";

type PageContextType = {
  isRedirecting: boolean;
  setIsRedirecting: React.Dispatch<React.SetStateAction<boolean>>;
};

type PageProviderProps = {
  children: React.ReactNode;
};
const PageContext = createContext<PageContextType | null>(null);

export function usePage(): PageContextType {
  const pageContext = useContext(PageContext);
  if (!pageContext) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return pageContext;
}

export function PageProvider({ children }: PageProviderProps) {
  const [isRedirecting, setIsRedirecting] = useState(true);

  // useEffect(() => {}, []);

  const value = {
    isRedirecting,
    setIsRedirecting,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
