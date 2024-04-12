import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import btcimg from "../assets/btcimg.png"
import {motion} from 'framer-motion'
import Footer from './Footer'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"}  h={"85vh"} position={"relative"} >
      
      <motion.div style={{
        height:"80vh",
      }}
      
      animate={{
        translateY:"28px"
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse",
        
      }}
      >
      <Image w={"full"} h={"full"} p={"8"} filter={"grayscale(1)"} objectFit={"contain"}  src={btcimg} />
      </motion.div>

      <Text fontSize={["x-large","xxx-large"]} fontWeight={["700","900"]} textAlign={"center"} position={"absolute"} bottom={"8"} left={"50%"} transform={"translateX(-50%)"} color={"whitesmoke"}  >Crypto Canvas</Text>
      
    </Box>
    
  )
  
}

export default Home
