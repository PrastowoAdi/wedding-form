import React from "react";

import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@/store";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <>
              <Head>
                <title>Wedding Form</title>
                <meta name="description" content="Generated by Divory Team." />
              </Head>
              <Component {...pageProps} />
            </>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
