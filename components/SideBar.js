import React from "react";
import { loadPosts } from "../lib/load-posts";

const SideBar = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                const { id, title, price, image } = product;
                return <div key={id}>{product.title}</div>;
            })}
        </div>
    );
};



export default SideBar;
