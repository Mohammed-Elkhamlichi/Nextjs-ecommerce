import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='this is an E-Commerce website to buying and selling product online.'
                />
                <meta
                    name='keywords'
                    content='E-commerce, online, perfect, 2022'
                />
                <title>E-Commerce WebSite</title>
            </Head>
            <Header />
            <div>{children}</div>

            <Footer />
        </>
    );
};

export default Layout;
