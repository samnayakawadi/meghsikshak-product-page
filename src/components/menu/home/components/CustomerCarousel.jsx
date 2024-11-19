import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import customer_1 from "./images/customerCarousel/customer-1.png";
import customer_2 from "./images/customerCarousel/customer-2.png";
import customer_3 from "./images/customerCarousel/customer-3.png";

const CustomerCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const testimonials = [
        {
            img: customer_1,
            name: "Krishnakanth G",
            role: "Embedded Software Engineer, Visteon Corporation",
            quote: "I would like to express my thanks to the entire team for organizing such a wonderful course on Hardware. The course contents help me to understand the schematics easily and do my work without many issues."
        },
        {
            img: customer_2,
            name: "Archisman Shekhar",
            role: "Student, SJB Institute of Technology",
            quote: "I always appreciate the role of C-DAC in upskilling the student's talent. During the time of this pandemic, the C-DAC Mentor course was a great help for me to learn new things. Its student-friendly course benefits students to a great extent. Thanks for coming up with such ideas."
        },
        {
            img: customer_3,
            name: "Bharadwaj Tirumala",
            role: "Senior Technical Assistant, Indian Institute of Geomagnetism",
            quote: "What I liked most about the course was that the attention was given to the individual participant in the form of one-on-one online sessions for clarifying doubts. I thank C-DAC for offering this course and I look forward to joining such courses from C-DAC in the future."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        <div id="testimonials" className="bg-gradient-to-r from-blue-500 to-teal-500 py-12 sm:py-16 overflow-x-hidden">
            <div className="hero px-5 md:px-40">
                <div className="hero-content text-center text-white">
                    <div className="max-w-none">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Our Learners Are Saying</h1>
                        <p className="text-base sm:text-lg md:text-xl">All your feedback is heard to serve our users better</p>
                    </div>
                </div>
            </div>
            <div
                className="px-5 pt-10 md:pt-0 md:px-10 relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative w-full h-[500px] sm:h-[450px] md:h-[400px]">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform 
                                ${index === currentSlide ? 'translate-x-0 opacity-100' :
                                    index < currentSlide ? '-translate-x-full opacity-0' :
                                        'translate-x-full opacity-0'}`}
                        >
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 h-full">
                                <div className="w-full md:w-3/12 flex justify-center px-4 md:px-0">
                                    <img
                                        className="rounded-3xl max-w-xs w-full shadow-xl object-cover"
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className="w-full md:w-7/12 text-center md:text-left text-white px-4 md:px-0">
                                    <p className="text-xl sm:text-2xl font-semibold">{testimonial.name}</p>
                                    <p className="text-base sm:text-xl font-medium mb-2">{testimonial.role}</p>
                                    <p className="text-base sm:text-lg italic">"{testimonial.quote}"</p>
                                </div>
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
    );
};

export default CustomerCarousel;