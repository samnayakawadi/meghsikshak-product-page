import AdvancedFeatures from "./components/AdvancedFeatures"
import CustomerCarousel from "./components/CustomerCarousel"
import Features from "./components/Features"
import GetInTouch from "./components/GetInTouch"
import Hero from "./components/Hero"
import Organizations from "./components/Organizations"
import Stats from "./components/Stats"
import TrustedBy from "./components/TrustedBy"
// import TrustedBy2 from "./components/TrustedBy2"

const Home = () => {
    return (
        <div>
            <Hero />
            <div id="statistics" className=" bg-base-200">
                <Stats />
            </div>
            <div className="px-2 md:px-32">
                <div className="pt-10" id="organizations">
                    <Organizations />
                </div>
                <div className="pt-10" id="highlights">
                    <Features />
                </div>
                <div className="pt-10" id="features">
                    <AdvancedFeatures />
                </div>
            </div>
            <div className="pt-20" id="clients">
                <TrustedBy />
            </div>
            <div className="">
                <CustomerCarousel />
            </div>
            <div className="" id="contact">
                <GetInTouch />
            </div>
        </div>
    )
}

export default Home