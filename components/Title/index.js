import { Flex, Text, Heading } from "@chakra-ui/react";

export default function Title() {
  return (
    <Flex
      as="section"
      maxWidth="100vw"
      height="35vw"
      maxHeight="400px"
      flexDirection="column"
      padding="2%"
      justifyContent="flex-end"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage={`url("/assets/header-x1.png")`}
    >
      <Heading
        color="white"
        fontWeight="bold"
        fontSize={{ sm: "8vw", lg: "60px" }}
      >
        Electronics
      </Heading>
    </Flex>
  );
}
