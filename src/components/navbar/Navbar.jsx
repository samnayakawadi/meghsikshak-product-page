/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import logo from "./images/megh-logo-v2.png";

const Navbar = () => {
    // Local state for theme and menu items
    const [theme, setTheme] = useState("lofi"); // Default theme
    const menuItems = [
        { name: "Home", href: "#home" },
        // { name: "Utility Stats", href: "#statistics" },
        { name: "Target Sectors", href: "#organizations" },
        { name: "Platform Features", href: "#highlights" },
        { name: "Why Choose Us?", href: "#features" },
        { name: "Clients", href: "#clients" },
        // { name: "Testimonials", href: "#testimonials" },
        { name: "Get in Touch", href: "#contact" },
    ];

    const [isGrayScale, setIsGrayScale] = useState(false)

    const applyGrayScaleHandler = () => {
        document.body.style.filter = isGrayScale ? 'grayscale(100%)' : 'none';
    }

    useEffect(() => {
        applyGrayScaleHandler()
    }, [isGrayScale])

    return (
        <div data-theme={theme}>
            {/* Navbar with gradient background */}
            <div className="navbar bg-gradient-to-r from-gray-50 to-gray-50 md:to-gray-50 text-black fixed w-full z-20 top-0 left-0 shadow-lg">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Logo */}
                    <span className="hidden lg:flex">
                        <a href="#" className="md:ml-5 btn btn-ghost normal-case text-xl text-black">
                            <img width="180" className="max-w-xs" src={logo} alt="Logo" />
                        </a>
                    </span>

                </div>

                <div className="navbar-center flex lg:hidden">
                    <a href="#" className="md:ml-5 btn btn-ghost normal-case text-xl text-black">
                        <img width="180" className="max-w-xs max-sm:scale-75" src={logo} alt="Logo" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 space-x-6 hover:cursor-pointer">
                        {menuItems.map((item, index) => (
                            <li key={index} className=" ">
                                <a href={item.href} className="p-3 hover:bg-gray-400 hover:text-white">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Theme and Call Actions on the Right */}
                <div className="navbar-end gap-3 max-sm:gap-0">
                    <ul className="px-1 flex gap-3 max-sm:gap-0 max-sm:mr-0 md:mr-5">
                        {/* <li>
                            <a
                                className="text-black"
                                onClick={() => {
                                    setTheme(theme === "lofi" ? "business" : "lofi");
                                }}
                            >
                                <svg
                                    className="fill-current text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                                Theme
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="https://wa.link/kjwgg3"
                                target="_blank"
                                className="text-black hover:cursor-pointer hover:bg-gray-400 focus:bg-white p-3 max-sm:p-1 flex items-center justify-center"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-whatsapp text-lg sm:scale-150 text-green-500"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-black hover:cursor-pointer hover:bg-gray-400 p-3 max-sm:p-1 focus:bg-white flex items-center justify-center"
                                rel="noreferrer"
                                onClick={() => { setIsGrayScale(prevState => !prevState) }}
                            >
                                <i className="fa-solid fa-adjust text-lg sm:scale-150 text-gray-500"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
