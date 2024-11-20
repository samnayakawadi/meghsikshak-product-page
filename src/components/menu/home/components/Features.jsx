import cloud from "./images/highlights/cloud.png";
import compliant from "./images/highlights/compliant.png";
import edit from "./images/highlights/edit.png";
import integrate from "./images/highlights/integrate.png";
import interfaceImage from "./images/highlights/interface.png";
import secure from "./images/highlights/secure.png";

const Features = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 darkR:from-indigo-800 darkR:via-purple-800 darkR:to-pink-800 py-8 sm:py-10">
            <div className="flex flex-col justify-center items-center gap-4 px-4 sm:px-8 md:px-20 pb-1">
                <div className="text-3xl sm:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    <span className="font-bold">Product Overview</span>
                </div>
                <div className="pt-2 text-center text-sm sm:text-lg text-gray-700 darkR:text-gray-300">
                    Offers a balanced service offering of user engagement, convenience, scalability, and security
                </div>
            </div>
            <div className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-10">
                    {[
                        {
                            image: cloud,
                            title: "Offered on Cloud or On-Premise",
                            description: "Offers flexible models of platform access - Cloud-based service or a Standalone application hosted at your premise."
                        },
                        {
                            image: edit,
                            title: "Easy Customization",
                            description: "Easy customization to meet your needs is our forte and Meghsikshak’s unique adaptability."
                        },
                        {
                            image: integrate,
                            title: "Seamless Integrations",
                            description: "Enables seamless integration with existing applications/services to minimize disruption of ongoing services."
                        },
                        {
                            image: secure,
                            title: "Secure and Scalable",
                            description: "Developed to be secure and scalable in all aspects."
                        },
                        {
                            image: interfaceImage,
                            title: "Intuitive User Interface",
                            description: "A responsive, user-friendly, and intuitive user interface that maximizes platform utility."
                        },
                        {
                            image: compliant,
                            title: "Standards Compliance",
                            description: "Compliant with major standards such as QTI for assessment and SCORM for content distribution."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="card bg-gradient-to-r from-indigo-100 to-purple-100 darkR:from-indigo-700 darkR:to-purple-700 transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden shadow-md p-4">
                            <div className="card-body gap-4 py-4">
                                <div className="flex flex-row justify-start items-center gap-3 sm:gap-4">
                                    <img width={40} src={feature.image} alt="" />
                                    <h2 className="card-title text-lg sm:text-xl font-semibold text-gray-800 darkR:text-white">
                                        {feature.title}
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 darkR:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
