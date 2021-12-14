import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch } from "react-redux";
import { changeProduct } from "../../features/sidebar/sidebarSlice";

const products = [
    { id: 1, name: "Product 1", layer: 'arm_1' },
    { id: 2, name: "Product 2", layer: 'arm_2' },
    { id: 3, name: "Product 3", layer: 'arm_3' },
    { id: 4, name: "Product 4", layer: 'arm_4' },
];

export default function Products() {
    const dispatch = useDispatch();
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Products</FormLabel>
            <RadioGroup aria-label="product" name="radio-buttons-group" defaultValue="none">
                <FormControlLabel value="none" control={<Radio onClick={() => dispatch(changeProduct({ product: undefined }))} />} label="None" />
                {products.map(product => (
                    <FormControlLabel key={product.id} value={product.id} control={<Radio onClick={() => dispatch(changeProduct({ product }))} />} label={product.name} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
