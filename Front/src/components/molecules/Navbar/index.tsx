import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../Redux/Slice/Task";

const NavBar = () => {
    
  const dispatch = useDispatch()

  return (
    <>
      <Flex
        display="flex"
        bg="blackAlpha.100"
        h="6em"
        align="center"
        justify="space-evenly"
      >
        <Box w="60%">
          <HamburgerIcon
            onClick={() => dispatch(openModal(true))}
            cursor="pointer"
          />
        </Box>
        <Flex w="20%" justify="space-around">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </Flex>
        <WrapItem>
          <Avatar size="lg" name="Emanoel leffa" />
        </WrapItem>
      </Flex>
    </>
  );
};

export default NavBar;
