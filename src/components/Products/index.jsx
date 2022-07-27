import { useState } from 'react';
import Product from '../Product';
import * as C from './styles.js';

export const Products = () => {
    const [search, setSearch] = useState("");

    var products = [
        {
            code: 1,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'carrinho',
            price: 'R$15,00'
        },
        {
            code: 2,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'robô',
            price: 'R$15,00'
        },
        {
            code: 3,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'bola',
            price: 'R$15,00'
        },
        {
            code: 4,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'dominó',
            price: 'R$15,00'
        },
        {
            code: 5,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'dado',
            price: 'R$15,00'
        },
        {
            code: 6,
            url: 'https://i.imgur.com/jOj0Evk.jpg',
            name: 'cubo',
            price: 'R$15,00'
        }

    ]
    return (
        <C.Section>
            <C.Header>
                <C.Form>
                    <C.Input
                        className="input-search"
                        placeholder="Buscar..."
                        type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </C.Form>
            </C.Header>
            <C.Ul>
                {!search ? products.map(e => {
                    return (
                        <Product key={e.code} url={e.url} name={e.name} price={e.price} />
                    )
                }) :
                    products.map(e => {
                        if (e.name.match(search)) {
                            return (
                                <Product key={e.code} url={e.url} name={e.name} price={e.price} />
                            )
                        }
                        return '';
                    })
                }
            </C.Ul>
        </C.Section>
    )
}

export default Products