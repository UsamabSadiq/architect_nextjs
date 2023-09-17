import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureProject = () => {
    const btnData = ['all projects', 'commercial', 'residential', 'healthcare']
    // image map
    const imgData = [
        {
            imgSrc: '/assets/banner3.1_slider.avif',
            projectName: 'Hansen Complex',
            cityName: 'Berlin',
            year: 2022
        },
        {
            imgSrc: '/assets/banner3.2_slider.jpg',
            projectName: 'Zox Apartment',
            cityName: 'Ankara',
            year: 2021
        },
        {
            imgSrc: '/assets/banner3.3_slider.avif',
            projectName: 'SeaShell Residence',
            cityName: 'Moscow',
            year: 2020
        },
        {
            imgSrc: '/assets/banner-2.1.jpg',
            projectName: 'Platinum House',
            cityName: 'karachi',
            year: 2023
        },
    ]
    return (
        <>
            <div className="main my-7 border-t-2">
                <div className="content flex flex-col lg:flex-row mt-4 gap-x-5">  {/* flex */}
                    <div className="left bg-slate-50 lg:w-[30%]" data-aos="fade-right">
                        <div className="left-content p-2 h-full flex flex-col gap-y-4  lg:justify-evenly justify-start"> {/* flex  */}
                            <h2 className='text-3xl md:text-5xl font-bold capitalize font-orbitron '>innovating spaces, <br /> inspiring <br /> lives</h2>
                            <div className="image px-2 ">
                                <Image src={'/assets/feature1.jpg'} alt='project-left' width={200} height={200} className='lg:w-full w-[80%] mx-auto border rounded-lg' />
                            </div>
                            <div className="btn-para border-2 border-slate-300 rounded-lg px-2 py-1">
                                <p className='font-normal text-justify text-slate-500 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis eaque perspiciatis tempora veniam saepe! Nemo nostrum suscipit quos in aliquam amet tempora?</p>
                                <button className='rounded-lg border border-black py-2 mb-2 my-5 px-7 font-semibold font-orbitron capitalize'>learn more</button>

                            </div>
                        </div>

                    </div>

                    <div className="right w-full border-l-2 border-slate-300">
                        <h1 className='capitalize text-3xl md:text-5xl text-center font-bold my-6 font-orbitron' data-aos="flip-down">feature project</h1>
                        <div className=' w-[80%] mx-auto'>
                            <div className="btn flex flex-col lg:flex-row gap-y-3 justify-around my-2 ">
                                {
                                    btnData.map((item, ind) => {
                                        return (
                                            <button key={ind} className='rounded-lg border font-orbitron border-black py-2 px-7 hover:bg-black hover:text-white duration-200 font-semibold capitalize' data-aos="fade-right">{item}</button>
                                        )
                                    })
                                }
                            </div>

                            <div className="imageContainer grid grid-cols-1 md:grid-cols-2 gap-y-6 my-5">

                                {imgData.map(item => {
                                    return (
                                        <div key={item.cityName} className=" md:px-2 ">
                                            <Image src={item.imgSrc} alt={item.year} width={480} height={480} className='rounded-lg h-72 lg:h-96 ' data-aos="flip-left" />
                                            <div className="text border font-orbitron rounded-lg px-2 py-1 my-2" data-aos="zoom-in">
                                                <div className="row-1 flex justify-between items-center">
                                                    <p className='font-medium'>{item.projectName}</p>
                                                    <p className='font-light'>{item.year}</p>
                                                </div>
                                                <div className="row-2 flex justify-between items-center">
                                                    <p className='font-light'>{item.cityName}</p>
                                                    <FaArrowRightLong size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProject
