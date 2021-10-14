import { Flex, Text, Image, Link } from "@chakra-ui/react";
import useUser from "hook/useUser";
import { useEffect } from "react";

export default function Nav() {
  const { getUserData, userData, userError, userLoading } = useUser();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      boxShadow="base"
      paddingY="0.5rem"
      paddingX="1rem"
    >
      <Link href="/">
        <Image width="50px" src="/assets/aerolab-logo.svg" />
      </Link>
      <Flex alignItems="center" justifyContent="center">
        <Text
          as="span"
          margin="0px 5px"
          padding="0.5rem"
          display="flex"
          borderRadius="full"
          textAlign="center"
        >
          {userLoading && "..."}
          {userData && userData.name}
          {userError && "Error"}
        </Text>
        <Text
          as="span"
          margin="0px 5px"
          padding="0.5rem"
          display="flex"
          borderRadius="full"
          textAlign="center"
          bg="gray.100"
        >
          {userLoading && "..."}
          {userData && userData.points}
          {userError && "Error"}
          <Image marginLeft="5px" width="25px" src="/assets/icons/coin.svg" />
        </Text>
      </Flex>
    </Flex>
  );
}
