import React from 'react'
import { Link } from 'react-router-dom'
import {VStack, Image, Heading, Text } from '@chakra-ui/react'

const CoinCard = ({ price,name, img,symbol,id, currencySymbol="₹"}) => {
   
    return (
        <>
        <Link to={`/coins/${id}`} >
        <VStack w={"52"} shadow={"lg"} p={"4"} borderRadius={"lg"} transition={"all 0.5s"} m={"4"} 
        css={{
            "&:hover": {transform:"scale(1.07)"}
            }} >
          <Image src={img} w={"14"} h={"14"} objectFit={"contain"} alt={"coin"} />
          <Heading size={"md"}  noOfLines={1} >{symbol}</Heading>
          <Text noOfLines={1} >{name}</Text>
          <Text noOfLines={1} >{price?`${currencySymbol}${price}`:"NA"}</Text>
        </VStack> 
        </Link>
        </>
  )
}

export default CoinCard
