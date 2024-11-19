import meghsikshak from "./images/hero/meghsikshak.png";

const Hero = () => {
    return (
        <div id="home">
            <div className="pt-24 pb-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 md:px-32 shadow-xl">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="basis-full md:basis-7/12">
                        <div className="p-0 md:px-20 text-white">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                The Best Enterprise Software for Online Learning
                            </h1>
                            <p className="pt-6 text-lg md:text-xl">A one-stop web-based enterprise application to fulfill your online education goals - training, skill upgradation, knowledge evaluation, certification, and examinations.</p>
                            <p className="pt-2 text-lg md:text-xl">Ensures full control over your application and data.</p>
                            <p className="pt-2 pb-6 text-lg md:text-xl">Designed for government institutions and large corporations.</p>
                            <div className="flex flex-start gap-3 flex-wrap">
                                <a href="mailto:meghsikshak@cdac.in">
                                    <label htmlFor="getInTouchModal" className="btn btn-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 normal-case">Get In Touch</label>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-5/12 pt-20 md:py-0 flex flex-row justify-center flex-wrap">
                        <img alt="MeghSikshak" src={meghsikshak} className="max-w-full rounded-xl transform hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
