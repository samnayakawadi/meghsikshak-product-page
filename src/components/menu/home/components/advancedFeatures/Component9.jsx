import assignment from "../images/advancedFeatures/assignment.png"

const Component9 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 rounded-lg shadow-2xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-6">Assignment</h2>
                    <p className="text-lg font-light mb-6">Organized learner evaluation method to assist the instructor in grading the enrolled learners.</p>
                    <ul className="flex flex-col gap-4 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Assignment Management by Instructor
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Assignment Completion by Learners
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Elaborate Evaluation & Grading Features for Instructor
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={assignment} alt="Assignment Features" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component9
