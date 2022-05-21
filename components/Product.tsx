import { Box, Button, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Product = (props: Props) => {
  return (
    <Stack direction="row" padding="50px" spacing={32}>
      <Box flex={1}>
        <Img
          src="images/image-product-1.jpg"
          cursor="pointer"
          borderRadius={14}
        />
        <Stack direction="row" marginTop={10} spacing={10}>
          <Box>
            <SmallImage src="images/image-product-1.jpg" />
          </Box>
          <Box>
            <SmallImage src="images/image-product-2.jpg" />
          </Box>
          <Box>
            <SmallImage src="images/image-product-3.jpg" />
          </Box>
          <Box>
            <SmallImage src="images/image-product-4.jpg" />
          </Box>
        </Stack>
      </Box>
      <Box flex={1} paddingY={16}>
        <Stack>
          <Text color="primary.500">sneaker company</Text>
          <Text>Fall limited edition sneakers</Text>
          <Text>
            Fall limited edition sneakersThere low-profiler sneakers are your
            perfect casual wear companion. Featuring a durable rubber outer
            sole, they will whihstand everything the weather can offer
          </Text>
          <Stack direction="row">
            <Text>$125.00</Text>
            <Text>50%</Text>
          </Stack>
          <Stack direction="row">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius="10px"
            >
              <Button
                color="primary.500"
                fontSize="24px"
                height="100%"
                paddingBottom="4px"
              >
                <Text>-</Text>
              </Button>
              <Text>0</Text>
              <Button
                paddingBottom="4px"
                color="primary.500"
                fontSize="24px"
                height="100%"
              >
                <Text>+</Text>
              </Button>
            </Stack>
            <Button
              backgroundColor="primary.500"
              textColor="white"
              width="250px"
              height="50px"
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const SmallImage = ({ src }: { src: string }) => {
  return <Img src={src} cursor="pointer" borderRadius={14} />;
};

export default Product;
