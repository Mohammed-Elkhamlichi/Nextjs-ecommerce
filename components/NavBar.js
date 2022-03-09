import Link from "next/link";
import React from "react";

const Nav = () => {
    const navLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Products", link: "/products" },
        { id: 3, name: "Contact US", link: "/contact-us" },
        { id: 4, name: "About US", link: "/about-us" },
    ];
    return (
        <>
            <nav
                style={{ backgroundColor: "#541C94" }}
                className='flex shadow-2xl shadow-fuchsia-800  justify-between items-center py-6'
            >
                <div
                    style={{
                        color: "#e08604",
                        fontWeight: "bold",
                        fontSize: "1.8rem",
                    }}
                    className='px-5 animate-bounce'
                >
                    E-Commerce
                </div>
                <ul className='flex' style={{ color: "#e08604" }}>
                    {navLinks.map((link) => {
                        return (
                            <li
                                style={{ fontSize: "1.3rem" }}
                                className='px-5 hover:animate-pulse'
                                key={link.id}
                            >
                                <Link href={link.link}>
                                    <a>{link.name}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
