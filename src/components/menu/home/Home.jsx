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
            <div id="statistics" className="pt-5 bg-base-300">
                <Stats />
            </div>
            <div className="px-10 md:px-32">
                <div className="pt-20" id="organizations">
                    <Organizations />
                </div>
                <div className="pt-20" id="highlights">
                    <Features />
                </div>
                <div className="pt-20" id="features">
                    <AdvancedFeatures />
                </div>
            </div>
            <div className="pt-20" id="clients">
                <TrustedBy />
            </div>
            <div className="mt-14 mb-16">
                <CustomerCarousel />
            </div>
            <div className="px-10 sm:px-10 md:px-20 lg:px-32 pt-16 md:pt-0" id="contact">
                <GetInTouch />
            </div>
        </div>
    )
}

export default Home