import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
    const data = [
        {
            number: 32,
            text: 'years of experience'
        },
        {
            number: 598,
            text: 'project completed'
        },
        {
            number: 45,
            text: 'award gain'
        },
        {
            number: 100,
            text: 'architectural engineer'
        },
    ]
    return (
        <>
            <div className="main my-5 border border-gray-300 rounded-lg px-3">

                {/* columns start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-x-3">
                    <div className='left'>
                        <h3 className='text-5xl font-semibold capitalize font-orbitron '>About Us</h3>
                        <button className='bg-black text-white rounded-lg py-2 my-4 px-7 font-semibold capitalize font-orbitron'>learn more</button>
                        <Image src={'/assets/about_right.webp'} alt='artist_img' width={400} height={400} className='rounded-lg md:w-[80%] w-full h-[20rem] mt-4' />
                    </div>

                    <div className="center flex flex-col justify-between ">

                        <div className="content flex flex-wrap px-1 justify-around py-2">
                            {data.map(item => {
                                return (
                                    <div key={item.number} className='flex gap-2 items-center '>
                                        <h2 className='number text-3xl lg:text-5xl font-medium font-orbitron '>{item.number}</h2>
                                        <span className='capitalize text-xs font-medium font-roboto' >{item.text}</span>
                                    </div>
                                )
                            })}


                        </div>

                        <p className='text-sm font-medium border-2 rounded-lg text-slate-500 px-2 py-1 mt-2 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis cupiditate omnis, architecto ipsa, quia eveniet debitis minima doloremque cum minus, fugiat sed animi aut obcaecati consequatur! Vero, iusto. Dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quibusdam, consequatur dolorum labore temporibus magnam ut et asperiores ipsam nihil!</p>
                    </div>

                    <div className="right md:col-span-2 lg:col-span-1">
                        <Image src={'/assets/banner3.2_slider.jpg'} alt='house-aboutSec' width={600} height={600} className='rounded-lg mt-4 lg:mt-0 mx-auto' />
                    </div>


                </div>
            </div>

        </>
    )
}

export default Aboutus
