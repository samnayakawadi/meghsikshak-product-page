import discussion from "../images/advancedFeatures/discussion.png"

const Component6 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-6">Discussion Forum</h2>
                    <p className="text-lg font-light mb-6">Facilitates peer to peer communication and learning.</p>
                    <ul className="flex flex-col gap-4 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Moderated by Instructors
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Displayed as threaded conversations
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Facility to capture user likes
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={discussion} alt="Discussion Forum"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component6
