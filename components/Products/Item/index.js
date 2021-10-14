import { Flex, Box, Text, Image, Divider, useToast } from "@chakra-ui/react";
import useUser from "hook/useUser";
import { useState } from "react";

export default function ProductCard({ category, name, cost, _id, img }) {
  const { userData, userRedeemSuccess, userRedeemLoading, redeemPoints } =
    useUser();

  const handleClaim = () => {
    redeemPoints(_id, cost);
  };

  return (
    <>
      {userData && (
        <Flex
          position="relative"
          flexDirection="column"
          margin="0 auto"
          width="13rem"
          height="13rem"
          justifyContent="space-between"
          boxShadow="md"
          borderRadius="md"
          padding="10px"
          background="white"
        >
          <Flex>
            {userData.points >= cost ? (
              <Flex
                width="fit-content"
                padding="5px"
                background={userRedeemLoading ? "#1E8397" : "#6ee8ff"}
                borderRadius="full"
                fontSize="12px"
                alignItems="center"
                position="absolute"
                right="10px"
                color="white"
                _hover={{
                  cursor: userRedeemLoading ? "not-allowed" : "pointer",
                }}
                onClick={() => handleClaim()}
              >
                {cost}
                <Image
                  marginLeft="5px"
                  width="20px"
                  src="/assets/icons/coin.svg"
                />
              </Flex>
            ) : (
              <Flex
                padding="5px"
                borderRadius="full"
                background="rgba(222, 226, 230, 0.5)"
                position="absolute"
                right="10px"
              >
                <Text cursor="not-allowed" fontSize="12px">
                  You need {cost - userData.points} more coins
                </Text>
              </Flex>
            )}
          </Flex>
          <Image src={img.url} width="100%" />
          <Divider />
          <Box>
            <Text color="#adb5bd" fontSize="10px" fontWeight="500">
              {category}
            </Text>
            <Text color="#495057" fontSize="14px" fontWeight="300">
              {name}
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
}
