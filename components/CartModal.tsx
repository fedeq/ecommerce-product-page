import {
  Box,
  Button,
  Divider,
  IconButton,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useCartContext } from "../context/cartContext";
import { DeleteIcon } from "@chakra-ui/icons";
type Props = {};

const CartModal = (props: Props) => {
  const { cant, emptyCart } = useCartContext();

  return (
    <Stack
      position="absolute"
      backgroundColor="white"
      boxShadow="xl"
      borderRadius="5px"
      top="65px"
      minWidth="max-content"
    >
      <Text paddingX={4} fontWeight="700">
        Cart
      </Text>
      <Divider />
      {cant > 0 ? (
        <>
          <Stack padding={4} direction="row" color="#68707D">
            <Img
              src={`images/image-product-1.jpg`}
              cursor="pointer"
              borderRadius={8}
              height="50px"
            />
            <Stack>
              <Text>Fall Limited Edition Sneakers</Text>
              <Stack direction="row">
                <Text>
                  {(125).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  x {cant}
                </Text>
                <Text fontWeight="700">
                  {(125.0 * cant).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Text>
              </Stack>
            </Stack>
            <IconButton
              icon={<DeleteIcon />}
              aria-label={""}
              backgroundColor="transparent"
              onClick={emptyCart}
            />
          </Stack>
          <Box padding={4}>
            <Button width="100%" backgroundColor="primary.500" color="white">
              Checkout
            </Button>
          </Box>
        </>
      ) : (
        <Stack
          width="300px"
          height="200px"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight="bold">Your cart is empty</Text>
        </Stack>
      )}
    </Stack>
  );
};

export default CartModal;
