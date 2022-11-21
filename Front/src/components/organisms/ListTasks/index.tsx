import { AddIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  WrapItem,
  Text,
  TableContainer,
  Thead,
  Table,
  Tr,
  Td,
  Th,
  Tbody,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch } from "react-redux";
import { ITaskProps } from "../../../react-app-env";
import { TaskModal } from "../../../Redux/Slice";
import NavBar from "../../molecules/Navbar";
import SideBar from "../../molecules/SideBar";

const Tasks = ({ Entities }: any) => {

  const dispatch = useDispatch()

  return (
    <>
      <SideBar />
      <NavBar />
      <Flex
        w="90%"
        h="4em"
        margin="auto"
        marginTop="1em"
        borderRadius="8px"
      >
        <WrapItem paddingTop="12px" alignContent="center">
          <EditIcon w="5em" h="2em" color="black" />
          <Text fontWeight="600" fontSize="20px" color="black">
            Tasks
          </Text>
        </WrapItem>
      </Flex>
      <Flex margin='auto' w='90%' h='4em' justifyContent='flex-end'>
        <Button leftIcon={<AddIcon/>} colorScheme='whatsapp' onClick={() => dispatch(TaskModal(true))}>Add</Button>
      </Flex>
      <TableContainer
        w="90%"
        margin="auto"
        bg="#ececee"
        borderRadius="8px"
        boxShadow={"1px 0px 10px gray"}
      >
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {Entities.map(
              ({ Id, Title, Description, Category }: ITaskProps) => (
                <Tr>
                  <Td>{String(Id)}</Td>
                  <Td>{Title}</Td>
                  <Td>{Description}</Td>
                  <Td>{Category.name}</Td>
                  <Td w='10'>
                    <Button leftIcon={<EditIcon/>} size='sm' colorScheme="yellow" color='white' marginRight='10px'>Edit</Button>
                    <Button leftIcon={<CloseIcon/>} size='sm' colorScheme="red">Remove</Button>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tasks;
