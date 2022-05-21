import { Box, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import NavbarItem from "./NavbarItem";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      height="90px"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Stack
        direction="row"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Img src="images/logo.svg" height="25px" paddingRight="12" />
        <Stack
          direction="row"
          spacing={6}
          textColor="gray.400"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <NavbarItem>Collections</NavbarItem>
          <NavbarItem>Men</NavbarItem>
          <NavbarItem>Women</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={10} alignItems="center">
        <Img src="images/icon-cart.svg" height="20px" />
        <Img src="images/image-avatar.png" height="50px" />
      </Stack>
    </Stack>
  );
};

export default Navbar;
