import courseStructure from "../images/advancedFeatures/courseStructure.png"

const Component4 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
                <div className="basis-full text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-4">Course Structure</h2>
                    <p className="text-lg font-light mb-6">Well-structured and learner-friendly organization of course content to enable a fruitful learning experience.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Parent-Child Hierarchy
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Instructor-friendly Content Organizer
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Supports Multiple Content Types (Images/Videos/Documents)
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Progressive Display of Content Based on User Consumption
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Track Content Completion Progress
                        </li>
                    </ul>
                </div>
                {/* <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={courseStructure} alt="Course Structure" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Component4
