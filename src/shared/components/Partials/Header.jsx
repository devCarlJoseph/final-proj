import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className='box-border'>
            <div className='flex justify-center items-center'>
                <div className='flex justify-between w-[85%] border-b-[1px] border-b-gray-200 absolute top-1'>
                    <div className='flex gap-1.5 mt-[0.7rem] mb-[0.7rem]'>
                        <div className="w-[3rem] h-[3rem] bg-white rounded-[50%] text-primary">
                            <i class="fa-solid fa-bowl-food text-[2rem] ml-[0.5rem] mt-[0.45rem]"></i>
                        </div>
                        <div>
                            <h1 className="text-[1.5rem] font-bold text-primary">CjCo</h1>
                            <p className='text-[0.7rem] text-secondary'>Restaurant</p>
                        </div>
                    </div>
                    <div className='mt-[1.5rem] mb-[0.7rem]'>
                        <i class="fa-solid fa-bars text-[1.3rem] mr-[-6.5rem] text-white cursor-pointer hidden tablet:block tablet:ml-[19rem] cp:ml-[3.5rem] myPhone:ml-[2rem] sCP:ml-[1rem]"
                        onClick={() => setNavOpen(!navOpen)}></i>
                        <ul className={`${navOpen ? 'flex flex-col items-center gap-4 mt-4 bg-tertiary w-[41rem] h-[17.2rem] absolute left-0 pt-[0.7rem] rounded-[0.5rem] cp:w-[23rem] myPhone:w-[20rem] sCP:w-[17rem] lg:hidden' : 'block tablet:hidden'} flex gap-[2rem] cursor-pointer text-white font-medium z-[2]`}>
                            <li class="hover:border-mainH hover:border-b-[2px]"><Link to="/" >Home</Link></li>
                            <li class="hover:border-mainH hover:border-b-[2px]"><Link to="/menu" >Menu</Link></li>
                            <li class="hover:border-mainH hover:border-b-[2px]"><Link to="/about" >About Us</Link></li>
                            <li class="hover:border-mainH hover:border-b-[2px]"><Link to="/gallery" >Gallery</Link></li>
                            <li class="hover:border-mainH hover:border-b-[2px]"><Link to="/contact" >Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='border-[1px] border-white h-[3rem] w-[10rem] hover:bg-primary/80 rounded-[1.5rem] mt-[0.8rem] tablet:hidden'>
                            <Link to="/book"><button className='p-2.5 text-secondary pl-[1.7rem] cursor-pointer'>BOOK A TABLE</button></Link>
                        </div>
                        <div className='mt-[1.5rem]'>
                            <Link to="/book"><i class="fa-solid fa-book-open text-[1.3rem] ml-[-2rem] text-white cursor-pointer hidden tablet:block "></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

