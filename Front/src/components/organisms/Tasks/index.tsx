import { EditIcon } from "@chakra-ui/icons";
import { Avatar, Flex, WrapItem, Text } from "@chakra-ui/react";
import NavBar from "../../molecules/Navbar";
import SideBar from "../../molecules/SideBar";

const Tasks = () => {
  return (
    <>
      <SideBar />
      <NavBar />
      <Flex
        bg="#ececee"
        w="98%"
        h="4em"
        margin="auto"
        marginTop="1em"
        boxShadow='1px 0px 10px gray'
        borderRadius="8px"
      >
        <WrapItem paddingTop='12px' alignContent='center'>
            <EditIcon w='5em' h='2em' color='white' />
            <Text fontWeight='600' fontSize='20px' color='white'>Tasks </Text>
        </WrapItem>
      </Flex>
      
    </>
  );
};

export default Tasks;
