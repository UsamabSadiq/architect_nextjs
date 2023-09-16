import Image from 'next/image'
import { useState } from 'react';
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    const [show, setShow] = useState(false)
    const showComponent = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)

        }, 4000);
    }
    return (
        <>
            <div className="main mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="left border-r-2 md:w-[45%] ">
                        <div className="main-content md:w-[80%] mx-auto">
                            <div className="content-1">
                                <Image src={'/assets/bannerimage.png'} width={200} height={200} className='bg-orange-200 md:w-full' />
                                <p className='text-sm text-slate-400 font-medium mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, autem nam eum cum eligendi asperiores?</p>
                            </div>

                            <div className="content-2 mt-8 relative ">
                                <p className='text-lg capitalize font-semibold my-2'> latest project</p>
                                <div className="animation relative">
                                    <FaAngleDown size={24} className='absolute left-1 top-1  pr-1  cursor-pointer' onClick={() => showComponent()} />
                                    <Image src={'/assets/banner-2.jpg'} width={300} height={300} className='mt-1 z-50 rounded-lg ' />

                                </div>
                                <p className={`capitalize bg-slate-300 text-base text-white font-medium px-2 md:w-full w-fit absolute bottom-0 -z-40 flex justify-center flex-col lg:flex-row lg:justify-between items-center ${show ? "z-40 block" : ""} `} > discover more !! <FaArrowRightLong size={18} /></p>
                            </div>
                        </div>

                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    )
}

export default Hero
