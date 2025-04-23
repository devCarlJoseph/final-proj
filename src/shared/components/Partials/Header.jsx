import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className='flex justify-center items-center bg-secondary h-[5rem]'>
                <div className='flex justify-between w-[80%]'>
                    <div className='flex gap-1.5 mt-[0.7rem] mb-[0.7rem]'>
                        <div className="w-[3rem] h-[3rem] bg-white rounded-[50%] text-primary">
                            <i class="fa-solid fa-bowl-food text-[2rem] ml-[0.5rem] mt-[0.45rem]"></i>
                        </div>
                        <div>
                            <h1 className="text-[1.5rem] font-bold text-tertiary">CjCo</h1>
                            <p className='text-[0.7rem] text-gray-400'>Restaurant</p>
                        </div>
                    </div>
                    <div className='mt-[1.5rem] mb-[0.7rem]'>
                        <ul className='flex gap-[2rem] cursor-pointer text-tertiary max-lg:hidden'>
                            <li class="border-b-gray-500 border-b-[1px]"></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/" >Home</Link></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/menu" >Menu</Link></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/about" >About Us</Link></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/gallery" >Gallery</Link></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/blog" >Blogs</Link></li>
                            <li class="hover:border-b-gray-500 hover:border-b-[1px]"><Link to="/contact" >Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='text-[1.5rem] mt-4 mr-6 text-tertiary'>
                            <i class="fa-solid fa-cart-shopping cursor-pointer"></i>
                        </div>
                        <div className='bg-tertiary h-[3rem] w-[10rem] hover:bg-tertiary/80 rounded-[1.5rem] mt-[0.8rem] max-lg:hidden'>
                            <button className='p-2.5 text-white pl-[1.7rem] cursor-pointer'>BOOK A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

