"use client";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

import { HStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Navbar />
      <HStack spacing={0}>
        <HeroSection />
      </HStack>
    </>
  )
}