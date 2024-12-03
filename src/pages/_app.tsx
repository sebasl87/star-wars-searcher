import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
