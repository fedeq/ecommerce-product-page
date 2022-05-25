import { Stack, Button, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useCartContext } from "../context/cartContext";

type Props = {};

const AddToCart = (props: Props) => {
  const [cant, setCant] = useState<number>(0);

  const incrementCant = useCallback(() => setCant((cant) => cant + 1), []);
  const decrementCant = useCallback(
    () => setCant((cant) => Math.max(cant - 1, 0)),
    []
  );
  const { increment: addToCart } = useCartContext();

  return (
    <Stack direction="row" paddingTop={8}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="gray.100"
        borderRadius="10px"
        marginRight={2}
      >
        <Button
          color="primary.500"
          fontSize="24px"
          height="100%"
          paddingBottom="4px"
          onClick={decrementCant}
        >
          <Text>-</Text>
        </Button>
        <Text width={14} textAlign="center">
          {cant}
        </Text>
        <Button
          paddingBottom="4px"
          color="primary.500"
          fontSize="24px"
          height="100%"
          onClick={incrementCant}
        >
          <Text>+</Text>
        </Button>
      </Stack>
      <Button
        backgroundColor="primary.500"
        textColor="white"
        width="250px"
        height="50px"
        onClick={() => addToCart(cant)}
      >
        Add to cart
      </Button>
    </Stack>
  );
};

export default AddToCart;
