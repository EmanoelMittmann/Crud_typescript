import {createSlice} from '@reduxjs/toolkit'
import { ITaskProps } from '../../react-app-env'

const initialState = {
    entities: [
        {Id: 1 , Title: 'Carrots', Description:'cut carrots', Category:{id:1, name:'cooking'}},
        {Id: 2 , Title: 'Bake', Description:'To Bake', Category:{id:1, name:'cooking'}},
        {Id: 3 , Title: 'Shirt', Description:'wash t-shirt', Category:{id:2, name:'wash'}},
        {Id: 4 , Title: 'Shoes', Description:'wash shoes', Category:{id:2, name:'wash'}},
        {Id: 5 , Title: 'Repair', Description:'Repair, my old car', Category:{id:3, name:'Mecanic'}},
        {Id: 6 , Title: 'Nothing', Description:'Make Nothing', Category:{id:3, name:'Never'}}
    ] as ITaskProps[],
    isOpen: false,
    ModalTask: Boolean
}

export const StateModal = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        openModal: (state, {payload}) => {
            state.isOpen = payload
        },
        addModal: (state, {payload}) => {
            state.entities.push(payload)
        },
        TaskModal: (state, {payload}) => {
            state.ModalTask = payload
        }
    }
})

export const {openModal,addModal,TaskModal} = StateModal.actions