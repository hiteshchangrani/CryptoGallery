import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram,FaRedditAlien,FaDiscord,FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Box, VStack, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <VStack color={"whitesmoke"} bgColor={"blackAlpha.900"} w={"full"} minH={"50"} px={"16"} py={["12", "6"]} spacing={"8"}>
      <HStack justifyContent={"space-between"} w={"full"}>
        <HStack spacing={"4"}>
          <Text fontSize={"24"}>Follow Us:</Text>
          <a href="https://www.facebook.com" target='_blank'><ImFacebook2 fontSize={"24"} color={"invert(1"} /></a>
          <a href="https://www.instagram.com" target='_blank'><FaInstagram fontSize={"24"} color={"invert(1"} /></a>
          <a href="https://www.twitter.com" target='_blank'><FaSquareXTwitter fontSize={"24"} color={"invert(1"} /></a>
        </HStack>
        <HStack spacing={"4"}>
        <Text fontSize={"24"}>Connect with the Community:</Text>
          <a href="https://www.facebook.com" target='_blank'><FaRedditAlien fontSize={"24"} color={"invert(1"} /></a>
          <a href="https://www.instagram.com" target='_blank'><FaDiscord fontSize={"24"} color={"invert(1"} /></a>
          <a href="https://www.twitter.com" target='_blank'><FaTelegram fontSize={"24"} color={"invert(1"} /></a>
        </HStack>
      </HStack>

      <HStack spacing={"12"}>
        <Link><Text>•Terms of Service</Text></Link>
        <Link><Text>•Privacy Policy</Text></Link>
        <Link><Text>•About Us</Text></Link>
        <Link><Text>•FAQ</Text></Link>
      </HStack>

      <Text fontSize={"small"} opacity={"0.7"} >Copyright © 2024 Crypto Canvas. All rights reserved.</Text>
      </VStack>
  )
}

export default Footer
