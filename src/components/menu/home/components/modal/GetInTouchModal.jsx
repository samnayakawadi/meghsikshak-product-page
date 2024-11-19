const GetInTouchModal = () => {
    return (
        <div>
            <input type="checkbox" id="getInTouchModal" className="modal-toggle" />
            <label htmlFor="getInTouchModal" className="modal cursor-pointer">
                <label
                    className="modal-box relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
                    htmlFor=""
                >
                    <p className="pt-4 pb-2 font-bold text-2xl">Address</p>
                    <p className="text-lg font-light opacity-90">
                        <span>
                            Plot No. 6 & 7, Hardware Park, Sy No. 1/1, Srisailam Highway
                            Pahadi Shareef, Via, Keshavagiri Post, Hyderabad, Telangana
                            501510
                        </span>
                        <a
                            href="https://goo.gl/maps/GkNyAa6Q6GebAtu1A"
                            target="_blank"
                            rel="noreferrer"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>

                    <p className="pt-4 pb-2 font-bold text-2xl">Email</p>
                    <p className="text-lg font-light opacity-90">
                        <span>meghsikshak@cdac.in</span>
                        <a
                            href="mailto:meghsikshak@cdac.in"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>
                    <p className="text-lg font-light opacity-90">
                        <span>chariot@cdac.in</span>
                        <a
                            href="mailto:chariot@cdac.in"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>

                    <p className="pt-4 pb-2 font-bold text-2xl">Mobile</p>
                    <p className="text-lg font-light opacity-90">
                        <span>+91 9182561076</span>
                        <a
                            href="tel:+919182561076"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>

                    <div className="modal-action">
                        <label
                            htmlFor="getInTouchModal"
                            className="btn bg-gradient-to-r from-indigo-500 to-pink-500 text-white normal-case w-full hover:scale-105 transition-all"
                        >
                            Close
                        </label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default GetInTouchModal;
