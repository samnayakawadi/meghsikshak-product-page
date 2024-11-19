import assessmentAuthoring from "../images/advancedFeatures/assessmentAuthoring.png"

const Component10 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 rounded-lg shadow-2xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">Quiz Creation</h2>
                    <p className="text-lg font-light mb-6">The built-in assessment module enables Course Instructors to create Quizzes for meaningful assessment of learners’ learning levels. There are numerous features offered.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-cyan-200" /> User-friendly Question Editor
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-cyan-200" /> Structured Quiz Organizer
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-cyan-200" /> Learner and Context-Specific Quiz Assigner
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10 bg-white rounded-lg shadow-xl">
                        <img src={assessmentAuthoring} alt="Assessment Authoring" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component10
