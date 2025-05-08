import Wave from 'react-wavify'
import Menu1 from "../../assets/pictures/pepperoni.jpg"
import Button from './Button'



export default function SectionThree() {
    return (
        <div className='box-border w-full'>
            <div className='mt-[-6rem]'>
                <Wave fill='#fef1e1'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className='h-[73rem] bg-secondary box-border'>
                <div>
                    <div class="flex justify-center items-center gap-1.5 text-primary pb-[1rem] max-sm:pt-[10rem] max-sm:pb-[0.6rem] max-xs:pb-[0.5rem]">
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                    </div>
                    <div>
                        <div className="text-center">
                            <h1 className="text-primary text-[1.5rem] font-semibold pb-[1rem] max-sm:text-[1rem] max-sm:pb-[0.6rem] max-xs:text-[0.9rem] max-xs:pb-[0.5rem]">FOOD MENU</h1>
                        </div>
                        <div className="text-center font-semibold">
                            <div className="text-[2.5rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">Timeless <span class="text-primary">Culinary Delights</span></div>
                        </div>
                        <div className='text-center mt-[5.5rem]'>
                            <div className='text-[2rem] font-semibold'>Top List</div>
                            <span className='text-[1rem] text-text font-medium'>Our mainstay menu</span>
                        </div>
                    </div>  
                    <div className='flex justify-center items-center gap-5'>
                        <div className="mt-[5rem] w-[19rem] h-[22rem] bg-tertiary/80 rounded-3xl">
                            {/* for image */}
                            <div className='flex justify-center mt-[-3.5rem]'>
                                <div className='flex justify-center w-[14.5rem] h-[14.5rem] bg-white/70 rounded-[50%]'>
                                    <img className='mt-[0.2rem] w-[14rem] h-[14rem] rounded-[50%]' src={Menu1} />
                                </div>
                            </div>
                            {/* for text */}
                            <div>
                                <div className="text-center pt-5">
                                    <i className="fa-solid fa-star text-yellow-400 text-[1.2rem]"></i>
                                    <span className='text-yellow-400 text-[1.2rem] font-semibold pl-2'>8.5</span>
                                </div>
                                <div className='text-white text-center'>
                                    <div className='text-[1.2rem] font-semibold'>Pepperoni</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!</p>
                                </div>
                                <div className='text-center pt-2'>
                                    <div className='text-[1.2rem] text-white font-semibold'>$15</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[5rem] w-[22rem] h-[27.5rem] bg-primary/80 rounded-3xl">
                            {/* for image */}
                            <div className='flex justify-center mt-[-3.5rem]'>
                                <div className='flex justify-center w-[19.5rem] h-[19.5rem] bg-white/70 rounded-[50%]'>
                                    <img className='mt-[0.2rem] w-[19rem] h-[19rem] rounded-[50%]' src={Menu1} />
                                </div>
                            </div>
                            {/* for text */}
                            <div>
                                <div className="text-center pt-5">
                                    <i className="fa-solid fa-star text-yellow-400 text-[1.2rem]"></i>
                                    <span className='text-yellow-400 text-[1.2rem] font-semibold pl-2'>8.5</span>
                                </div>
                                <div className='text-white text-center'>
                                    <div className='text-[1.2rem] font-semibold'>Pepperoni</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!</p>
                                </div>
                                <div className='text-center pt-2'>
                                    <div className='text-[1.2rem] text-white font-semibold'>$15</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[5rem] w-[19rem] h-[22rem] bg-tertiary/80 rounded-3xl">
                            {/* for image */}
                            <div className='flex justify-center mt-[-3.5rem]'>
                                <div className='flex justify-center w-[14.5rem] h-[14.5rem] bg-white/70 rounded-[50%]'>
                                    <img className='mt-[0.2rem] w-[14rem] h-[14rem] rounded-[50%]' src={Menu1} />
                                </div>
                            </div>
                            {/* for text */}
                            <div>
                                <div className="text-center pt-5">
                                    <i className="fa-solid fa-star text-yellow-400 text-[1.2rem]"></i>
                                    <span className='text-yellow-400 text-[1.2rem] font-semibold pl-2'>8.5</span>
                                </div>
                                <div className='text-white text-center'>
                                    <div className='text-[1.2rem] font-semibold'>Pepperoni</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!</p>
                                </div>
                                <div className='text-center pt-2'>
                                    <div className='text-[1.2rem] text-white font-semibold'>$15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    )
}