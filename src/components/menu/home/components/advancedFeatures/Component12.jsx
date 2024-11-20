import eibrary from "../images/advancedFeatures/eibrary.png"

const Component12 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-400 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">eLibrary</h2>
                    <p className="text-lg font-light mb-6">Provides a well-organized, catalogued, and searchable digital library of learning resources for instructors and learners alike.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> Supports multiple content forms
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> Filter-based search functionality
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center">
                            <i className="fa-solid fa-circle-check text-teal-200" /> Structured management of learning resources
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-8">
                        <img src={eibrary} alt="eLibrary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component12
