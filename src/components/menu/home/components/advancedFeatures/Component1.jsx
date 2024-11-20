import registration from "../images/advancedFeatures/registrationLogin.png"

const Component1 = () => {
    return (
        <div className="px-5 md:px-10 py-14 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-xl">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4">
                <div className="basis-full text-center">
                    <div className="w-full text-center mb-4">
                        <i className="fa-solid fa-user-lock text-white text-5xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-white leading-snug mb-4">
                        Secure Registration & Login</h2>
                    <p className="text-white text-lg font-light">Well-designed secure registration and login ensure swift onboarding of users with analytics to learn more about them.</p>
                    <div className="flex flex-row justify-center pt-6">
                        <ul className="flex flex-col gap-2 w-fit">
                            <li className="flex flex-row gap-4 justify-start items-center text-white">
                                <i className="fa-solid fa-circle-check text-green-400" /> Accommodates multiple login methods
                            </li>
                            <li className="flex flex-row gap-4 justify-start items-center text-white">
                                <i className="fa-solid fa-circle-check text-green-400" /> User Document Upload – personalization & authentication
                            </li>
                            <li className="flex flex-row gap-4 justify-start items-center text-white">
                                <i className="fa-solid fa-circle-check text-green-400" /> Secured with Captcha
                            </li>
                            <li className="flex flex-row gap-4 justify-start items-center text-white">
                                <i className="fa-solid fa-circle-check text-green-400" /> Error Validations with adaptive messages
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={registration} alt="Secure Registration and Login" className="" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Component1
