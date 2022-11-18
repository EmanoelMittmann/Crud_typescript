import React from "react";
import { Input, Box, FormControl, Button,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <Box
      w="40%"
      h="25em"
      p={4}
      bg="blackAlpha.400"
      margin="auto"
      position="relative"
      top="10em"
      borderRadius='1em'
      boxShadow='dark-lg'
      rounded='md'
    >
      <FormControl
        w="70%"
        h='25em'
        m="auto"
        display="flex"
        flexDirection="column"
        gap='1em'
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize='3xl' fontWeight='600'color='white'>CRM Login</Text>
        <Input bg="white" size="lg" placeholder="Email" mb="2em" />
        <Input bg="white" size="lg" placeholder="Password" mb="2em" />
        <Button colorScheme="blue" size="md" w="7em" onClick={() => navigate('/home')}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
