import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme } from "globalCSS/theme";
import GlobalStyles from "globalCSS/global";

import store from "redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
