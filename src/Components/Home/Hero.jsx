import React from 'react'

function Hero() {
    return (
        <>
            <div className="flex flex-col items-start justify-center h-[40vh] w-full md:gap-10 z-10">
                <div className="bg-[#8065436f] bg-opacity-60 gap-1 text-start flex flex-col justify-center max-w-[850px] md:p-10 p-1 h-80">
                    <p className="text-3xl lg:text-5xl font-bold">
                        Teach and grow with help to a learner for world wide
                    </p>
                    <p className="sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        Build confidence as a leader,<br /> grow your network, and define your legacy.
                    </p>
                </div>

                <button className="bg-[#806543] text-black mt-5 lg:py-2 lg:px-4 py-1 px-2 w-fit rounded-lg hover:bg-brown-700 flex justify-start items-center">
                    Become a member <span className="text-lg">→</span>
                </button>
            </div>
        </>
    )
}

export default Hero