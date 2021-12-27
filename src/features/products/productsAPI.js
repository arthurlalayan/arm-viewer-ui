import axiosClient from '../../util/axiosClient';

export function loadProducts() {
    return axiosClient.get('/products');
}