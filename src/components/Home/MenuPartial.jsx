import Wave from 'react-wavify'
import mozzarella from '../../assets/pictures/mozzarella stick.jpg'
import spicedPotato from '../../assets/pictures/spiced potato.jpg'
import garlicBread from '../../assets/pictures/garlic bread w cheese.jpg'
import pepperoni from '../../assets/pictures/pepperoni.jpg'
import greekFeta from '../../assets/pictures/greek feta salad.jpg'

export default function SectionThree() {
    return (
        <div>
            <div className='mt-[-6rem]'>
                <Wave fill='#f8ece4'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.20,
                        points: 10
                    }}
                />
            </div>
            <div className="h-[78rem] bg-mainH">
                <div class="flex justify-center gap-1.5 pt-[1.5rem] text-center text-primary pb-[1rem] max-sm:pt-[10rem] max-sm:pb-[0.6rem] max-xs:pb-[0.5rem]">
                    <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                    <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                    <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                </div>
                <div class="text-center text-primary">
                    <h1 class="text-[1.2rem] font-medium pb-[1rem] max-sm:text-[1rem] max-sm:pb-[0.6rem] max-xs:text-[0.9rem] max-xs:pb-[0.5rem]">FOOD MENU</h1>
                </div>
                <div class="text-center font-semibold">
                    <h1 class="text-[2.5rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">Timeless <span class="text-primary">Culinary Delights</span></h1>
                </div>
                <div className='flex justify-center items-center gap-[1.5rem] mt-[2rem]'>
                    <div className='w-[19rem] h-[25rem] bg-background rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={mozzarella} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-background rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={spicedPotato} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Spicy Potato</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={garlicBread} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Garlic Bread</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={pepperoni} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Pepperoni Pie</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={greekFeta} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Greek Salad</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-[1.5rem] mt-[2rem]'>
                    <div className='w-[19rem] h-[25rem] bg-background rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={mozzarella} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-background rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={spicedPotato} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={garlicBread} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={pepperoni} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                    <div className='w-[19rem] h-[25rem] bg-white rounded-3xl shadow-md'>
                        <div>
                            <img className='w-[19rem] h-[16rem] rounded-t-3xl object-obtain' src={greekFeta} />
                        </div>
                        <div>
                            <div className='flex justify-between mt-2 p-2.5'>
                                <div className='ml-1'>
                                    <h1 className='font-medium text-[1.1rem]'>Mozarella Sticks</h1>
                                </div>
                                <div className='text-yellow-500 mr-1'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.8rem] pl-3.5 pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.3rem] font-bold text-primary pl-3.5'>$15</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}