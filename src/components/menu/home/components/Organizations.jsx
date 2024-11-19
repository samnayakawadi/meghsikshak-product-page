import React from "react";

const Organizations = () => {
    return (
        <div className="px-4 md:px-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 py-10">
            <div className="px-4 md:px-44 pb-10">
                <div className="text-2xl md:text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    Designed for{" "}
                    <span className="font-bold">Government Institutions, Defence Organizations, Corporates</span> and{" "}
                    <span className="font-bold">Educational Institutions</span>
                </div>
                <div className="pt-2 text-center text-base md:text-lg text-gray-700 dark:text-gray-300">
                    Our solutions are developed using superior enterprise technologies to suit a wide range of target users.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
                {/* Government Card */}
                <div className="card bg-gradient-to-r from-indigo-100 to-purple-100  transition-transform duration-300 ease-in-out h-full rounded-xl overflow-hidden">
                    <div className="card-body bg-white dark:bg-gray-800 rounded-b-xl p-4 md:p-6">
                        <div className="flex justify-center text-indigo-500 text-4xl md:text-6xl">
                            <i className="fa-solid fa-landmark" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mt-4">Government</h2>
                        <p className="pt-2 md:pt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                            Meghsikshak is a versatile tool that serves multiple needs of delivering online education for skill
                            upgradation, capacity building, training, campaigns, credential programs, knowledge enhancement, etc.
                        </p>
                        <ul className="flex flex-col gap-2 pt-2 md:pt-4">
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Complete application control
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Seamless Content Distribution
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Secure and Scalable
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Multilingual support
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Easy to Manage
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Corporate Card */}
                <div className="card bg-gradient-to-r from-indigo-100 to-purple-100  transition-transform duration-300 ease-in-out h-full rounded-xl overflow-hidden">
                    <div className="card-body bg-white dark:bg-gray-800 rounded-b-xl p-4 md:p-6">
                        <div className="flex justify-center text-indigo-500 text-4xl md:text-6xl">
                            <i className="fa-solid fa-building" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mt-4">Corporates</h2>
                        <p className="pt-2 md:pt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                            Meghsikshak comes in handy to Corporates to offer job-based skills, knowledge management, skill evaluation
                            leading to promotion, etc.
                        </p>
                        <ul className="flex flex-col gap-2 pt-2 md:pt-4">
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Cloud-enabled
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Easy Integration and Customization
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Custom branding
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Efficient Collaboration Tools
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education Card */}
                <div className="card bg-gradient-to-r from-indigo-100 to-purple-100  transition-transform duration-300 ease-in-out h-full rounded-xl overflow-hidden">
                    <div className="card-body bg-white dark:bg-gray-800 rounded-b-xl p-4 md:p-6">
                        <div className="flex justify-center text-indigo-500 text-4xl md:text-6xl">
                            <i className="fa-solid fa-school" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mt-4">Education</h2>
                        <p className="pt-2 md:pt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                            Meghsikshak empowers educational institutions to offer an effective learning environment that supports
                            online and offline education.
                        </p>
                        <ul className="flex flex-col gap-2 pt-2 md:pt-4">
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Personalized Learning
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Flexible Access to Content
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Scalable Platform for Students
                            </li>
                            <li className="flex flex-row gap-2 md:gap-4 justify-start items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                <i className="fa-solid fa-circle-check text-indigo-500" /> Rich Educational Tools
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organizations;
