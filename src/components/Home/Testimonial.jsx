import Wave from "react-wavify"

export default function Testimonial() {
    return (
        <div>
            <div className='mb-[-4rem]'>
                <Wave fill='#fdfbfa'
                    paused={false}
                    style={{
                        display: 'flex',
                        rotate: '180deg'
                    }}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className="bg-[url('../../assets/pictures/testimonials.jpg')] bg-cover h-[60rem]">
                <div>
                    <div class="pt-[8rem] max-xl:pt-[10rem] max-sm:pt-[7rem]">
                        <div class="text-center text-primary pb-[1rem]">
                            <i class="fa-solid fa-diamond"></i>
                            <i class="fa-solid fa-diamond"></i>
                            <i class="fa-solid fa-diamond"></i>
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium pb-[1rem] max-sm:pb-[0.5rem]">TESTIMONIALS</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] text-white max-sm:text-[2rem] max-xs:text-[1.5rem]">Testimonials from Our <br /><span class="text-primary">Valued Guests</span></h1>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-4 mt-[2rem] max-lg:flex-col">
                        <div class="w-[35rem] h-[22.5rem] backdrop-blur-md bg-white/30 rounded-[1rem] border-1 border-white/20 max-xl:w-[28rem] max-lg:w-[32rem] max-lg:h-[20.5rem] max-sm:w-[22rem] max-sm:h-[18rem] max-xs:w-[20rem] max-xs:h-[17rem] max-2xs:w-[18rem] max-2xs:h-[16.5rem]">
                            <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                <div class="text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <h1 class="text-[1.3rem] text-white font-medium max-xs:text-[1rem]">5.0</h1>
                            </div>
                            <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Exeptional Dining Experience!</h1>
                                <p class="text-gray-300 pr-5 mt-[1rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas rem recusandae, sed eum similique fugiat officia voluptatem praesentium, enim sapiente dignissimos ipsa expedita nisi soluta. <span class="max-sm:hidden">Praesentium voluptatibus tempore maiores?</span></p>
                            </div>
                            <div class="flex items-center gap-3 relative mt-[2rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src="/assets/images/pp 1.jpg" />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]">Theresa Webb</h1>
                                        <p class="text-gray-200 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div class="w-[35rem] h-[22.5rem] backdrop-blur-md bg-white/30 rounded-[1rem] border-1 border-white/20 max-xl:w-[28rem] max-lg:w-[32rem] max-lg:h-[20.5rem] max-sm:w-[22rem] max-sm:h-[18rem] max-xs:w-[20rem] max-xs:h-[17rem] max-2xs:w-[18rem] max-2xs:h-[16.5rem]">
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-white font-medium max-xs:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Exeptional Dining Experience!</h1>
                                    <p class="text-gray-300 pr-5 mt-[1rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas rem recusandae, sed eum similique fugiat officia voluptatem praesentium, enim sapiente dignissimos ipsa expedita nisi soluta.<span class="max-sm:hidden">Praesentium voluptatibus tempore maiores?</span></p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[2rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src="/assets/images/pp 1.jpg" />
                                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem] max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                        <div class="mt-[0.3rem]">
                                            <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]">Theresa Webb</h1>
                                            <p class="text-gray-200 max-xs:text-[0.8rem]">Happy Guest</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}