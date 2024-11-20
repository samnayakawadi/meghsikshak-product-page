import query from "../images/advancedFeatures/query.png"

const Component8 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 rounded-lg shadow-2xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-6">Ask the Instructor</h2>
                    <p className="text-lg font-light mb-6">Enables the learners to post questions to the Course Instructor on a one-to-one mode.</p>
                    <ul className="flex flex-col gap-4 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Query Management Module
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Personalized Communication Between Instructor & Learner
                        </li>
                    </ul>
                </div>
                {/* <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={query} alt="Query Management" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Component8
