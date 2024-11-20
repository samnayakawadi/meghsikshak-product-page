import multipleUsers from "../images/advancedFeatures/multipleUsers.png"

const Component13 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-4">Multiple Roles</h2>
                    <p className="text-lg font-light mb-6">Our learning platform has primarily three user roles: Learner, Instructor, and Admin.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Instructor - Develops, oversees, and submits the content to the admin for approval
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Learner - Consumes the content in a self-paced manner
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Admin - Oversees the overall administration of the platform
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={multipleUsers} alt="Multiple Roles" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component13
