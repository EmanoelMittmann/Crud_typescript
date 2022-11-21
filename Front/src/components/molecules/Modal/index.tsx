import {
  Button,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  ModalBody,
  Stack,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ITaskProps } from "../../../react-app-env";
import { addModal, TaskModal } from "../../../Redux/Slice";
import { RootState } from "../../../Redux/Store/store";

const ModalTask = ({ values, setValues }: any) => {
  const { ModalTask }: any = useSelector<RootState>((state) => state.Modal);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        isOpen={ModalTask}
        onClose={() => { 
            dispatch(TaskModal(false)) 
            setValues([])
        }}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent h="30em">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={50}>
              <Input
                placeholder="Title"
                size="md"
                onBlur={(e: ChangeEvent<HTMLInputElement>) =>
                  setValues([...values, { Title: e.target.value }])
                }
              />
              <Input
                placeholder="Description"
                size="md"
                onBlur={(e: ChangeEvent<HTMLInputElement>) =>
                  setValues([...values, { Description: e.target.value }])
                }
              />
              <Input
                placeholder="Category name"
                size="md"
                onBlur={(e: ChangeEvent<HTMLInputElement>) =>
                  setValues([...values, { Category: { name: e.target.value } }])
                }
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={() => dispatch(addModal(values))}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalTask;
