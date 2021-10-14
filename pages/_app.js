import Head from "components/Head";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "/styles/global";
import AppLayout from "components/Layout";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  return (
    <>
      <ChakraProvider theme={customTheme}>
          <Head />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
