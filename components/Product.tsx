import { Badge, Box, Img, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

type Props = {};

const Product = (props: Props) => {
  return (
    <Stack direction="row" padding="50px" spacing={32}>
      <Box flex={1}>
        <ProductImages />
      </Box>
      <Box flex={1} paddingY={16}>
        <Stack>
          <ProductDetails />
          <AddToCart />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Product;
