import { CloseIcon, DragHandleIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, WrapItem, Text, Button,Tbody,Thead, Tr, Table, Th, TableContainer, Td, Avatar} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { ICustomersProps } from '../../../react-app-env'
import { TaskModal } from '../../../Redux/Slice/Task'
import { RootState } from '../../../Redux/Store/store'
import NavBar from '../../molecules/Navbar'
import SideBar from '../../molecules/SideBar'

const ListClient = () => {
    const {client}:any = useSelector<RootState>(state => state.Client)
    const dispatch = useDispatch()
  return (
    <> 
        <NavBar/>
        <SideBar/>
        <Flex w="90%" h="4em" margin="auto" marginTop="1em" borderRadius="8px">
        <WrapItem paddingTop="12px" alignContent="center">
          <Text fontWeight="600" fontSize="20px" color="black">
            Customers
          </Text>
        </WrapItem>
      </Flex>
      <Flex margin="auto" w="90%" h="4em" justifyContent="flex-end">
        <Button
          leftIcon={<i className="bi bi-person"/>}
          colorScheme="whatsapp"
          onClick={() => dispatch(TaskModal(true))}
        >
          Cadastrar Novo
        </Button>
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
            <Tr >
              <Th>Name</Th>
              <Th>Job</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
              {client?.map(
                (client: ICustomersProps) => (
                  <Tr key={client?.Id} >
                    <Td fontWeight='600' display='flex' flexDirection='row' alignItems='center' gap='1em'>
                        <Avatar src={client.avatar}/>
                        <Text>{client?.name}</Text>
                    </Td>
                    <Td>{client?.job}</Td>
                    <Td>{client?.email}</Td>
                    <Td>{client?.phone}</Td>
                    <Td w="10" textAlign='center'>
                        <DragHandleIcon cursor='pointer'/>
                    </Td>
                  </Tr>
                )
              )}
          </Tbody>

        </Table>
      </TableContainer>

    </>
  )
}

export default ListClient 