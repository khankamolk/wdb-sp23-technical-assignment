"use client"; 
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Text,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#000000" px={4}>
        <Flex h="64px" alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack paddingLeft="40px" spacing={8} alignItems={'center'}>
            <Image src="/logo.png" htmlWidth="29.33px" htmlHeight="40.33px" alt="unicorn-logo"/>
            <Box textStyle="navbarBold">
                My Little Unicorn 
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
                as={'nav'}
                paddingRight="40px"
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                  <Link href='/aboutus'>
                    <Text textStyle='navbarLinks'>About Us</Text>
                  </Link>
                  <Link href='/aboutus'>
                    <Text textStyle='navbarLinks'>Gallery</Text>
                  </Link>
                </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}