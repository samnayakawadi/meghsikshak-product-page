import getInTouchImage from "./images/getInTouch/contact-trans.png";
import GetInTouchModal from "./modal/GetInTouchModal";

const GetInTouch = () => {
    return (
        <div className="px-0 sm:px-1 md:px-5 lg:px-20 xl:px-40 2xl:px-80 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500">
            <GetInTouchModal />
            <div className=" rounded-3xl overflow-hidden transition-transform transform">
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center">
                    <div className="basis-full md:basis-7/12 p-10 md:pl-1 text-white">
                        <h1 className="text-5xl font-extrabold leading-tight text-center">Serving Our Customers</h1>
                        <p className="pt-6 text-lg font-light opacity-90 text-center">
                            We want to give consumers a first-rate onboarding experience so they can get the most out of MeghSikshak.
                            Customer service is something we work to include in every aspect of our business at MeghSikshak.
                        </p>
                        <div className="text-center">
                            <label
                                htmlFor="getInTouchModal"
                                className="btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-6 normal-case px-8 text-lg rounded-full transition-transform transform hover:scale-110"
                            >
                                Get in Touch
                            </label>
                        </div>
                    </div>
                    <div className="basis-full md:basis-5/12 flex flex-row justify-center items-center md:p-10">
                        <img
                            className="rounded-xltransform transition-all w-80"
                            src={getInTouchImage}
                            alt="Get In Touch"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
