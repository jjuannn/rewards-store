import ProductsList from "components/Products/List";
import Title from "components/Title";
import { Flex, Text } from "@chakra-ui/react";
import { fetchProductsList } from "services/api";

export default function Home({ error, data }) {
  return (
    <>
      <Title />
      {data && <ProductsList products={data} />}
      {error && (
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Text color="red" fontWeight="bold" fontSize="20px">
            {error}
          </Text>
        </Flex>
      )}
    </>
  );
}
export async function getStaticProps() {
  try {
    const data = await fetchProductsList();
    return {
      props: {
        data,
      },
      revalidate: 300,
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
      revalidate: 10,
    };
  }
}
