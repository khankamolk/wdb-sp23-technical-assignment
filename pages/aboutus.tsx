"use client";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import FollowUs from "../components/FollowUs";

import { HStack } from '@chakra-ui/react';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <HStack spacing={0} direction={'row'} display={{ base: 'none', md: 'flex' }}>
        <AboutUs />
        <FollowUs />
      </HStack>
    </>
  )
}
