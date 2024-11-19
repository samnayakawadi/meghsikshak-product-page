import feedback from "../images/advancedFeatures/feedback.png"

const Component7 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-6">Course Feedback & Review</h2>
                    <p className="text-lg font-light mb-6">Facilitates instructors to seek course feedback and learners to register their feedback.</p>
                    <ul className="flex flex-col gap-4 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Standardised Feedback Templates
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Moderated View of Learner Feedback
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Extensive Feedback Analytics
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10 bg-white rounded-lg shadow-2xl">
                        <img src={feedback} alt="Course Feedback & Review" className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component7
