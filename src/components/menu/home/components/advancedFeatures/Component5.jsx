import announcement from "../images/advancedFeatures/announcement.png"

const Component5 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-xl">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-4">Announcements</h2>
                    <p className="text-lg font-light mb-6">Enables seamless communication of key announcements by Instructors to the learners.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Chronologically sequenced
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Transmitted instantly
                        </li>
                        <li className="flex flex-row gap-4 justify-start items-center text-white">
                            <i className="fa-solid fa-circle-check text-indigo-200" /> Multiple variants to suit user needs
                        </li>
                    </ul>
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5 bg-white rounded-lg shadow-2xl">
                        <img src={announcement} alt="Announcement" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component5
