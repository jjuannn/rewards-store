import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex as="footer" justifyContent="center">
      <Text as="i">
        Aerolab Challenge made by{" "}
        <Link
          color="cyan"
          fontWeight="bold"
          href="https://github.com/jjuannn"
          target="_blank"
          rel="noreferrer"
        >
          Juan Avero
        </Link>
      </Text>
    </Flex>
  );
}
