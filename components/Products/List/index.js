import { useEffect, useState } from "react";
import { Text, Box, Flex, Grid, Divider, useToast } from "@chakra-ui/react";
import Filters from "../Filter";
import ProductCard from "../Item";
import useUser from "hook/useUser";
import Link from "next/link";

export default function ProductsList({ products }) {
  const [sortOrder, setSortOrder] = useState("recent");
  const { userRedeemSuccess, userRedeemError, clearUserRedeem } = useUser();
  const toast = useToast();

  const sortedProducts = () => {
    switch (sortOrder) {
      case "recent":
        return [...products];
      case "lowest":
        return [...products].sort((a, b) => a.cost - b.cost);
      case "highest":
        return [...products].sort((a, b) => b.cost - a.cost);
      default:
        return [...products];
    }
  };

  useEffect(() => {
    if (userRedeemSuccess) {
      toast({
        duration: 2000,
        isClosable: true,
        status: "success",
        title: "Product redeemed",
        description: "We deducted the amount from your account",
        position: "bottom-start",
      });
    }
  }, [userRedeemSuccess]);

  useEffect(() => {
    if (userRedeemError) {
      toast({
        duration: 2000,
        isClosable: true,
        status: "error",
        title: "Something failed",
        description: userRedeemError.message,
        position: "bottom-start",
      });
    }
  }, [userRedeemError]);

  useEffect(() => {
    return () => {
      clearUserRedeem();
    };
  }, []);

  return (
    <>
      <Box as="section" padding="5%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} alignItems="center">
          <Text as="span" fontSize={{ sm: "4vw", md: "20px" }} color="#adb5bd">
            {products.length} products
          </Text>
          <Filters changeSort={setSortOrder} sortOrder={sortOrder} />
        </Flex>
        <Flex justifyContent={{ sm: "center", lg: "flex-start" }}>
          <Text as="span" color="#adb5bd" fontSize={{ sm: "4vw", md: "20px" }}>
            Not enought points? <Link href="/points">Click here!</Link>
          </Text>
        </Flex>
        <Divider marginTop="10px" />
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(13rem, 1fr))"
          gridGap="16px"
          justifyContent="center"
          alignItems="center"
          marginTop="30px"
        >
          {sortedProducts().map((product, i) => {
            return <ProductCard {...product} key={i} />;
          })}
        </Grid>
      </Box>
    </>
  );
}
