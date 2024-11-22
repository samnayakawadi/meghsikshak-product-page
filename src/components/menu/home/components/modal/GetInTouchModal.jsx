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
                        <span>&#109;&#101;&#103;&#104;&#115;&#105;&#107;&#115;&#104;&#97;&#107;&#64;&#99;&#100;&#97;&#99;&#46;&#105;&#110;</span>
                        <a
                            href="mailto:&#109;&#101;&#103;&#104;&#115;&#105;&#107;&#115;&#104;&#97;&#107;&#64;&#99;&#100;&#97;&#99;&#46;&#105;&#110;"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>
                    <p className="text-lg font-light opacity-90">
                        <span>&#99;&#104;&#97;&#114;&#105;&#111;&#116;&#64;&#99;&#100;&#97;&#99;&#46;&#105;&#110;</span>
                        <a
                            href="mailto:&#99;&#104;&#97;&#114;&#105;&#111;&#116;&#64;&#99;&#100;&#97;&#99;&#46;&#105;&#110;"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>

                    <p className="pt-4 pb-2 font-bold text-2xl">Mobile</p>
                    <p className="text-lg font-light opacity-90">
                        <span>&#43;&#57;&#49;&#32;&#57;&#49;&#56;&#50;&#53;&#54;&#49;&#48;&#55;&#54;</span>
                        <a
                            href="tel:+91&#43;&#57;&#49;&#32;&#57;&#49;&#56;&#50;&#53;&#54;&#49;&#48;&#55;&#54;"
                            className="pl-2 text-lg hover:text-pink-400 transition-all"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </p>

                    <div className="modal-action">
                        <label
                            htmlFor="getInTouchModal"
                            className="btn bg-gradient-to-r from-indigo-500 to-pink-500 text-white normal-case w-full transition-all"
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
