import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import { ICustomersProps } from "../../react-app-env";

const clients = createEntityAdapter()

const initialState = clients.getInitialState({
    client: [{
        Id: 1,
        avatar:'https://bit.ly/broken-link', 
        name: 'Emanoel Leffa',
        job: 'Developer',
        email:'emanoelmittmann@hotmail.com',
        phone:'51997235418'
    }] as ICustomersProps[]
})

export const StateClient = createSlice({
    name: "Client",
    initialState,
    reducers: {
        addClient: clients.addOne
    }
});

export const {addClient} = StateClient.actions