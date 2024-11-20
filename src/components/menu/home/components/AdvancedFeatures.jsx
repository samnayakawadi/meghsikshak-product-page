import Component1 from "./advancedFeatures/Component1"
import Component10 from "./advancedFeatures/Component10"
import Component11 from "./advancedFeatures/Component11"
import Component12 from "./advancedFeatures/Component12"
import Component13 from "./advancedFeatures/Component13"
import Component14 from "./advancedFeatures/Component14"
import Component2 from "./advancedFeatures/Component2"
// import Component3 from "./advancedFeatures/Component3"
import Component4 from "./advancedFeatures/Component4"
import Component5 from "./advancedFeatures/Component5"
import Component6 from "./advancedFeatures/Component6"
import Component7 from "./advancedFeatures/Component7"
import Component8 from "./advancedFeatures/Component8"
import Component9 from "./advancedFeatures/Component9"

const AdvancedFeatures = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="pt-10 pb-10 md:px-44 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="relative">
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 delay-1000"></div>

                        {/* Main content */}
                        <div className="relative z-10">
                            <div className="text-4xl py-3 text-center font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200">
                                Why choose <span className="font-bold">MeghSikshak?</span>
                            </div>

                            <div className="pt-4 text-center text-lg text-blue-100/90">
                                A flexible, one-stop solution for all types of online learning
                            </div>

                            {/* Optional decorative line */}
                            <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    <Component1 />
                    <Component2 />
                    {/* <Component3 /> */}
                    <Component13 />
                    <Component4 />
                    <Component5 />
                    <Component6 />
                    <Component7 />
                    <Component8 />
                    <Component9 />
                    <Component10 />
                    <Component11 />
                    <Component12 />
                    <Component14 />
                </div>
            </div>
        </div>
    )
}

export default AdvancedFeatures