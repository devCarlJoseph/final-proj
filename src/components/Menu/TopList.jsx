import Wave from "react-wavify"
import Menu1 from "../../assets/pictures/pepperoni.jpg"


export default function Sweets() {
    return (
        <div>
            <div className='mt-[-6rem]'>
                <Wave fill='#ffffff'
                    paused={false}
                    style={{
                        display: 'flex',
                    }}
                    options={{
                        height: 10,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className="h-[50rem] bg-white">
                <div className='text-center'>
                    <div className='text-[2rem] font-semibold'>Top List</div>
                    <span className='text-[1rem] text-text font-medium'>Our mainstay menu</span>
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
            </div>
        </div>
    )
}