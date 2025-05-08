import GuestOne from "../../../../assets/pictures/pp 1.jpg"
import GuestTwo from "../../../../assets/pictures/pp 2.jpg"



export default function Three() {
    return (
        <div>
            <div class="flex justify-center items-center gap-4 mt-[3rem] max-lg:flex-col">
                <div class="w-[35rem] h-[20.3rem] backdrop-blur-md bg-white/20 rounded-[1rem] border-1 border-white/20 max-xl:w-[28rem] max-lg:w-[32rem] max-lg:h-[20.5rem] max-sm:w-[22rem] max-sm:h-[18rem] max-xs:w-[20rem] max-xs:h-[17rem] max-2xs:w-[18rem] max-2xs:h-[16.5rem]">
                    <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                        <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h1 class="text-[1.3rem] text-white font-medium max-xs:text-[1rem]">5.0</h1>
                    </div>
                    <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                        <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Best dining experience we've had.</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">Everything we ordered was exceptional, from appetizers to dessert. The pacing of the meal was perfect, and we never felt rushed. Our server made great recommendations and added a personal touch to the night. The chef even came out to greet guests, which was a lovely surprise. The ambiance was elegant yet comfortable. </p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={GuestTwo} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                        <div class="mt-[0.3rem]">
                            <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]">Karen and Tom S.</h1>
                            <p class="text-gray-200 max-xs:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
                <div class="w-[35rem] h-[20.3rem] backdrop-blur-md bg-white/20 rounded-[1rem] border-1 border-white/20 max-xl:w-[28rem] max-lg:w-[32rem] max-lg:h-[20.5rem] max-sm:w-[22rem] max-sm:h-[18rem] max-xs:w-[20rem] max-xs:h-[17rem] max-2xs:w-[18rem] max-2xs:h-[16.5rem]">
                    <div class="flex gap-2 ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                        <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 max-sm:text-[1rem]">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h1 class="text-[1.3rem] text-white font-medium max-xs:text-[1rem]">5.0</h1>
                    </div>
                    <div class="ml-[1rem] mt-[1rem] max-xs:mt-[0.5rem]">
                        <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Great for the whole family.</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">We visited with our kids and had a fantastic time. The staff was patient, accommodating, and genuinely kind to our family. There was something on the menu for everyone, and all the dishes were delicious. It’s not easy to find a place that’s both family-friendly and high quality. The relaxed setting made it easy to enjoy the evening.</p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={GuestOne} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                        <div class="mt-[0.3rem]">
                            <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]"> The Parker Family</h1>
                            <p class="text-gray-200 max-xs:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}