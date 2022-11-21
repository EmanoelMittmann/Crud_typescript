import { useSelector } from "react-redux";
import { useState } from "react";
import { ITaskProps } from "../../../../react-app-env";
import { RootState } from "../../../../Redux/Store/store";
import ModalTask from "../../../molecules/Modal";
import ListTasks from "../../../organisms/ListTasks";

const Tasks = () => {
  const { entities }: any = useSelector<RootState>((states) => states.Modal);
  const [values, setValues] = useState<ITaskProps[]>([]);
  console.log("values: ", values);

  return (
    <>
      <ListTasks Entities={entities} />
      <ModalTask setValues={setValues} values={values} />
    </>
  );
};

export default Tasks;
