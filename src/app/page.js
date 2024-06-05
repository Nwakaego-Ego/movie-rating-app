"use client";
import Dashboard from "./components/dashboard/dashboard";
import "semantic-ui-css/semantic.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}
