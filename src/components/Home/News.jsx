import Wave from "react-wavify"
import Chef from "../../assets/pictures/chef's insights.webp"
import Experience from "../../assets/pictures/experience1.png"
import Experience2 from "../../assets/pictures/experience2.jpg"



export default function News() {
    return (
        <div>
            <div className='mt-[-4.5rem]'>
                <Wave fill='#fcfaf9'
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
            <div className="bg-background h-[50rem] ">
                <div>
                    <div>
                        <div className="pt-[6rem] text-center text-primary pb-[1rem]">
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                        </div>
                        <div className="text-center text-primary">
                            <h1 className="text-[1.2rem] font-medium pb-[1rem]">NEWS & BLOGS</h1>
                        </div>
                        <div className="text-center font-semibold">
                            <h1 className="text-[2.5rem]">Our Latest <span class="text-primary">News & Blogs</span></h1>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mt-[2rem] gap-[4rem] max-lg:flex-col max-lg:gap-[2rem]">
                            <div className="ml-[16rem] relative max-xl:ml-[3rem] max-lg:ml-0 max-sm:ml-[1.3rem] max-xs:ml-[0.75rem] max-2xs:ml-[0.5rem]">
                                <img className="w-[25rem] h-[18rem] rounded-[1.5rem] object-cover max-xl:w-[22rem] max-lg:w-[40rem] max-lg:h-[20rem] max-sm:w-[24rem] max-sm:h-[18rem] max-xs:w-[22rem] max-2xs:w-[19rem] max-2xs:h-[16.5rem]" src={Experience} />
                                <div className="w-[10rem] h-[2.5rem] backdrop-blur-md bg-white/10 border-2 border-white text-center absolute top-[14.5rem] left-[1rem] rounded-[1.5rem] cursor-pointer hover:bg-primary/50 max-lg:top-[16.5rem] max-sm:top-[14.5rem] max-2xs:top-[13rem]">
                                    <button className="mt-[0.3rem] text-white cursor-pointer font-medium">Dining Experience</button>
                                </div>
                                <div>
                                    <h1 className="text-gray-500 font-sm mt-[0.7rem] max-xs:text-[0.9rem]">BY JENNY LIM <span className="text-primary ml-[1rem] mr-[1rem] text-[1.2rem]">•</span> FEB 19, 2025</h1>
                                    <h1 className="mt-[0.3rem] font-medium text-[1.35rem] max-lg:text-[2rem]  max-sm:text-[1.09rem] max-2xs:text-[1rem]">5 Tips for the Perfect Romantic Dinner: <br /> Creating an Unforgettable Experience</h1>
                                    <p className="mt-[0.5rem] mb-[0.7rem] text-gray-500 max-sm:text-[0.95rem] max-xs:text-[0.9rem] max-2xs:text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing <br className="max-lg:hidden" /> elit, assumenda hic magnam!</p>
                                    <div className="flex gap-3">
                                        <ins className="text-primary cursor-pointer max-2xs:text-[0.8rem]">Read More</ins>
                                        <i className="fa-solid fa-arrow-right-long mt-[0.4rem] text-primary max-2xs:mt-[0.2rem]"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div classNamae="max-sm:ml-[1.3rem] max-xs:ml-[0.75rem] max-2xs:ml-[0.5rem]">
                                    <img className="w-[25rem] h-[18rem] rounded-[1.5rem] object-cover max-xl:w-[22rem] max-lg:w-[40rem] max-lg:h-[20rem] max-sm:w-[24rem] max-sm:h-[18rem] max-xs:w-[22rem] max-2xs:w-[19rem] max-2xs:h-[16.5rem]" src={Chef} />
                                    <div className="w-[8rem] h-[2.5rem] backdrop-blur-md bg-white/10 border-2 border-white text-center absolute top-[14.5rem] left-[1rem] rounded-[1.5rem] cursor-pointer hover:bg-primary/50 max-lg:top-[16.5rem] max-sm:top-[14.5rem] max-2xs:top-[13rem]">
                                        <button className="mt-[0.3rem] text-white cursor-pointer font-medium">Chef's Insights</button>
                                    </div>
                                    <div>
                                        <h1 className="text-gray-500 font-sm mt-[0.7rem] max-xs:text-[0.9rem]">BY JENNY LIM <span className="text-primary ml-[1rem] mr-[1rem] text-[1.2rem]">•</span> FEB 19, 2025</h1>
                                        <h1 className="mt-[0.3rem] font-medium text-[1.35rem] max-lg:text-[2rem]  max-sm:text-[1.09rem] max-2xs:text-[1rem]">5 Tips for the Perfect Romantic Dinner: <br /> Creating an Unforgettable Experience</h1>
                                        <p className="mt-[0.5rem] mb-[0.7rem] text-gray-500 max-sm:text-[0.95rem] max-xs:text-[0.9rem] max-2xs:text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing <br className="max-lg:hidden" /> elit, assumenda hic magnam!</p>
                                        <div className="flex gap-3">
                                            <ins className="text-primary cursor-pointer max-2xs:text-[0.8rem]">Read More</ins>
                                            <i className="fa-solid fa-arrow-right-long mt-[0.4rem] text-primary max-2xs:mt-[0.2rem]"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-[16rem] relative max-xl:mr-[3rem] max-lg:mr-0 max-sm:ml-[1.3rem] max-xs:ml-[0.75rem] max-2xs:ml-[0.5rem]">
                                <img className="w-[25rem] h-[18rem] rounded-[1.5rem] object-cover max-xl:w-[22rem] max-lg:w-[40rem] max-lg:h-[20rem]  max-sm:w-[24rem] max-sm:h-[18rem] max-xs:w-[22rem] max-2xs:w-[19rem] max-2xs:h-[16.5rem]" src={Experience2} />
                                <div className="w-[10rem] h-[2.5rem]  backdrop-blur-md bg-white/10 border-2 border-white text-center absolute top-[14.5rem] left-[1rem] rounded-[1.5rem] cursor-pointer hover:bg-primary/50 max-lg:top-[16.5rem] max-sm:top-[14.5rem] max-2xs:top-[13rem]">
                                    <button className="mt-[0.3rem] text-white cursor-pointer font-medium">Dining Experience</button>
                                </div>
                                <div>
                                    <h1 className="text-gray-500 font-sm mt-[0.7rem] max-xs:text-[0.9rem]">BY JENNY LIM <span className="text-primary ml-[1rem] mr-[1rem] text-[1.2rem]">•</span> FEB 19, 2025</h1>
                                    <h1 className="mt-[0.3rem] font-medium text-[1.35rem]  max-lg:text-[2rem] max-sm:text-[1.09rem] max-2xs:text-[1rem]">5 Tips for the Perfect Romantic Dinner: <br /> Creating an Unforgettable Experience</h1>
                                    <p className="mt-[0.5rem] mb-[0.7rem] text-gray-500 max-sm:text-[0.95rem] max-xs:text-[0.9rem] max-2xs:text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing <br className="max-lg:hidden" /> elit, assumenda hic magnam!</p>
                                    <div className="flex gap-3">
                                        <ins className="text-primary cursor-pointer max-2xs:text-[0.8rem]">Read More</ins>
                                        <i className="fa-solid fa-arrow-right-long mt-[0.4rem] text-primary max-2xs:mt-[0.2rem]"></i>
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