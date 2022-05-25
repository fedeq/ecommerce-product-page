import { Stack, Badge, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <>
      <Text color="primary.500" fontWeight="700">
        SNEAKER COMPANY
      </Text>
      <Text
        fontSize="5xl"
        fontWeight="700"
        paddingY={4}
        lineHeight={1}
        textTransform="capitalize"
      >
        Fall limited edition sneakers
      </Text>
      <Text fontSize="l" color="#68707D" lineHeight={1.6} paddingY={4}>
        These low-profiler sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they will whihstand everything
        the weather can offer.
      </Text>
      <Stack direction="row">
        <Text fontSize="4xl" fontWeight="bold">
          $125.00
        </Text>
        <Stack justifyContent="center" alignItems="center">
          <Badge
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="32px"
            fontSize="18px"
            colorScheme="orange"
            color="primary.500"
            borderRadius="8px"
            paddingX={2}
          >
            50%
          </Badge>
        </Stack>
      </Stack>
      <Text
        fontSize="xl"
        color="gray.400"
        fontWeight="bold"
        textDecoration="line-through"
      >
        $250.00
      </Text>
    </>
  );
};

export default ProductDetails;
