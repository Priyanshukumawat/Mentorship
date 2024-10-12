import React from 'react'
import Button from '../Common/Button'

function Navbar() {
    return (
        <>
            <div className="absolute top-5 right-5 p-5 space-x-4 z-10">
                <Button className="text-white" children="Sign In" />
                <Button className="text-white" children="Get Started" />
            </div>
        </>
    )
}

export default Navbar