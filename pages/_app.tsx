import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { light, dark } from "../styles/theme";
import { GlobalStyle } from "../styles/globals";
import { useMedia } from "react-use";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const prefersLight = useMedia("(prefers-color-scheme: light)");
  return (
    <ThemeProvider theme={prefersLight ? light : dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
