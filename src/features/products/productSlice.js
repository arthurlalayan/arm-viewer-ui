import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './productsAPI';

const initialState = {
    products: [],
    status: 'idle',
};

export const productsAsync = createAsyncThunk(
    'load/products',
    async () => {
      const response = await loadProducts();
      return response.data;
    }
  );

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(productsAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(productsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products = action.payload;
          });
      },
});

export const selectProducts = (state) => state.productSlice.products;

export default productSlice.reducer;
