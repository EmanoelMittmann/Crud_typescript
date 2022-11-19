import { Flex, Box} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store/store";
import SideBar from "../../molecules/SideBar";
import NavBar from "../../molecules/Navbar";


const Home = () => {
  return (
    <>
      <SideBar />
      <NavBar/>
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
