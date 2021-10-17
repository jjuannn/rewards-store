import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  useToast,
  Heading,
} from "@chakra-ui/react";
import useUser from "hook/useUser";
import { useEffect } from "react";

export default function PointsPage() {
  const {
    userAddCoinsError,
    userAddCoinsLoading,
    userAddCoinsSuccess,
    addCoins,
    clearUserAddCoins,
  } = useUser();
  const toast = useToast();

  useEffect(() => {
    if (userAddCoinsSuccess) {
      toast({
        duration: 2000,
        isClosable: true,
        status: "success",
        title: "Coins claimed",
        description: "We added the amount to your account",
        position: "bottom-start",
      });
    }
  }, [userAddCoinsSuccess]);

  useEffect(() => {
    if (userAddCoinsError) {
      toast({
        duration: 2000,
        isClosable: true,
        status: "error",
        title: "Something failed",
        description: "Please try again later",
        position: "bottom-start",
      });
    }
  }, [userAddCoinsError]);

  useEffect(() => {
    return () => {
      clearUserAddCoins();
    };
  }, []);

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center" marginTop="30px">
        <Heading margin="0 auto" color="cyan">
          Add coins
        </Heading>
      </Flex>
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems="center"
        marginTop="20px"
      >
        <Button
          disabled={userAddCoinsLoading}
          onClick={() => {
            addCoins(1000);
          }}
          background="#e9ecef"
          border="none"
          width="75vw"
          maxWidth="20em"
          padding="15px"
          margin="10px"
          borderRadius="50px"
          _hover={{ cursor: userAddCoinsLoading ? "not-allowed" : "pointer" }}
        >
          <Text display="flex" as="span" textAlign="center">
            1000 <Image width="20px" src="/assets/icons/coin.svg" />
          </Text>
        </Button>
        <Button
          disabled={userAddCoinsLoading}
          onClick={() => {
            addCoins(5000);
          }}
          background="#e9ecef"
          border="none"
          width="75vw"
          maxWidth="20em"
          padding="15px"
          margin="10px"
          borderRadius="50px"
          _hover={{ cursor: userAddCoinsLoading ? "not-allowed" : "pointer" }}
        >
          <Text display="flex" as="span" textAlign="center">
            5000 <Image width="20px" src="/assets/icons/coin.svg" />
          </Text>
        </Button>
        <Button
          disabled={userAddCoinsLoading}
          onClick={() => {
            addCoins(7500);
          }}
          background="#e9ecef"
          border="none"
          width="75vw"
          maxWidth="20em"
          padding="15px"
          margin="10px"
          borderRadius="50px"
          _hover={{ cursor: userAddCoinsLoading ? "not-allowed" : "pointer" }}
        >
          <Text display="flex" as="span" textAlign="center">
            7500 <Image width="20px" src="/assets/icons/coin.svg" />
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
