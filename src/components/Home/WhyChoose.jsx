import Wave from "react-wavify"
import person1 from "../../assets/pictures/pp 1.jpg"
import person2 from "../../assets/pictures/pp 2.jpg"
import person3 from "../../assets/pictures/pp 3.jpeg"
import image1 from "../../assets/pictures/why choose us 2.avif"
import image2 from "../../assets/pictures/why choose us 1.avif"


export default function WhyChoose() {
    return (
        <div>
            <div className='mt-[-4rem]'>
                <Wave fill='#faf8f7'
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
            <div className="bg-background h-[53rem] tablet:h-[80rem]">
                <div class="flex justify-center items-center gap-1 pt-[1rem] text-center text-primary pb-[1rem]  max-sm:pt-[2rem] max-sm:pb-[0.5rem]">
                    <i class="fa-solid fa-diamond max-sm:text-[0.9rem] max-2xs:text-[0.7rem]"></i>
                    <i class="fa-solid fa-diamond max-sm:text-[0.9rem] max-2xs:text-[0.7rem]"></i>
                    <i class="fa-solid fa-diamond max-sm:text-[0.9rem] max-2xs:text-[0.7rem]"></i>
                </div>
                <div class="text-center text-primary">
                    <h1 class="text-[1.2rem] font-medium pb-[0.5rem] max-sm:pb-[0.2rem] max-2xs:text-[0.95rem]">WHY CHOOSE US</h1>
                </div>
                <div class="text-center font-semibold">
                    <h1 class="text-[2.5rem] max-sm:text-[2rem] max-2xs:text-[1.5rem]">Why <span class="text-primary">Dine With Us?</span></h1>
                </div>
                <div class="flex justify-center items-center box-border gap-[1.5rem] mt-[3rem] tablet:flex-col">
                    <div class="relative w-[25%] tablet:w-[50%]">
                        <img src={image1} class="w-[30rem] h-[30rem] rounded-[40%] object-cover max-sm:h-[25rem] max-2xs:h-[20rem]" />
                        <div class="w-[22rem] h-[28rem] border-[3px] border-white rounded-[40%] absolute top-[1rem] left-[0.9rem] max-sm:h-[23rem] max-sm:w-[19.75rem] max-xs:w-[17.3rem] max-2xs:h-[18.8rem] max-2xs:w-[14.95rem] max-2xs:top-[0.6rem] max-2xs:left-[0.5rem]"></div>
                        <div class="w-[17rem] h-[6rem] bg-primary rounded-[1.2rem] border-[5px] border-white absolute top-[25.5rem] left-[3.5rem] max-sm:w-[14rem] max-sm:h-[5rem] max-sm:left-[4rem] max-sm:top-[19rem] max-xs:w-[13rem] max-xs:left-[3.2rem] max-2xs:w-[12rem] max-2xs:h-[4rem] max-2xs:top-[16rem] max-2xs:left-[2rem]">
                            <div class="relative">
                                <div>
                                    <img src={person1} class="w-[3.5rem] h-[3.5rem] rounded-[50%] border-[3px] border-white absolute top-[1rem] left-[1rem] max-sm:left-[0.8rem] max-sm:top-[0.65rem] max-2xs:w-[2.5rem] max-2xs:h-[2.5rem] max-xs:left-[0.6rem] max-2xs:left-[0.5rem] max-2xs:top-[0.45rem]" />
                                    <img src={person2} class="w-[3.5rem] h-[3.5rem] rounded-[50%] border-[3px] border-white absolute top-[1rem] left-[2.5rem] max-sm:left-[2.3.5rem] max-sm:top-[0.65rem] max-2xs:w-[2.5rem] max-2xs:h-[2.5rem] max-xs:left-[2.1rem] max-2xs:left-[2rem] max-2xs:top-[0.45rem]" />
                                    <img src={person3} class="w-[3.5rem] h-[3.5rem] rounded-[50%] border-[3px] border-white absolute top-[1rem] left-[4rem] max-sm:left-[3.8rem] max-sm:top-[0.65rem] max-2xs:w-[2.5rem] max-2xs:h-[2.5rem] max-xs:left-[3.6rem] max-2xs:left-[3.5rem] max-2xs:top-[0.45rem]" />
                                </div>
                                <div class="w-[3.5rem] h-[3.5rem] bg-black rounded-[50%] border-[3px] border-white text-center absolute top-[1rem] left-[5.5rem] max-sm:left-[5.3rem] max-sm:top-[0.65rem] max-2xs:w-[2.5rem] max-2xs:h-[2.5rem] max-xs:left-[5.1rem] max-2xs:left-[5rem] max-2xs:top-[0.45rem]">
                                    <i class="fa-solid fa-plus text-primary text-[1.2rem] mt-[1rem] max-2xs:mt-[0.5rem]"></i>
                                </div>
                                <div class="absolute top-[1rem] left-[10.5rem] max-sm:left-[8.9rem] max-sm:top-[0.65rem] max-xs:left-[8.5rem] max-2xs:left-[8rem]">
                                    <h1 class="text-[1.2rem] font-medium text-white max-sm:text-[1rem] max-2xs:text-[0.8rem]">4.9 Star</h1>
                                    <span class="text-[0.8rem] text-gray-200 max-2xs:text-[0.65rem]">Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[17%] relative box-border tablet:hidden">
                        <div>
                            <img src={image2} class="w-[30rem] h-[30rem] rounded-[40%] object-cover" />
                            <div class="w-[14.8rem] h-[28rem] border-[3px] border-white rounded-[40%] absolute top-[1rem] left-[0.75rem]"></div>
                        </div>
                    </div>
                    <div class="flex flex-col w-[30%] tablet:w-[70%] tablet:mt-[0.5rem]">
                        <div class="text-start max-sm:text-center">
                            <p class="pb-[1rem] text-gray-500 max-sm:text-[0.8rem] max-2xs:text-[0.7rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est illo commodi perspiciatis placeat quaerat! Eligendi deleniti officiis laborum,</p>
                        </div>
                        <hr class="border-t-1 border-t-solid border-gray-300" />
                        <div class="flex justify-evenly items-center">
                            <div>
                                <h1 class="text-primary text-[2.5rem] font-semibold max-sm:text-[1.5rem] max-2xs:text-[1.3rem]">20+</h1>
                                <p class="text-gray-400 max-sm:text-[0.8rem] max-2xs:text-[0.7rem]">Expert Chefs</p>
                            </div>
                            <div class="border-r-[1px] border-r-gray-300 h-[5rem] mt-[2rem] mb-[2rem] max-sm:h-[3.5rem] max-sm:mt-[1rem] max-sm:mb-[1rem] max-2xs:h-[3rem]"></div>
                            <div>
                                <h1 class="text-primary text-[2.5rem] font-semibold max-sm:text-[1.5rem] max-2xs:text-[1.3rem]">125+</h1>
                                <p class="text-gray-400 max-sm:text-[0.8rem] max-2xs:text-[0.7rem]">Seating Options</p>
                            </div>
                            <div class="border-r-[1px] border-r-gray-300 h-[5rem] mt-[2rem] mb-[2rem] max-sm:h-[3.5rem] max-sm:mt-[1rem] max-sm:mb-[1rem] max-2xs:h-[3rem]"></div>
                            <div class="mr-[2rem]">
                                <h1 class="text-primary text-[2.5rem] font-semibold max-sm:text-[1.5rem] max-2xs:text-[1.3rem]">60+</h1>
                                <p class="text-gray-400 max-sm:text-[0.8rem] max-2xs:text-[0.7rem]">Awards</p>
                            </div>
                        </div>
                        <hr class="border-t-1 border-t-solid border-gray-300" />
                        <div class="mt-[2rem] tablet:mt-[1rem]">
                            <div class="flex justify-start items-center gap-4 tablet:justify-cente">
                                <i class="fa-solid fa-circle-check text-[1.7rem] text-primary max-sm:text-[1rem]"></i>
                                <h1 class="text-[1.2rem] text-gray-400 max-sm:text-[0.9rem] max-2xs:text-[0.75rem]">Luxorious AC Dining & Comfortable Seating</h1>
                            </div>
                            <div class="flex justify-start items-center gap-4 mt-[0.5rem] max-sm:gap-2">
                                <i class="fa-solid fa-circle-check text-[1.7rem] text-primary max-sm:text-[1rem]"></i>
                                <h1 class="text-[1.2rem] text-gray-400 max-sm:text-[0.9rem] max-2xs:text-[0.75rem]">Unrivaled Service, Remarkable Experience</h1>
                            </div>
                            <div class="flex justify-start items-center gap-4 mt-[0.5rem] max-sm:gap-2">
                                <i class="fa-solid fa-circle-check text-[1.7rem] text-primary max-sm:text-[1rem]"></i>
                                <h1 class="text-[1.2rem] text-gray-400 max-sm:text-[0.9rem] max-2xs:text-[0.75rem]">Where Comfort Meets Exquisite Cuisine</h1>
                            </div>
                        </div>
                        <div className="flex tablet:justify-center">
                            <div class="w-[10rem] h-[2.5rem] bg-primary mt-[2rem] rounded-[1.5rem] text-center cursor-pointer hover:bg-tertiary/80 max-lg:ml-[35%] max-sm:w-[7rem] max-sm:h-[1.5rem] max-sm:mt-[1rem] max-xs:ml-[34%] max-2xs:w-[6rem]">
                                <button class="text-white mt-[0.5rem] font-medium cursor-pointer max-sm:text-[0.8rem] max-sm:mt-[0.15rem] max-2xs:text-[0.75rem]">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}