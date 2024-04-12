import React from 'react'
import { Box, VStack, keyframes } from '@chakra-ui/react'
const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const Loader = () => {
  const spinAnimation = `${spin} infinite 1s linear`;   

  return (
    
     <VStack w={"full"} h={"90vh"} justifyContent={"center"}>
       <Box borderBottom={"3px solid black"} 
        borderRadius={"50%"} 
        h={"150px"}
         w={"150px"}
           animation={spinAnimation}
            >
      </Box>
     </VStack>
  )
}

export default Loader
