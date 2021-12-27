import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { productsAsync, selectProducts } from '../../features/products/productSlice.js';
import { changeProduct } from "../../features/sidebar/sidebarSlice";


export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch(productsAsync()), []);
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Products</FormLabel>
            <RadioGroup aria-label="product" name="radio-buttons-group" defaultValue="none">
                <FormControlLabel value="none" control={<Radio onClick={() => dispatch(changeProduct({ product: undefined }))} />} label="None" />
                {products.map(product => (
                    <FormControlLabel key={product._id} value={product._id} control={<Radio onClick={() => dispatch(changeProduct({ product }))} />} label={product.name} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
