import CountUp from "react-countup";

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 px-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center py-14">
                {/* Clients */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <i className="fa-solid fa-handshake text-indigo-600 text-4xl" />
                        <h2 className="text-2xl md:text-4xl font-extrabold text-indigo-600">
                            <CountUp end={17} suffix="+" duration={2} />
                        </h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Clients</p>
                </div>

                {/* Courses */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <i className="fa-solid fa-book-open text-purple-600 text-4xl" />
                        <h2 className="text-2xl md:text-4xl font-extrabold text-purple-600">
                            <CountUp end={203} suffix="+" duration={2} />
                        </h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Courses</p>
                </div>

                {/* Users */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <i className="fa-solid fa-users text-pink-600 text-4xl" />
                        <h2 className="text-2xl md:text-4xl font-extrabold text-pink-600">
                            <CountUp end={357279} separator="," suffix="+" duration={2.5} />
                        </h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Users</p>
                </div>

                {/* Certifications */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <i className="fa-solid fa-certificate text-indigo-700 text-4xl" />
                        <h2 className="text-2xl md:text-4xl font-extrabold text-indigo-700">
                            <CountUp end={759797} separator="," suffix="+" duration={3} />
                        </h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Certifications</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
