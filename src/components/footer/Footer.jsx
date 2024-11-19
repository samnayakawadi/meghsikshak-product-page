import cdac from "./images/cdac.png";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer footer-center p-10 pt-8 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
                <img src={cdac} width="100" alt="cdac-logo" className="rounded-full shadow-xl border-4 border-white" />
                <div className="text-white mt-4">
                    <p className="font-bold text-xl tracking-wide">
                        Center for Development of Advanced Computing (C-DAC)
                    </p>
                    <p className="text-sm opacity-80">Copyright © 2023 - All Rights Reserved</p>
                </div>
                <div className="mt-4">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/CDACINDIA" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="35" height="35"
                                viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                        </a>

                        <a href="https://twitter.com/cdacindia" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="35" height="35"
                                viewBox="0 0 48 48">
                                <path fill="#1da1f2" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                <path fill="#fff" d="M24 7.21c-4.46 0-8.1 3.64-8.1 8.1 0 4.45 3.64 8.1 8.1 8.1 4.46 0 8.1-3.64 8.1-8.1 0-4.46-3.64-8.1-8.1-8.1ZM21.87 18.96c-.54.26-.79.85-.54 1.38l2.62 5.29c.18.38-.09.85-.5.85h-2.67c-.47 0-.86-.38-.86-.86 0-.06.04-.12.05-.18.01-.04.03-.08.04-.13.52-.98-.12-2.17-.62-2.84-.12-.17-.27-.33-.45-.48-.1-.09-.2-.18-.32-.27-1.11-.89-2.21-1.75-2.99-2.91-.17-.27-.22-.61-.13-.93l1.71-3.44c.14-.29.47-.46.77-.46h2.67c.4 0 .73.32.74.72 0 .35-.25.67-.61.79-.07.03-.14.05-.21.08-1.34.64-2.73 1.46-4.15 2.33-.48.28-.71.75-.62 1.25.09.49.52.84 1.04.84h3.33c.46 0 .84-.38.84-.84v-.12l-.38-1.31z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
