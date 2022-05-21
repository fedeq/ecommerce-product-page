import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <Stack>
      <Navbar />
      <div>Product</div>
    </Stack>
  );
};

export default Home;
