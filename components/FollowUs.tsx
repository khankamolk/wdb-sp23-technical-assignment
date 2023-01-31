"use client";
import { useControllableProp, useControllableState } from '@chakra-ui/react'
import {
    VStack,
    Flex,
    HStack,
    Text,
    SimpleGrid,
    Button,
    Spacer
  } from '@chakra-ui/react';
import { 
    FaInstagram, 
    FaFacebook,
    FaLinkedin,
    FaReddit,
    FaTwitter,
    FaGithub,
    FaDiscord
 } from 'react-icons/fa';
 import { 
    RiSnapchatLine
 } from 'react-icons/ri';

export default function FollowUs() {
    const [value, setValue] = useControllableState({ defaultValue: 7 })
    return (
        <Flex bg="#F5F5F5" w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
            <VStack padding="50px" paddingBottom="100px">
                <Text textStyle="h2" textColor="#FF79B9">
                Follow Us
                </Text>
                <SimpleGrid columns={4} spacing={10} paddingTop="30px">
                    <FaInstagram size="75px"/>
                    <FaFacebook size="75px"/>
                    <RiSnapchatLine size="75px"/>
                    <FaLinkedin size="75px"/>
                    <FaReddit size="75px"/>
                    <FaTwitter size="75px"/>
                    <FaGithub size="75px"/>
                    <FaDiscord size="75px"/>
                </SimpleGrid>
                <VStack paddingTop="80px">
                    <Text textStyle="h3" textColor="#000000" align='center'>
                        Give Us Feedback
                    </Text>
                    <HStack direction={'row'} paddingTop="20px">
                        <Button
                            onClick={() => setValue(value + 1)}
                            width= '200px'
                            height= '65px'
                            bg="#FF79B9"
                            rounded={'20px'}
                            color={'white'}
                            _hover={{ bg: '#cf4a84' }}>
                            <Text textStyle='h4'>+1</Text>
                        </Button>
                        <Text paddingLeft="20px" textStyle='h4' textColor="#FF79B9">
                            Score: {value}
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Flex>
    )
}