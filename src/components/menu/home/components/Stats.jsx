const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 px-16">
            {/* <div className="px-10 md:px-44">
                <div className="text-4xl text-center text-white">
                    <span className="font-extrabold">Our Stats</span>
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center py-14">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <h2 className="text-4xl font-extrabold text-indigo-600">16+</h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Clients</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <h2 className="text-4xl font-extrabold text-purple-600">182+</h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Courses</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <h2 className="text-4xl font-extrabold text-pink-600">3,39,628+</h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Users</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <h2 className="text-4xl font-extrabold text-indigo-700">6,83,864+</h2>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">Certifications</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
