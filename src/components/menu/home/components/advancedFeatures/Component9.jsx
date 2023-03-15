import assignment from "../images/advancedFeatures/assignment.png"

const Component9 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Assignment</h2>
                    <p className="pt-4">Organised learner evaluation method to assist the Instuctor grade the enrolled learners.

                    </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Assignment Management by Instructor</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Assignment Completion by Learners</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Elaborate Evaluation & grading features for Instructor</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={assignment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component9