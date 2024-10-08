import React from 'react'

function Navbar() {
    return (
        <>
            <div className="absolute top-5 right-5 p-5 space-x-4 z-10">
                <button className="bg-[#806543] text-white px-4 py-2 rounded-lg hover:bg-brown-700">Sign In</button>
                <button className="bg-[#806543] text-white px-4 py-2 rounded-lg hover:bg-brown-700">Get Started</button>
            </div>
        </>
    )
}

export default Navbar