import * as C from './styles.js';
import { Link } from 'react-router-dom'

export const Product = ({ url, name, price }) => {

    return (

        <C.Li>
            <C.Div>
                <C.Img src={url} alt="imagem do produto"></C.Img>
            </C.Div>
            <C.ItemName >{name}</C.ItemName>
            <C.ItemPrice >{price}</C.ItemPrice>
        </C.Li>
    )
}

export default Product;
