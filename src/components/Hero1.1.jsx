import Image from 'next/image'
import React, { useState } from 'react'
import DropdownHero1 from './DropdownHero1';
const Hero1 = () => {

    const dropdownObj = [
        {
            id: 1,
            heading: 'Commercial Project',
            content: 'Commercial Project dolor sit amet consectetur adipisicing elit. Esse, autem. Quidem ratione adipisci nisi quo id, voluptate soluta voluptas hic!'
        },
        {
            id: 2,
            heading: 'Education',
            content: 'Education dolor sit amet consectetur adipisicing elit. Esse, autem. Quidem ratione adipisci nisi quo id, voluptate soluta voluptas hic!'
        }, {
            id: 3,
            heading: 'Shopping Mall',
            content: 'Shopping Mall dolor sit amet consectetur adipisicing elit. Esse, autem. Quidem ratione adipisci nisi quo id, voluptate soluta voluptas hic!'
        },
        {
            id: 4,
            heading: 'Tower',
            content: 'Tower dolor sit amet consectetur adipisicing elit. Esse, autem. Quidem ratione adipisci nisi quo id, voluptate soluta voluptas hic!'
        },
        {
            id: 5,
            heading: 'Arts & Community',
            content: 'Arts & Community dolor sit amet consectetur adipisicing elit. Esse, autem. Quidem ratione adipisci nisi quo id, voluptate soluta voluptas hic!'
        },
    ]

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
                <div className="left flex flex-col justify-between w-[80%] py-2"> {/*  flex */}
                    <p className='capitalize text-3xl md:text-4xl lg:text-6xl font-bold'>modern life lives here</p>
                    <p className='font-medium text-sm border rounded-md p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus numquam cumque, ducimus ea quasi illum recusandae officiis maxime nihil.</p>
                </div>
                <div className="middle">
                    <Image src={'/assets/Capture2.png'} width={800} height={800} />
                </div>
                <div className="right py-2 md:col-span-2 lg:col-span-1">
                    {dropdownObj.map(item => {
                        return (

                            <DropdownHero1 key={item.id} heading={item.heading} content={item.content} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Hero1
