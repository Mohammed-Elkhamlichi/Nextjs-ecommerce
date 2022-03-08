import React from "react";

const Product = ({ product }) => {
    return (
        <article>
            <h1>title: {product.title}</h1>
        </article>
    );
};

export default Product;
