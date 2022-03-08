import React from "react";
import { loadPosts } from "../../lib/load-posts";
import Item from "../../components/Item";

const Product = ({ product }) => {
    return <Item product={product} />;
};

// fetching all posts
export const getStaticPaths = async () => {
    const products = await loadPosts();
    const paths = await products.map((product) => ({
        // the id shpuld be String
        params: {
            id: String(product.id),
        },
    }));
    return { paths, fallback: false };
};

// fetching just one product
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    if (!res.ok) {
        throw new Error(
            `Failed to fetch products, received status ${res.status}`
        );
    }
    return { props: { product }, revalidate: 10 };
};

export default Product;
