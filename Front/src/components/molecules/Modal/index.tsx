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
  Select,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoriesProps } from "../../../react-app-env";
import { addModal, TaskModal } from "../../../Redux/Slice/Task";
import { RootState } from "../../../Redux/Store/store";

const ModalTask = () => {
  const { ModalTask, categories}: any = useSelector<RootState>(
    (state) => state.Modal
  );
  const dispatch = useDispatch();

  const dataFromForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {} as any;
    Array.prototype.forEach.call(
      e.target.elements,
      (element: HTMLInputElement) => {
        if (element.name) data[element.name] = element.value;
      }
    );
    return dispatch(addModal(data));
  };

  return (
    <>
      <Modal
        isOpen={ModalTask}
        onClose={() => {
          dispatch(TaskModal(false));
        }}
        size="2xl"
      >
        <ModalOverlay />
        <form onSubmit={dataFromForm}>
          <ModalContent h="30em">
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={55}>
                <Input placeholder="Title" size="md" name="Title" />
                <Input placeholder="Description" size="md" name="Description" />
                <Select placeholder="Category name" size="md" name="Category">
                  {categories.map((category: CategoriesProps) => (
                    <option key={category.id} value={JSON.stringify(category)}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="teal"
                type="submit"
                onClick={() => dispatch(TaskModal(false))}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ModalTask;
