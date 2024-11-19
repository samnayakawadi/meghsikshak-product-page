import cloud from "./images/highlights/cloud.png";
import compliant from "./images/highlights/compliant.png";
import edit from "./images/highlights/edit.png";
import integrate from "./images/highlights/integrate.png";
import interfaceImage from "./images/highlights/interface.png";
import secure from "./images/highlights/secure.png";

const Features = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 py-10">
            <div className="flex flex-col justify-center items-center gap-4 px-0 md:px-44 pb-12">
                <div className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    <span className="font-bold">Product Overview</span>
                </div>
                <div className="pt-2 text-center text-lg text-gray-700 dark:text-gray-300">
                    Offers a balanced service offering of user engagement, convenience, scalability, and security
                </div>
            </div>
            <div className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-0 md:px-10">
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={cloud} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Offered on Cloud or On-Premise</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Offers flexible models of platform access - Cloud-based service or a Standalone application hosted at your premise.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={edit} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Easy Customization</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Easy customization to meet your needs is our forte and Meghsikshak’s unique adaptability.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={integrate} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Seamless Integrations</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enables seamless integration with existing applications/services to minimize disruption of ongoing services.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={secure} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Secure and Scalable</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Developed to be secure and scalable in all aspects.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={interfaceImage} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Intuitive User Interface</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                A responsive, user-friendly, and intuitive user interface that maximizes platform utility.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-indigo-100 to-purple-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md">
                        <div className="card-body gap-5 py-6">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <img width={40} src={compliant} alt="" />
                                <h2 className="card-title text-xl font-semibold text-gray-800 dark:text-white">Standards Compliance</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Compliant with major standards such as QTI for assessment and SCORM for content distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
