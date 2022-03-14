import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const addDataReducer=createSlice({
    name:'datas',
    initialState,
    reducers:{
        addDatas:(state,action)=>{
            state.push(action.payload)
            return state
        },
        removeData:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }


})

export const { addDatas, removeData } = addDataReducer.actions
export const reducer= addDataReducer.reducer