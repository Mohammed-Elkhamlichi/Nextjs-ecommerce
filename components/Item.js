import React from "react";
import Image from "next/image";

const Product = ({ product }) => {
    const { id, title, description, category, image, price } = product;
    return (
        <main>
            <div>
                <h1>title</h1>
            </div>
            <div className='relative w-1/2 h-80'>
                <Image src={image} layout='fill' alt='product image' />
            </div>
            <div>{description}</div>
        </main>
    );
};

export default Product;
