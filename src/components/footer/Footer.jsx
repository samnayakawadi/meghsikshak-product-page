import React from 'react';
import cdac from "./images/cdac.png";

const Footer = () => {
    return (
        <footer className="relative">
            {/* Background with matching gradient */}
            <div className="bg-gradient-to-r from-purple-800 via-fuchsia-700 to-pink-700 shadow-lg">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 py-12">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img
                                src={cdac}
                                width="120"
                                alt="CDAC Logo"
                                className="rounded-full shadow-xl border-4 border-white/80 hover:scale-105 transition-transform duration-300"
                            />
                            {/* Subtle glow effect */}
                            <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl -z-10"></div>
                        </div>
                    </div>

                    {/* Organization Name */}
                    <div className="text-center mt-8 space-y-3">
                        <h2 className="font-bold text-2xl text-white tracking-wide">
                            Center for Development of Advanced Computing (C-DAC)
                        </h2>
                        <p className="text-white/80 text-sm">
                            Empowering Technology, Transforming Lives
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex justify-center gap-6">
                        <a
                            href="https://www.facebook.com/CDACINDIA"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <i className="fa-brands fa-facebook text-3xl"></i>
                        </a>
                        <a
                            href="https://twitter.com/cdacindia"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label="Twitter"
                        >
                            <i className="fa-brands fa-twitter text-3xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/cdacindia/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin text-3xl"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/c/CDACOfficial"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube text-3xl"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 text-center">
                        <p className="text-white/70 text-sm">
                            Copyright © {new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;