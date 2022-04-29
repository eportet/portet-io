import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { light, dark } from "../styles/theme";
import { GlobalStyle } from "../styles/globals";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={false ? light : dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
