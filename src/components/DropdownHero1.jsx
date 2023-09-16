import React, { useState } from 'react'
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

const DropdownHero1 = ({ heading, content }) => {

    // dropdown state
    const [show, setShow] = useState(false)

    return (
        <>

            <div className="main mb-2">
                <div className="child-1 flex justify-between border-2 py-2 px-1">{/*  flex */}
                    <h3 className='capitalize text-base font-medium  '>{heading}</h3>
                    <div className='cursor-pointer'>

                        {!show ? <FaCircleChevronDown size={20} onClick={() => setShow(true)} /> : <FaCircleChevronUp size={20} onClick={() => setShow(false)} />}
                    </div>

                </div>
                {show &&
                    <p className={`text-base bg-slate-300 font-medium px-2 py-1`}>{content}</p>}
            </div>

        </>
    )
}

export default DropdownHero1
