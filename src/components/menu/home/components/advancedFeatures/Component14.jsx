import administrationAnalytics from "../images/advancedFeatures/administrationAnalytics.png"

const Component14 = () => {
    return (
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 px-5 md:px-20 py-14 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-lg shadow-2xl">
            <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
                <div className="basis-full text-white">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">Administration & Analytics</h2>
                    <p className="text-lg font-light mb-6">Features to support efficient administration of the platform with data-driven insights and analytics for improved decision-making.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> End-to-end platform administration
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> Intuitive dashboards for easy navigation
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> Elaborate report generation module
                        </li>
                    </ul>
                </div>
                {/* <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-8">
                        <img src={administrationAnalytics} alt="Administration & Analytics" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Component14
