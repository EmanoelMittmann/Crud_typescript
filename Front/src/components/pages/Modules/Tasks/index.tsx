import { useSelector } from "react-redux";
import { useState } from "react";
import { ITaskProps } from "../../../../react-app-env";
import { RootState } from "../../../../Redux/Store/store";
import ModalTask from "../../../molecules/Modal";
import ListTasks from "../../../organisms/ListTasks";

const Tasks = () => {
  return (
    <>
      <ListTasks/>
      <ModalTask/>
    </>
  );
};

export default Tasks;
