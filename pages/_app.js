import Head from "components/Head";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "/styles/global";
import AppLayout from "components/Layout";
import UserContextProvider from "context/user";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <UserContextProvider>
          <Head />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </UserContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
