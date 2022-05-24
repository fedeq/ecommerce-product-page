import { Badge, Box, Button, Img, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

type Props = {};

const Product = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [cant, setCant] = useState<number>(0);

  const incrementCant = () => setCant((cant) => cant + 1);
  const decrementCant = () => setCant((cant) => cant - 1);

  return (
    <Stack direction="row" padding="50px" spacing={32}>
      <Box flex={1}>
        <Img
          src={`images/image-product-${selectedImage}.jpg`}
          cursor="pointer"
          borderRadius={14}
        />
        <Stack direction="row" marginTop={10} spacing={10}>
          {[1, 2, 3, 4].map((i) => (
            <Box key={i} onClick={() => setSelectedImage(i)}>
              <SmallImage
                src={`images/image-product-${i}.jpg`}
                isSelected={i === selectedImage}
              />
            </Box>
          ))}
        </Stack>
      </Box>
      <Box flex={1} paddingY={16}>
        <Stack>
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
            Featuring a durable rubber outer sole, they will whihstand
            everything the weather can offer.
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
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const SmallImage = ({
  src,
  isSelected,
}: {
  src: string;
  isSelected: boolean;
}) => {
  return (
    <Img
      src={src}
      cursor="pointer"
      borderRadius={14}
      border={isSelected ? "2px solid" : "2px solid"}
      borderColor={isSelected ? "primary.500" : "transparent"}
      filter={isSelected ? "opacity(0.5)" : ""}
    />
  );
};

export default Product;
