import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const NavbarItem = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      boxSizing="border-box"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderBottom="3px solid transparent"
      cursor="pointer"
      _hover={{
        borderBottom: "3px solid",
        borderColor: "primary.400",
      }}
    >
      {children}
    </Text>
  );
};

export default NavbarItem;
