import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ModalProps } from '../../react-app-env'

export const StateModal = createSlice({
    name: 'Modal',
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal: (state, {payload}) => {
            state.isOpen = payload
        }
    }
})

export const {openModal} = StateModal.actions