import Wave from "react-wavify"
import image1 from "../../assets/pictures/pp 3.jpeg"
import image2 from "../../assets/pictures/pp 2.jpg"
import image3 from "../../assets/pictures/pp 1.jpg"
import image4 from "../../assets/pictures/pp4.jpg"
import image5 from "../../assets/pictures/pp5.jpg"
import image6 from "../../assets/pictures/pp6.jpg"
import image7 from "../../assets/pictures/pp7.jpg"
import image8 from "../../assets/pictures/pp8.webp"
import image9 from "../../assets/pictures/pp9.jpg"
import image10 from "../../assets/pictures/pp10.avif"


export default function TextCont() {
    return (
        <div className="">
            <div className='mt-[-6rem]'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{
                        display: 'flex',
                    }}
                    options={{
                        height: 100,
                        amplitude: 10,
                        speed: 0.15,
                        points: 10
                    }}
                />
            </div>
            <div className="bg-background h-[130rem] tablet:h-[240rem]">
                <div>
                    <div>
                        <div class="pt-[1.5rem]">
                            <div class="flex justify-center gap-1.5 text-center text-primary pb-[1rem]">
                                <i class="fa-solid fa-diamond"></i>
                                <i class="fa-solid fa-diamond"></i>
                                <i class="fa-solid fa-diamond"></i>
                            </div>
                            <div class="text-center text-primary">
                                <h1 class="text-[1.2rem] font-medium pb-[1rem] max-sm:pb-[0.5rem]">TESTIMONIALS</h1>
                            </div>
                            <div class="text-center font-semibold">
                                <h1 class="text-[2.5rem] text-black max-sm:text-[2rem] max-xs:text-[1.5rem]">Testimonials from Our <br /><span class="text-primary">Valued Guests</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[2rem] mt-[2rem] tablet:flex-col">
                        <div className="flex flex-col gap-[2rem]">
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image1} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Nina D.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image2} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Alishia</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image3} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Joy A.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image4} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">John D.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image5} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Althea T.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[2rem]">
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image6} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Shane S.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image7} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Joseph C.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image8} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Daniel P.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image9} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Altina A.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35rem] h-[20.3rem] border-[1px] border-gray-500 backdrop-blur-md bg-white shadow-sm rounded-[1rem] border-1 border-white/20 tablet:w-[29rem] tablet:h-[19.3rem] cp:w-[25rem] cp:h-[21rem] myPhone:w-[21rem] myPhone:h-[23rem] sCP:w-[19rem] sCP:h-[25rem]">
                                <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                        <i class="fa-solid fa-star tablet:text-[0.9rem]"></i>
                                    </div>
                                    <h1 class="text-[1.3rem] text-text font-medium tablet:text-[1rem]">5.0</h1>
                                </div>
                                <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                                    <h1 class="text-[1.5rem] text-text font-medium tablet:text-[1.25rem]">Fresh, flavorful, and unforgettable.</h1>
                                    <p class="text-text pr-5 mt-[0.5rem] tablet:text-[0.9rem] tablet:pr-5">Every bite of our meal was packed with flavor and made from the freshest ingredients. You can tell the kitchen takes pride in what they serve. The presentation was beautiful without being overdone. The service was prompt and professional, adding to the overall experience. I’m still thinking about the pasta it was that good. </p>
                                </div>
                                <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                                    <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={image10} />
                                    <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                                    <div class="mt-[0.3rem]">
                                        <h1 class="text-text text-[1.2rem] max-xs:text-[1rem]">Mirasol D.</h1>
                                        <p class="text-gray-500 max-xs:text-[0.8rem]">Happy Guest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}