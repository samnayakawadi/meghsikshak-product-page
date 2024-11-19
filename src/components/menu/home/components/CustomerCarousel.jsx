import customer_1 from "./images/customerCarousel/customer-1.png";
import customer_2 from "./images/customerCarousel/customer-2.png";
import customer_3 from "./images/customerCarousel/customer-3.png";
import customer_4 from "./images/customerCarousel/customer-4.png";

const CustomerCarousel = () => {
    return (
        <div id="testimonials" className="bg-gradient-to-r from-blue-500 to-teal-500 py-16">
            <div className="hero px-5 md:px-40">
                <div className="hero-content text-center text-white">
                    <div className="max-w-none">
                        <h1 className="text-5xl font-bold mb-6">What Our Learners Are Saying</h1>
                        <p className="text-xl">All your feedback is heard to serve our users better</p>
                    </div>
                </div>
            </div>
            <div className="px-5 md:px-10">
                <div className="carousel w-full mt-8">
                    <div id="slide1" className="carousel-item relative w-full justify-center pt-12">
                        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16">
                            <div className="basis-full md:basis-3/12 px-6 md:px-0 flex justify-center">
                                <img className="rounded-3xl max-w-xs shadow-xl" src={customer_1} alt="Customer 1" />
                            </div>
                            <div className="basis-full md:basis-7/12 px-6 md:px-0 text-white">
                                <p className="text-2xl font-semibold">Krishnakanth G</p>
                                <p className="text-xl font-medium">Embedded Software Engineer, Visteon Corporation</p>
                                <br />
                                <p className="text-lg italic">"I would like to express my thanks to the entire team for organizing such a wonderful course on Hardware. The course contents help me to understand the schematics easily and do my work without many issues."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-8">
                            <a href="#slide4" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full justify-center pt-12">
                        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16">
                            <div className="basis-full md:basis-3/12 px-6 md:px-0 flex justify-center">
                                <img className="rounded-3xl max-w-xs shadow-xl" src={customer_2} alt="Customer 2" />
                            </div>
                            <div className="basis-full md:basis-7/12 px-6 md:px-0 text-white">
                                <p className="text-2xl font-semibold">Archisman Shekhar</p>
                                <p className="text-xl font-medium">Student, SJB Institute of Technology</p>
                                <br />
                                <p className="text-lg italic">"I always appreciate the role of C-DAC in upskilling the student's talent. During the time of this pandemic, the C-DAC Mentor course was a great help for me to learn new things. Its student-friendly course benefits students to a great extent. Thanks for coming up with such ideas."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-8">
                            <a href="#slide1" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full justify-center pt-12">
                        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16">
                            <div className="basis-full md:basis-3/12 px-6 md:px-0 flex justify-center">
                                <img className="rounded-3xl max-w-xs shadow-xl" src={customer_3} alt="Customer 3" />
                            </div>
                            <div className="basis-full md:basis-7/12 px-6 md:px-0 text-white">
                                <p className="text-2xl font-semibold">Bharadwaj Tirumala</p>
                                <p className="text-xl font-medium">Senior Technical Assistant, Indian Institute of Geomagnetism</p>
                                <br />
                                <p className="text-lg italic">"What I liked most about the course was that the attention was given to the individual participant in the form of one-on-one online sessions for clarifying doubts. I thank C-DAC for offering this course and I look forward to joining such courses from C-DAC in the future."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-8">
                            <a href="#slide2" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-indigo-500 hover:bg-indigo-600 text-white">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCarousel;
