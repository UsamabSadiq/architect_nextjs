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
            <div className="main my-5">
                <div className="flex flex-col md:flex-row gap-6 border-t-2 border-b-2 border-gray-300 px-3">
                    <div className="left md:border-r-2 md:w-[45%] py-2 ">
                        <div className="main-content md:w-[80%] mx-auto">
                            <div className="content-1 flex flex-col items-center">
                                <Image src={'/assets/bannerimage.png'} width={250} height={250} alt='man_img' className='bg-orange-200 w-36 md:w-[250px]' />
                                <p className='text-sm text-slate-500 font-semibold mt-3 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, autem nam eum cum eligendi asperiores?</p>
                            </div>

                            <div className="content-2 mt-8 relative ">
                                <p className='text-lg capitalize font-semibold my-2 font-orbitron'> latest project</p>
                                <div className="relative">
                                    <FaAngleDown size={24} className='absolute left-1 top-1  pr-1  cursor-pointer' onClick={() => showComponent()} />
                                    <Image src={'/assets/banner-2.jpg'} alt='latest_project' width={300} height={300} className='mt-1 z-50 rounded-lg ' />

                                </div>
                                <div className="discover">
                                    <p className={`capitalize bg-slate-300 text-base text-white font-medium px-2  w-fit absolute bottom-0 -z-40 flex justify-center flex-col lg:flex-row lg:justify-between items-center gap-1 md:gap-4 ${show ? "z-40 block" : ""} `} > discover more !! <FaArrowRightLong size={18} /></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right w-full flex flex-col items-center gap-6 pt-2 pb-4 " >
                        <h2 className='text-[2.40rem] capitalize text-center font-bold my-4 font-orbitron'>architectural <br /> acoustics solutions</h2>
                        <button className='bg-black text-white rounded-lg py-2 my-4 px-10 font-semibold capitalize hover:bg-white hover:text-black hover:border hover:border-black font-orbitron'>lets go</button>
                        <Image src={'/assets/banner3.1_slider.avif'} alt='banner_1' width={800} height={800} className='rounded-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
