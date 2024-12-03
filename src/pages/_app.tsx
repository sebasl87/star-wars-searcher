import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="starry-background">
        <Component {...pageProps} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
