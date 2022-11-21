import React from "react";

export default function Header() {
    return (
        <>
            <ul>
                <li>
                    <a to="/">Home</a>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}