const Stats = () => {
    return (
        <div className="bg-base-300">
            {/* <div className="px-0 md:px-44 pt-5">
                <div className="text-3xl text-center"><span className="font-bold">Our Stats</span></div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center py-14">
                <div>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold pb-1">16+</h2>
                        {/* <div className="badge badge-secondary">+1</div> */}
                    </div>
                    <p className="text-xl font-bold">Clients</p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold pb-1">182+</h2>
                        {/* <div className="badge badge-secondary">+52</div> */}
                    </div>
                    <p className="text-xl font-bold">Courses</p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold pb-1">3,39,628+</h2>
                        {/* <div className="badge badge-secondary">+1,14,628</div> */}
                    </div>
                    <p className="text-xl font-bold">Users</p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold pb-1">6,83,864+</h2>
                        {/* <div className="badge badge-secondary">+4,13,864</div> */}
                    </div>
                    <p className="text-xl font-bold">Certifications</p>
                </div>
            </div>
        </div>
    )
}

export default Stats