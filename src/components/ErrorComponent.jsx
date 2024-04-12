import React from 'react'
import {Alert, AlertIcon} from '@chakra-ui/react';

const ErrorComponent = ({message}) => {
  return (
    <Alert status='error' position={"fixed"} bottom={"8"} left={"50%"} transform={"translateX(-50%)"} w={"container.lg"} fontWeight={700} >
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent
