import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";




const Navbar = () => {
    const [mobileView, setMobileView] = useState(false)

    return (
        <>
            <div className="main ">
                <div className="grid grid-cols-2 h-16 shadow-lg px-3  ">
                    <div className="flex items-center gap-3">
                        <Link href={"/"}>
                            <Image src={"/assets/logo.png"} width={45} height={45} alt="logo" />
                        </Link>
                        <p className="text-base font-medium">Hire Now</p>
                    </div>

                    <div className="menu md:flex items-center justify-end ">
                        <div className="md:hidden flex justify-end items-center h-full">
                            {mobileView ? <FaXmark onClick={() => setMobileView(false)} /> : <FaBars onClick={() => setMobileView(true)} />}
                        </div>
                        <div className={`main md:block ${mobileView ? 'z-50 text-black' : 'hidden'}`}>
                            <ul className={`flex justify-end items-center text-base uppercase  gap-4 cursor-pointer ${mobileView ? ' text-sm -z-30 absolute top-16 w-40  flex flex-col bg-gray-100 shadow-md py-1' : ""}`}>
                                <li className={`ml-2 w-full text-left font-semibold hover:text-gray-400 ${mobileView ? "hover:bg-gray-200" : ""} `}>Home</li>
                                <li className=' ml-2 w-full text-left font-semibold  hover:text-gray-400'>About</li>

                                <li className='ml-2 w-full text-left font-semibold  hover:text-gray-400'>Contact</li>
                                <Image src={"/assets/nav-rightlogo.png"} width={40} height={40} />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
