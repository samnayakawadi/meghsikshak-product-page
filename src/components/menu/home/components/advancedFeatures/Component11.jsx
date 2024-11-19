import assessmentDelivery from "../images/advancedFeatures/assessmentDelivery.png"

const Component11 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-6 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">Quiz Delivery</h2>
                    <p className="text-lg font-light mb-6">An elaborate quiz delivery module streamlines the assessment process to offer a context-aware, learner-friendly, secure, and transparent evaluation.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-pink-200" /> Serves multiple evaluation processes
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-pink-200" /> Usable as an online Exam Portal
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-pink-200" /> Intuitive and engaging quiz presentation
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-pink-200" /> Elaborate analytics to understand learner performance
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-8 bg-white rounded-lg shadow-2xl">
                        <img src={assessmentDelivery} alt="Assessment Delivery" className="rounded-lg shadow-xl hover:scale-105 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component11
