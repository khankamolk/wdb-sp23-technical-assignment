"use client";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Flex
        w={'full'}
        h={'125vh'}
        backgroundImage="url('/hero-image.png')"
        backgroundSize={'cover'}>
        <VStack
          w={'full'}
          justify={'right'}
          align={'flex-end'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack paddingTop="125px" paddingRight="50px" maxW={'2xl'} align={'flex-end'} spacing={1}>
            <Text textStyle="h1">
              Care & Love?
            </Text>
            <Stack direction={'row'}>
              <Button
                width= '200px'
                height= '55px'
                bg="#FF79B9"
                rounded={'10px'}
                color={'white'}
                _hover={{ bg: '#cf4a84' }}>
                <Text textStyle="s">
                  Adopt
                </Text>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }