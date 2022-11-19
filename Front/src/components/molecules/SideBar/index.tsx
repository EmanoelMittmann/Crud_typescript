import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../Redux/Slice";
import { RootState } from "../../../Redux/Store/store";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { isOpen }: any = useSelector<RootState>((state) => state.Modal);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
            leftIcon={<i className="bi bi-house"></i>}
            _hover={{ background: "red", color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
            onClick={() => navigate('/home')}
          >
            Dashboard
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<EditIcon/>}
            _hover={{ background: "red",color:'white' }}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
            onClick={() => navigate('/tasks')}
          >
            Tasks
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<i className="bi bi-person"></i>}
            _hover={{ background: "red",color:'white' }}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
          >
            Customers
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<i className="bi bi-bar-chart-fill"></i>}
            _hover={{ background: "red",color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
          >
            Analitics
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<i className="bi bi-person-lines-fill"></i>}
            _hover={{ background: "red",color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
          >
            Leads
          </Button>
          <Button
            size="lg"
            leftIcon={<i className="bi bi-columns-gap"></i>}
            transition="all 300ms ease"
            _hover={{ background: "red",color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
          >
            Projects
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<i className="bi bi-flag-fill"></i>}
            _hover={{ background: "red",color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
          >
            Reports
          </Button>
          <Button
            size="lg"
            transition="all 300ms ease"
            leftIcon={<i className="bi bi-door-closed"></i>}
            _hover={{ background: "red",color:'white'}}
            _focusWithin={{
              borderLeft:'white 10px solid',
              background:'red',
              color:'white'
            }}
            colorScheme="white"
            color='black'
            margin='5px'
            borderRadius="none"
            onClick={() => navigate('/')}
          >
            Logout
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
