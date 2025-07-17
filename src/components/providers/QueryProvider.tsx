import { queryClient } from "@/core/lib/tanstack-query/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Dev tools are only available in development */}
      {__DEV__ && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
