import logo from "./images/megh-logo.png";

const Navbar = ({ theme, setTheme }) => {
    return (
        <div>
            {/* Navbar with gradient background */}
            <div className="navbar bg-gradient-to-r from-indigo-600 to-purple-600 fixed w-full z-20 top-0 left-0 shadow-lg">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
                            <li>
                                <a href="#home" className="hover:text-indigo-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#statistics" className="hover:text-indigo-400">
                                    Utility Stats
                                </a>
                            </li>
                            <li>
                                <a href="#organizations" className="hover:text-indigo-400">
                                    Target Users
                                </a>
                            </li>
                            <li>
                                <a href="#highlights" className="hover:text-indigo-400">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-indigo-400">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#clients" className="hover:text-indigo-400">
                                    Clients
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-indigo-400">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-indigo-400">
                                    Get in Touch
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-indigo-400">
                                    Theme
                                    <svg
                                        className="fill-current text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-zinc-600 text-white">
                                    <li
                                        onClick={() => {
                                            setTheme("lofi");
                                        }}
                                    >
                                        <a>
                                            Light{" "}
                                            {theme === "lofi" && (
                                                <i className="fa-solid fa-circle-check text-indigo-400" />
                                            )}
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => {
                                            setTheme("business");
                                        }}
                                    >
                                        <a>
                                            Dark{" "}
                                            {theme === "business" && (
                                                <i className="fa-solid fa-circle-check text-indigo-400" />
                                            )}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tel:+919177669936" className="hover:text-indigo-400">
                                    Call Now
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <a className="ml-5 btn btn-ghost normal-case text-xl text-white">
                        {/* <img width="180" className="max-w-xs" src={logo} alt="Logo" /> */}
                        MeghSikshak
                    </a>
                </div>
                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        <li>
                            <a href="#home" className="text-white hover:text-indigo-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#statistics" className="text-white hover:text-indigo-400">
                                Utility Stats
                            </a>
                        </li>
                        <li>
                            <a href="#organizations" className="text-white hover:text-indigo-400">
                                Target Users
                            </a>
                        </li>
                        <li>
                            <a href="#highlights" className="text-white hover:text-indigo-400">
                                Overview
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="text-white hover:text-indigo-400">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#clients" className="text-white hover:text-indigo-400">
                                Clients
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="text-white hover:text-indigo-400">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-indigo-400">
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Theme and Call Actions on the Right */}
                <div className="navbar-end gap-3">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li>
                            <a
                                className="text-white hover:text-indigo-400"
                                onClick={() => {
                                    setTheme(theme === "lofi" ? "business" : "lofi");
                                }}
                            >
                                <svg
                                    className="fill-current text-white"
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
                            <a href="tel:+9182561076" className="text-white hover:text-indigo-400">
                                Call Now
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
