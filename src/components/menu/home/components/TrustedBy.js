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

const TrustedBy = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20">
            <div className="text-center text-white px-6 md:px-20">
                <div className="text-4xl font-bold mb-4">Trusted By Prestigious Institutions</div>
                <p className="text-xl mb-12">Our goal is to ensure our clients are guided and empowered to automate learning processes.</p>
                <div className="carousel w-full">
                    <div id="clientSlide1" className="carousel-item relative w-full">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 w-full px-6">
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client1} alt="Biju Patnaik State Police Academy" />
                                <a href="http://bpspaorissa.gov.in/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Biju Patnaik State Police Academy, Orissa</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client2} alt="Bureau of Police Research & Development" />
                                <a href="https://eustad.in/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Bureau of Police Research & Development, MHA</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client3} alt="Centre for Development of Advanced Computing" />
                                <a href="https://cakes.cdac.in/MeghSikshak/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Centre for Development of Advanced Computing, MeitY</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client4} alt="Chariot Program" />
                                <a href="https://meghsikshak.in/chariot/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Chariot Program</a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                            <a href="#clientSlide2" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❮</a>
                            <a href="#clientSlide3" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❯</a>
                        </div>
                    </div>
                    <div id="clientSlide2" className="carousel-item relative w-full">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 w-full px-6">
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client5} alt="Centre for Materials for Electronics Technology" />
                                <a href="https://kaushalvikas.coeonewaste.com/MeghSikshak/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Centre for Materials for Electronics Technology, GoI</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client6} alt="National Defence University" />
                                <a href="https://mfa.gov.mn/en/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">National Defence University, Ulaanbaatar Mongolia</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client7} alt="Department of Post" />
                                <a href="https://dakshiksha.gov.in/DakShiksha/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Department of Post, India</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client8} alt="Kerala Police Academy" />
                                <a href="https://lms.keralapoliceacademy.gov.in/DKMS/" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">Kerala Police Academy, Thrissur</a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                            <a href="#clientSlide1" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❮</a>
                            <a href="#clientSlide3" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❯</a>
                        </div>
                    </div>
                    <div id="clientSlide3" className="carousel-item relative w-full">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 w-full px-6">
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client9} alt="MPA" />
                                <a href="https://www.mpa.com" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">MPA</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client10} alt="NSFU" />
                                <a href="https://www.nsfu.com" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">NSFU</a>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img width="150" src={client11} alt="PPA" />
                                <a href="https://www.ppa.com" target="_blank" rel="noreferrer" className="mt-2 text-sm text-white hover:text-teal-200 transition duration-300">PPA</a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                            <a href="#clientSlide2" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❮</a>
                            <a href="#clientSlide1" className="btn btn-circle text-white bg-indigo-500 hover:bg-indigo-600">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
