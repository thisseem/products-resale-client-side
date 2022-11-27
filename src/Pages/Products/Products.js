import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center font-bold '>Our Products</h2>
            <div className=' grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;