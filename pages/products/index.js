import React from "react";
import { loadPosts } from "../../lib/load-posts";
import styles from "../../styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Products = ({ products }) => {
  return (
    <div className='flex flex-col  md:flex-row flex-wrap my-8'>
      {products.map((product) => {
        console.log(product);
        const { id, title, image, price, category } = product;
        return (
          <>
            <article
              style={{ background: "#e08604" }}
              key={id}
              className='flex shadow-2xl shadow-fuchsia-900 flex-col w-72 h-80 rounded-2xl mx-auto my-4'
            >
              <div className='relative h-52 w-72 p-0 m-0 rounded-2xl '>
                <Image
                  src={image}
                  alt='product image'
                  layout='fill'
                  className='object-fil rounded-tl-2xl rounded-tr-2xl'
                />
                <span className='after:block'>
                  <span
                    className='relative font-bold animate-pulse rounded rounded-tl-2xl mt-2 px-2 py-1'
                    style={{
                      color: "#440091",
                      background: "#e08604",
                    }}
                  >
                    SOLD 50%
                  </span>
                </span>
              </div>

              <div className='flex flex-col items-center p-2'>
                <div
                  className={`block before:content-["${category}"] before:bg-yellow-800 before:text-white before:px-2 before:py-1 before:rounded before:absolute before:-mt-11  before:opacity-60 font-mono text-md px-3 py-1 flex-1 text-center `}
                  style={{ color: "#440091" }}
                >
                  {title}
                </div>
                <div className='flex justify-between  items-center mt-5'>
                  <div
                    className='rounded-lg w-30 px-2 py-1 m-1 text-lg opacity-70 font-mono text-md items-center text-center'
                    style={{
                      background: "#440091",
                      color: "#e08604",
                    }}
                  >
                    {price} $
                  </div>
                  <div
                    className='rounded-lg w-30 px-4 py-1  m-1 font-mono opacity-70 text-md items-center text-center'
                    style={{
                      background: "#440091",
                      color: "#e08604",
                    }}
                  >
                    <Link href={`/products/${id}`}>
                      <a>
                        <ShoppingCartIcon />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const products = await loadPosts();
  return {
    props: { products },
    revalidate: 10,
  };
};

export default Products;
