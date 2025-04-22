import React from 'react';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Menu",
        link: "/#",
    },
    {
        id: 3,
        name: "About Us",
        link: "/#",
    },
    {
        id: 4,
        name: "Gallery",
        link: "/#",
    },

    {
        id: 5,
        name: "Blogs",
        link: "/#",
    },
    {
        id: 6,
        name: "Contact Us",
        link: "/#",
    },
]

export default function Navbar() {
    return (
        <div className="overflow-hidden">
            <div className='flex justify-center items-center'>
                <div className='flex justify-between w-[80%] bg-transparent border-b-1 border-b-gray-200 absolute top-1'>
                    <div className='flex gap-1.5 mt-[0.7rem] mb-[0.7rem]'>
                        <div className="w-[3rem] h-[3rem] bg-primary rounded-[50%] text-white">
                            <i class="fa-solid fa-bowl-food text-[2rem] ml-[0.5rem] mt-[0.45rem]"></i>
                        </div>
                        <div>
                            <h1 className="text-[1.5rem] font-bold text-primary">CjCo</h1>
                            <p className='text-[0.7rem] text-gray-300'>Restaurant</p>
                        </div>
                    </div>
                    <div className='mt-[1.5rem] mb-[0.7rem]'>
                        <ul className='flex gap-[2rem] cursor-pointer text-primary max-lg:hidden'>
                            {
                                Menu.map((data) => (
                                    <li className='hover:border-b-tertiary hover:border-b-[1px]'>
                                        <a href="{data.link}">{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='bg-tertiary h-[3rem] w-[10rem] border-white border-1 rounded-[1.5rem] mt-[0.8rem] hover:bg-tertiary/70 max-lg:hidden'>
                        <button className='p-2.5 text-white pl-[1.7rem] cursor-pointer'>BOOK A TABLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

