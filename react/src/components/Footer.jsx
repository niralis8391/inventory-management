import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-gray-900 text-white p-20">
            <div className="container mx-auto px-4 text-center">
                {/* Footer Logo */}
                {/* <div className="mb-6">
                    <a href="index.html">
                        <img src="images/footer-logo.png" alt="Footer Logo" className="mx-auto" />
                    </a>
                </div> */}

                {/* Email Subscription */}
                <div className="flex justify-center items-center gap-2 mb-6">
                    <input
                        type="input"
                        placeholder="Your Email"
                        name="Your Email"
                        className="p-3 w-xl text-white focus:outline-none border-b-2 border-white"
                    />
                    <span className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md cursor-pointer">
                        <button href="#">Subscribe</button>
                    </span>
                </div>

                {/* Footer Menu */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm mb-6">
                    <li><a href="#" className="hover:text-orange-400">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-orange-400">Gift Ideas</a></li>
                    <li><a href="#" className="hover:text-orange-400">New Releases</a></li>
                    <li><a href="#" className="hover:text-orange-400">Today's Deals</a></li>
                    <li><a href="#" className="hover:text-orange-400">Customer Service</a></li>
                </ul>

                {/* Help Line */}
                <div className="text-sm">
                    Help Line Number : <a href="#" className="text-blue-400 hover:underline">+1 1800 1200 1200</a>
                </div>
            </div>
        </div>

    )
}
