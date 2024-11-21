import client1 from "./images/clients/bpsa.png";
import client2 from "./images/clients/brpd.png";
import client3 from "./images/clients/cdac.png";
import client4 from "./images/clients/chariot.png";
import client5 from "./images/clients/cmet.png";
import client6 from "./images/clients/dcu.png";
import client7 from "./images/clients/dop.png";
import client8 from "./images/clients/kepa.png";
import client9 from "./images/clients/mpa.png";
import client10 from "./images/clients/nsfu.png";
import client11 from "./images/clients/ppa.png";
import client12 from "./images/clients/cme.png";
import client13 from "./images/clients/muhs.png";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrustedBy = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const clients = [
        [
            {
                img: client1,
                name: "Biju Patnaik State Police Academy",
                url: "https://bpspaeprakshikshyan.in/",
                fullName: "Biju Patnaik State Police Academy, Bhubaneswar, Odisha"
            },
            {
                img: client2,
                name: "Bureau of Police Research & Development",
                url: "https://bprd.nic.in/",
                fullName: "Bureau of Police Research & Development, Ministry of Home Affairs, Government of India"
            },
            {
                img: client3,
                name: "Centre for Development of Advanced Computing",
                url: "https://cakes.cdac.in",
                fullName: "Centre for Development of Advanced Computing, MeitY, Government of India"
            },
            {
                img: client4,
                name: "Chariot Program",
                url: "https://meghsikshak.in/chariot/",
                fullName: "Centre for Development of Advanced Computing, Hyderabad, MeitY, Government of India"
            }
        ],
        [
            {
                img: client5,
                name: "Centre for Materials for Electronics Technology",
                url: "https://kaushalvikas.coeonewaste.com/MeghSikshak/",
                fullName: "Centre for Materials for Electronics Technology, MeitY, Government of India"
            },
            {
                img: client6,
                name: "National Defence University",
                url: "https://mfa.gov.mn/en/",
                fullName: "National Defence University, Ulaanbaatar Mongolia"
            },
            {
                img: client7,
                name: "Department of Post",
                url: "https://www.indiapost.gov.in/",
                fullName: "Department of Posts, Ministry of Communications, Government of India"
            },
            {
                img: client8,
                name: "Kerala Police Academy",
                url: "https://lms.keralapoliceacademy.gov.in/DKMS/",
                fullName: "Kerala Police Academy, Thrissur, Kerala"
            },
        ],
        [
            {
                img: client9,
                name: "Maharashtra Police Academy",
                url: "https://eacademy.mpanashik.gov.in/",
                fullName: "Maharashtra Police Academy, Nashik, Maharashtra"
            },
            {
                img: client10,
                name: "National Forensic Sciences University",
                url: "https://nfsu.mha.gov.in/",
                fullName: "National Forensic Sciences University, Ministry of Home Affairs, Government of India"
            },
            {
                img: client11,
                name: "Punjab Police Academy",
                url: "https://etrainingppa.punjabpolice.gov.in/",
                fullName: "Punjab Police Academy, Phillaur, Punjab"
            },
            {
                img: client12,
                name: "College of Military Engineering, Pune, Indian Army",
                url: "#",
                fullName: "College of Military Engineering, Pune, Indian Army"
            }
        ],
        [
            {
                img: client13,
                name: "Maharashtra University of Health Sciences, Nashik",
                url: "https://eprabodhini.lms.muhs.ac.in/",
                fullName: "Maharashtra University of Health Sciences, Nashik, DMED, Government of Maharashtra"
            }
        ]
    ];

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentSlide((prev) => (prev + 1) % clients.length);
    //     }, 5000);

    //     return () => clearInterval(timer);
    // }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % clients.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        }
        if (touchStart - touchEnd < -75) {
            prevSlide();
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-12 sm:py-16 md:py-16">
            <div className="container mx-auto text-center text-white">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-6 md:px-20">
                    Trusted By Prestigious Institutions
                </div>
                <p className="text-sm sm:text-base md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-6 md:px-20">
                    Our goal is to ensure our clients are guided and empowered to automate learning processes.
                </p>

                <div
                    className="relative overflow-hidden w-full mx-auto px-5 md:px-32"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative w-full min-h-[400px] sm:min-h-[250px] md:min-h-[300px]">
                        {clients.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`absolute w-full transition-all duration-500 ease-in-out transform 
                                    ${slideIndex === currentSlide ? 'translate-x-0 opacity-100' :
                                        slideIndex < currentSlide ? '-translate-x-full opacity-0' :
                                            'translate-x-full opacity-0'}`}
                            >
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-xl:gap-4 justify-items-center items-start">
                                    {slide.map((client, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center w-full max-w-[200px] transform transition-transform duration-300"
                                        >
                                            <div className="bg-white/80 rounded-lg p-4 sm:p-6 backdrop-blur-sm w-full flex justify-center items-center">
                                                <img
                                                    src={client.img}
                                                    alt={client.name}
                                                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                                                />
                                            </div>
                                            <a
                                                href={client.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-2 sm:mt-4 text-xs sm:text-sm text-white hover:text-teal-200 transition duration-300 text-center line-clamp-2"
                                            >
                                                {client.fullName}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                        bg-white/10 hover:bg-white/20 text-white rounded-full 
                        p-1 sm:p-2 backdrop-blur-sm transition-all duration-300 
                        hidden sm:block"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                        bg-white/10 hover:bg-white/20 text-white rounded-full 
                        p-1 sm:p-2 backdrop-blur-sm transition-all duration-300 
                        hidden sm:block"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;