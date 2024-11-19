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
            <div>
                <div className="pt-10 pb-20 md:px-44">
                    <div className="text-3xl text-center">Why choose <span className="font-bold">MeghSikshak?</span></div>
                    <div className="pt-2 text-center">
                        A flexible, one-stop solution for all types of online learning
                    </div>
                </div>
                <div className="flex flex-col gap-6">
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