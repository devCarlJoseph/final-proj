import GuestOne from "../../../../assets/pictures/pp 1.jpg"
import GuestTwo from "../../../../assets/pictures/pp 2.jpg"


export default function One() {
    return (
        <div>
            <div class="flex justify-center items-center gap-4 mt-[3rem] tablet:flex-col">
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
                        <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Perfect for date night!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">The setting was romantic, with soft lighting and great background music. Our server was friendly and helped us choose a wonderful wine pairing. Each dish was creative and tasted amazing. Dessert was the perfect sweet ending to our evening. We felt relaxed and well taken care of the entire time. We're definitely coming back for our next special occasion.</p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={GuestTwo} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                        <div class="mt-[0.3rem]">
                            <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]">Elena & Marcus</h1>
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
                        <h1 class="text-[1.5rem] text-white font-medium max-sm:text-[1.2rem] max-2xs:text-[1.1rem]">Incredible service and food!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] max-xl:mt-[0.5rem] max-sm:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">This place completely exceeded our expectations. Every dish was flavorful, fresh, and clearly prepared with care. The staff was kind, attentive, and very knowledgeable about the menu. The ambiance was intimate and perfect for a relaxing dinner. I’m already planning another visit. It’s one of the best dining experiences I’ve had in a long time.</p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] max-xl:mt-[0.7rem] max-xs:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white max-xs:w-[3.5rem] max-xs:h-[3.5rem]" src={GuestOne} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  max-xs:w-[3rem] max-xs:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                        <div class="mt-[0.3rem]">
                            <h1 class="text-white text-[1.2rem] max-xs:text-[1rem]">Michelle L.</h1>
                            <p class="text-gray-200 max-xs:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}