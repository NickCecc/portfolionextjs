import React from "react";


/* Don't forget to download the CSS file too
OR remove the following line if you're already using Tailwind */


export const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-indigo-500 from-20% to-blue-400  py-4 border-b-2 border-black opacity-85">
            <div className="container mx-auto">
                <div className="flex  justify-center space-x-16">
                <button
                    className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Projects
                </button>
                <button
                    className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    About Me
                </button>
                <button
                    className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Contact
                </button>
                <button
                    className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Downloads
                </button>
                </div>
            </div>
        </nav>
    )
}

