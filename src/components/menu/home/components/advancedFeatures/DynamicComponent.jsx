import React from "react";

const DynamicComponent = ({ icon, title, description, features, bgColor, exraClasses }) => {

    // List of gradient colors
    const dynamicColors = [
        "from-green-400 via-teal-500 to-blue-600",
        "from-purple-500 via-indigo-600 to-blue-700",
        "from-teal-500 via-cyan-600 to-blue-700",
        "from-purple-600 via-pink-500 to-red-400",
        "from-teal-600 via-blue-500 to-indigo-400",
        "from-purple-600 via-indigo-500 to-blue-500"
    ]

    // Generate a random index to select a gradient color
    const randomIndex = Math.floor(Math.random() * dynamicColors.length);

    console.log("randomIndex", randomIndex)

    return (
        <div className={`${exraClasses} px-5 md:px-10 py-14 bg-gradient-to-r ${dynamicColors[randomIndex]} rounded-lg shadow-xl`}>
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4">
                <div className="basis-full text-center">
                    <div className="w-full text-center mb-4">
                        <i className={`${icon} text-white text-5xl`} />
                    </div>
                    <h2 className="text-4xl font-bold text-white leading-snug mb-4">
                        {title}
                    </h2>
                    <p className="text-white text-lg font-light">{description}</p>
                    <div className="flex flex-row justify-center pt-6">
                        <ul className="flex flex-col gap-2 w-fit">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex flex-row gap-4 justify-start items-center text-white"
                                >
                                    <i className="fa-solid fa-circle-check text-green-400" /> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicComponent;
