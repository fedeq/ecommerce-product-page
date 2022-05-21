import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Home: NextPage = () => {
  return (
    <Stack>
      <Navbar />
      <Product />
    </Stack>
  );
};

export default Home;
