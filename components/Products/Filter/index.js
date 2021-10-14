import { Text, Flex } from "@chakra-ui/react";

export default function Filters({ changeSort, sortOrder }) {
  return (
    <Flex flexDirection="row" margin="10px" textAlign="center">
      <Text
        as="span"
        background={sortOrder === "recent" ? "main.cyan" : "#f1f3f5"}
        color={sortOrder === "recent" ? "white" : "#adb5bd"}
        boxShadow={sortOrder === "recent" ? "md" : ""}
        margin="5px"
        fontSize={{ sm: "3vw", md: "15px" }}
        borderRadius="full"
        padding="10px"
        _hover={{ cursor: "pointer" }}
        onClick={() => changeSort("recent")}
      >
        Most recent
      </Text>
      <Text
        as="span"
        background={sortOrder === "highest" ? "main.cyan" : "#f1f3f5"}
        color={sortOrder === "highest" ? "white" : "#adb5bd"}
        boxShadow={sortOrder === "highest" ? "md" : ""}
        margin="5px"
        fontSize={{ sm: "3vw", md: "15px" }}
        borderRadius="full"
        padding="10px"
        _hover={{ cursor: "pointer" }}
        onClick={() => changeSort("highest")}
      >
        Highest price
      </Text>
      <Text
        as="span"
        background={sortOrder === "lowest" ? "main.cyan" : "#f1f3f5"}
        color={sortOrder === "lowest" ? "white" : "#adb5bd"}
        boxShadow={sortOrder === "lowest" ? "md" : ""}
        margin="5px"
        fontSize={{ sm: "3vw", md: "15px" }}
        borderRadius="full"
        padding="10px"
        _hover={{ cursor: "pointer" }}
        onClick={() => changeSort("lowest")}
      >
        Lowest price
      </Text>
    </Flex>
  );
}
