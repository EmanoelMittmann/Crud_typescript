import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit";
import { CategoriesProps, ITaskProps } from "../../react-app-env";

const initialState = {
  categories: [
    { id: 1, name: "cooking" },
    { id: 2, name: "wash" },
    { id: 3, name: "Mecanic" },
  ] as CategoriesProps[],
  entities: [
    {
      Id: 1,
      Title: "Carrots",
      Description: "cut carrots",
      Category: { id: 1, name: "cooking" },
    },
  ] as ITaskProps[],
  isOpen: false,
  ModalTask: false,
};

export const StateModal = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = payload;
    },
    addModal: (state, { payload }) => {
      const count = state.entities.length;
      if(count > 0){
        const lastId = state.entities[count - 1].Id;
        const newId = lastId + 1;
        payload["Id"] = newId;
        payload["Category"] = JSON.parse(payload.Category);
        state.entities.push(payload);
      }else{
        payload["Id"] = 1;
        payload["Category"] = JSON.parse(payload.Category);
        state.entities.push(payload);
      }
    },
    TaskModal: (state, { payload }) => {
      state.ModalTask = payload;
    },
    deleteTask: (state, action) => {

      return {
        ...state,
        entities: current(state.entities).filter(task => task.Id !== action.payload)
      }
    },
  },
});

export const { openModal, addModal, TaskModal, deleteTask } =
  StateModal.actions;