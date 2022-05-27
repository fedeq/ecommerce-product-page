import { Box, Img, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useCartContext } from "../context/cartContext";
import CartModal from "./CartModal";

type Props = {};

const Cart = (props: Props) => {
  const { cant } = useCartContext();
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <Stack
      cursor="pointer"
      justifyContent="center"
      alignItems="center"
      height="100%"
      position="relative"
      onClick={toggleModal}
    >
      <Img src="images/icon-cart.svg" height="20px" />
      {cant > 0 && (
        <Stack
          position="absolute"
          top="22px"
          right="-10px"
          backgroundColor="primary.500"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          width="20px"
          height="12px"
          fontSize="10px"
          color="white"
        >
          <Text>{cant}</Text>
        </Stack>
      )}
      {showModal && <CartModal />}
    </Stack>
  );
};

export default Cart;
