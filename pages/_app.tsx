import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";
import { AppWrapper } from "../context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container height="100%" maxWidth="container.xl" backgroundColor="white">
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
