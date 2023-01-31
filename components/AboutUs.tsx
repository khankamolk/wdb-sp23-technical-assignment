"use client";
import {
    VStack,
    Flex,
    Box,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

export default function AboutUs() {
return (
    <Flex bg="#FF79B9" w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
        <VStack padding="50px" paddingBottom="100px">
            <Text textStyle="h2">
            About Us
            </Text>
            <Box paddingTop="30px">
                <Text textStyle="m" align='center'>
                My Little Unicorn is a unicorn adoption agency. Our platform allows you to bring a touch of whimsy and wonder into your life by adopting your very own unicorn. These mystical creatures come in all shapes and sizes and each one is as unique as a fingerprint.  
                </Text>
            </Box>
        </VStack>
    </Flex>
)
}