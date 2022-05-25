import { Box, Img, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const ProductImages = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  return (
    <>
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
    </>
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

export default ProductImages;
