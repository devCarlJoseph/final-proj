import { useState } from "react";
import image1 from "../../assets/pictures/about us pic.webp"
import Wave from "react-wavify"
import PlayStatus from "../Home/Hero/GlimpseH"
import Video from "../Home/Background/GlimpseB"


export default function Mission() {

    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
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
            <div class="bg-secondary h-[100rem] overflow-hidden tablet:h-[60rem] cp:h-[68rem]">
                <div class="relative">
                    <div>
                        <div class="flex justify-center items-center gap-[2rem] mt-[2rem] tablet:gap-[1rem] cp:flex-col">
                            <div class="bg-primary w-[37rem] h-[12.5rem] rounded-[1.5rem] relative overflow-hidden tablet:w-[22.5rem] tablet:h-[17rem]">
                                <div class="absolute right-[-0.5rem] top-[-1rem]">
                                    <i class="fa-solid fa-rocket text-white/40 text-[5.8rem] pt-[0.9rem]"></i>
                                </div>
                                <div class="flex items-center gap-[1rem] ml-[1.5rem] mt-[1.5rem]">
                                    <div class="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-secondary/70 text-center">
                                        <i class="fa-solid fa-rocket text-white text-[1.8rem] pt-[0.9rem]"></i>
                                    </div>
                                    <div>
                                        <h1 class="text-white text-[1.5rem] font-medium">Our Vision</h1>
                                    </div>
                                </div>
                                <div class="ml-[1.5rem] mt-[1rem]">
                                    <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, totam tempora? Iure, sapiente odit quae cupiditate, in voluptate perferendis magnam minima exercitationem natus error optio. Quam magni ullam ad est!</p>
                                </div>
                            </div>
                            <div class="bg-white w-[37rem] h-[12.5rem] rounded-[1.5rem] relative overflow-hidden tablet:w-[22.5rem] tablet:h-[17rem]">
                                <div class="absolute right-[-0.5rem] top-[-1rem]">
                                    <i class="fa-solid fa-eye text-gray-100 text-[5.8rem] pt-[0.9rem]"></i>
                                </div>
                                <div class="flex items-center gap-[1rem] ml-[1.5rem] mt-[1.5rem]">
                                    <div class="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-primary text-center">
                                        <i class="fa-solid fa-eye text-white text-[1.8rem] pt-[0.9rem]"></i>
                                    </div>
                                    <div>
                                        <h1 class="text-gray-600 text-[1.5rem] font-medium">Our Mission</h1>
                                    </div>
                                </div>
                                <div class="ml-[1.5rem] mt-[1rem]">
                                    <p class="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae vitae et dignissimos consequuntur nesciunt culpa laborum quidem repellat? Soluta aliquid animi suscipit alias voluptatum odit! Tempore laboriosam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mt-[5rem]">
                            <img class="w-[75.5rem] h-[43.8rem] rounded-[1.5rem] object-obtain tablet:w-[45rem] tablet:h-[25rem] cp:w-[25rem] cp:h-[14rem]" src={image1} />
                            <div>
                                <Video playStatus={playStatus} />
                            </div>
                            <div>
                                <div>
                                    <PlayStatus
                                        setPlayStatus={setPlayStatus}
                                        playStatus={playStatus} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="w-[78%] h-[13rem] bg-tertiary ml-[22%] absolute bottom-[-6.5rem] rounded-l-[1.5rem] z-[1] tablet:h-[8rem] tablet:bottom-[-1.3rem] cp:hidden">
                            <div class="flex justify-evenly">
                                <div class="mt-[3rem] tablet:text-center tablet:mt-[1.5rem]">
                                    <h1 class="text-primary text-[2.5rem] tablet:text-[2rem]">150+</h1>
                                    <h4 class="text-white text-[1.5rem] tablet:text-[1rem]">Team Members</h4>
                                </div>
                                <div class="h-[8rem] border-l-2 border-l-gray-100/20 mt-[2.2rem] tablet:mt-[1rem] tablet:h-[6rem]"></div>
                                <div class="mt-[3rem] tablet:text-center tablet:mt-[1.5rem]">
                                    <h1 class="text-primary text-[2.5rem] tablet:text-[2rem]">60,000+</h1>
                                    <h4 class="text-white text-[1.5rem] tablet:text-[1rem]">Happy Guests</h4>
                                </div>
                                <div class="h-[8rem] border-l-2 border-l-gray-100/20 mt-[2.2rem] tablet:mt-[1rem] tablet:h-[6rem]"></div>
                                <div class="mt-[3rem] tablet:text-center tablet:mt-[1.5rem]">
                                    <h1 class="text-primary text-[2.5rem] tablet:text-[2rem]">99%</h1>
                                    <h4 class="text-white text-[1.5rem] tablet:text-[1rem]">Guest Satisfaction</h4>
                                </div>
                                <div class="h-[8rem] border-l-2 border-l-gray-100/20 mt-[2.2rem] tablet:mt-[1rem] tablet:h-[6rem]"></div>
                                <div class="mt-[3rem] tablet:text-center tablet:mt-[1.5rem]">
                                    <h1 class="text-primary text-[2.5rem] tablet:text-[2rem]">18+</h1>
                                    <h4 class="text-white text-[1.5rem] tablet:text-[1rem]">Years Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}