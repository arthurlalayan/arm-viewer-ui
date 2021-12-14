import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch } from "react-redux";
import { changeProduct } from "../../features/sidebar/sidebarSlice";

export default function Products() {
    const dispatch = useDispatch();
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Products</FormLabel>
            <RadioGroup aria-label="product" name="radio-buttons-group" defaultValue="none">
                <FormControlLabel value="none" control={<Radio onClick={() => dispatch(changeProduct({ product: undefined }))} />} label="None" />
                <FormControlLabel value="product_1" control={<Radio onClick={() => dispatch(changeProduct({ product: { id: 1, name: 'Product 1', layer: 'arm' } }))} />} label="Product 1" />
                {/* <FormControlLabel value="product_2" control={<Radio onClick={() => dispatch(changeProduct({ product: { id: 2, name: 'Product 2' } }))} />} label="Product 2" /> */}
            </RadioGroup>
        </FormControl>
    );
}
