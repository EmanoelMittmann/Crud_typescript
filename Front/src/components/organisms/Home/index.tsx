import { Flex, Box, Text, WrapItem, Avatar } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../Redux/Slice";
import { RootState } from "../../../Redux/Store/store";
import SideBar from "../../molecules/SideBar";

const Home = () => {
  const isOpen = useSelector<RootState>((state) => state.Modal);
  const dispatch = useDispatch();

  return (
    <>
      <SideBar />
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
              <Avatar
                size="lg"
                name="Emanoel leffa"
              
              />
        </WrapItem>
      </Flex>
      <Flex justify="center">
        <Box
          w="99%"
          h="20em"
          bg="blackAlpha.100"
          margin="0.5em"
          borderRadius="10px"
          boxShadow="lx"
          rounded="md"
        ></Box>
      </Flex>
      <Flex justify="center">
        <Box
          w="60%"
          h="35em"
          bg="blackAlpha.100"
          margin="0.5em"
          borderRadius="10px"
          boxShadow="sm"
          rounded="md"
        ></Box>
        <Box
          w="40%"
          h="35em"
          bg="blackAlpha.100"
          margin="0.5em"
          borderRadius="10px"
          boxShadow="sm"
          rounded="md"
          justifyContent="center"
          alignItems="center"
        ></Box>
      </Flex>
      <Flex justify="center">
        <Box
          w="100%"
          h="18em"
          bg="blackAlpha.100"
          margin="0.5em"
          borderRadius="10px"
          boxShadow="sm"
          rounded="md"
          justifyContent="center"
          alignItems="center"
        ></Box>
      </Flex>
    </>
  );
};

export default Home;
