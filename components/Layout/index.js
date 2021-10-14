import { Box, Flex } from "@chakra-ui/react";
import Nav from "components/Nav";

export default function AppLayout({ children }) {
  return (
    <Box as="section" display="flex" flexDirection="column" minHeight="100vh">
      <Nav />
      <Flex as="section" direction="column" flex="1">
        {children}
      </Flex>
      <footer>footer</footer>
    </Box>
  );
}
