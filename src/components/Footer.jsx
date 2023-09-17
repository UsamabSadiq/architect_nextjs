import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 my-5 border-t border-slate-300">
                <div className="left sm:w-fit lg:min-w-[25rem] mt-4 font-orbitron ">
                    <h2 className='uppercase text-center md:text-left text-3xl md:text-4xl font-bold mb-5' >let talk about <br /> your project</h2>
                    <div className="only-for-sm-devices  md:flex sm:flex-col justify-between ">
                        <div className="email md:mt-16 border-2 rounded-lg py-2 pl-2" >
                            <p className='text-base font-medium  '>Email Address</p>
                            <p className='text-xl font-semibold'>contact@mosaic.com</p>
                        </div>

                        <div className="numbers border-2 rounded-lg md:mt-14 md:mb-4 pb-5 pl-2" >
                            <p className='text-base font-medium mt-2 '>Contact Number</p>
                            <p className='text-xl font-semibold'>+090078601449</p>
                            <p className='text-xl font-semibold'>+090078601449</p>

                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="text my-3 flex gap-5 flex-col items-center md:items-end"> {/* flex */}
                        <p className='text-xs md:text-sm text-justify text-slate-500 font-roboto'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Nesciunt minus <br /> at harum quis Nesciunt quis.</p>
                        <div className="border px-2 py-1 rounded-lg flex  items-center gap-4 md:max-w-[25rem]" >  {/* flex */}
                            <Image src={'/assets/bannerimage.png'} alt='menLogo' width={70} height={70} />
                            <div className="contact font-orbitron" >
                                <p className='text-base font-medium capitalize'>say hi!</p>
                                <p className='text-lg font-semibold mt-1'>+090078601449</p>
                            </div>
                        </div>
                        <Image src={'/assets/footer_location.webp'} alt='map' width={1000} height={500} className=' border rounded-lg h-[80%]' />

                    </div>
                </div>

            </div>

            {/* Bottom starts  */}

            <div className="main border-2 rounded-xl mt-5 mb-3 min-h-44 " >
                {/* upperBottom starts  */}

                <div className="content grid grid-cols-1 md:grid-cols-2 px-3 pt-2">
                    <div className='w-1/2'>
                        <Image src={"/assets/logo.png"} alt='site-logo' width={70} height={70} />

                    </div>

                    <p className='text-base text-slate-500 mt-3 font-roboto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatibus, provident repudiandae, reiciendis laudantium quasi adipisci dolorum quod voluptates corporis fugit? Libero eligendi nesciunt obcaecati. Assumenda ex cupiditate quas itaque?</p>

                </div>

                {/* veryBottom starts  */}

                <div className="veryBottom flex flex-col items-center md:flex-row md:justify-between font-orbitron  mt-14 px-3 mb-2">
                    <p className="email text-slate-500 font-medium">usamabsadiq@gmail.com</p>
                    <div className="items">
                        <span className='px-2 font-medium'>About</span>
                        <span className='px-2 font-medium'>Project</span>
                        <span className='px-2 font-medium'>Contact</span>
                    </div>
                    <p className="email text-slate-500 font-medium">Terms&Condition</p>
                </div>
            </div>

        </>
    )
}

export default Footer
