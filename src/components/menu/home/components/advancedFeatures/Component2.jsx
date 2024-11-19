import multilingual from "../images/advancedFeatures/multilingual.png"

const Component2 = () => {
    return (
        <div className="px-5 md:px-20 py-10 bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-10 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-4">Multilingual Application</h2>
                    <p className="text-lg font-light mb-6">Truly multilingual with support to all constitutionally recognised Indian languages, besides English.</p>
                    <ul className="flex flex-col gap-2">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Supports Multiple Indian Languages
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-green-400" /> Supports adding new Language
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10 bg-white rounded-lg shadow-2xl">
                        <img src={multilingual} alt="Multilingual Application" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component2
