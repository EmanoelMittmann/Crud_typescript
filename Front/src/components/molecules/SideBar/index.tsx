import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../Redux/Slice";
import { RootState } from "../../../Redux/Store/store";

const SideBar = () => {
  const { isOpen }: any = useSelector<RootState>((state) => state.Modal);
  console.log("Open: ", isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => dispatch(openModal(false))}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box
            w="100%"
            h="10em"
            display="flex"
            justifyContent="center"
            alignContent="center"
            paddingTop="3.5em"
          >
            <WrapItem>
              <Avatar
                size="lg"
                name="Emanoel leffa"
                src="https://bit.ly/dan-abramov"
              />
              <Text fontWeight="700" paddingLeft="10px" paddingTop="1.4em">
                Emanoel Leffa
              </Text>
            </WrapItem>
          </Box>

          <DrawerCloseButton />
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px", color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Dashboard
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<EditIcon/>}
            _hover={{ background: "gray", margin: "5px",color:'white' }}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Tasks
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white' }}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Customers
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Analitics
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Leads
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Projects
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Reports
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            _hover={{ background: "gray", margin: "5px",color:'white'}}
            colorScheme="white"
            color='black'
            borderRadius="none"
          >
            Logout
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
