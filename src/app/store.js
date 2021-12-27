import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productSlice from '../features/products/productSlice';
import sidebarSlice from '../features/sidebar/sidebarSlice';

export const store = configureStore({
	reducer: {
		sidebarSlice,
		productSlice
	},
}, applyMiddleware(thunk))
