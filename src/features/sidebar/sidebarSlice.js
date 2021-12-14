import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: undefined,
    docked: true,
    open: true,
    transitions: true,
    touch: true,
    shadow: true,
    pullRight: false,
    touchHandleWidth: 20,
    dragToggleDistance: 30
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        changeProduct: (state, action) => {
            state.product = action.payload.product;
        }
    },
})

export const selectProduct = (state) => state.sidebarReducer.product;
export const selectDocked = (state) => state.sidebarReducer.docked;
export const { changeProduct } = sidebarSlice.actions

export default sidebarSlice.reducer
