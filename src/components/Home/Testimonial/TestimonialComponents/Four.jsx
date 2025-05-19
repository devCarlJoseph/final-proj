import GuestOne from "../../../../assets/pictures/pp 1.jpg"
import GuestTwo from "../../../../assets/pictures/pp 2.jpg"



export default function Four() {
    return (
        <div>
            <div class="flex justify-center items-center gap-4 mt-[3rem] tablet:flex-col">
                <div class="w-[35rem] h-[20.3rem] backdrop-blur-md bg-white/20 rounded-[1rem] border-1 border-white/20 cp:w-[20.5rem] cp:h-[18rem] sCP:w-[19rem] sCP:h-[18.9rem]">
                    <div class="flex gap-2 ml-[1rem] mt-[1rem] cp:mt-[0.5rem]">
                        <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500">
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                        </div>
                        <h1 class="text-[1.3rem] text-white font-medium cp:text-[1rem]">5.0</h1>
                    </div>
                    <div class="ml-[1rem] mt-[1rem] cp:mt-[0.5rem]">
                        <h1 class="text-[1.5rem] text-white font-medium cp:text-[1.1rem]">Absolutely fantastic!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] cp:text-[0.8rem]">We were greeted with warm smiles the moment we walked in. The staff made us feel welcomed and taken care of the entire evening. The food was beautifully presented and packed with flavor. The cozy and inviting atmosphere added to the experience. I especially loved the house special—it was unforgettable. We’ll definitely be back soon! </p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] cp:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white cp:w-[3.5rem] cp:h-[3.5rem]" src={GuestTwo} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  cp:w-[3rem] cp:h-[3rem]"></div>
                        <div class="mt-[0.3rem] cp:mt-0">
                            <h1 class="text-white text-[1.2rem] cp:text-[1rem]">Nina D.</h1>
                            <p class="text-gray-200 cp:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
                <div class="w-[35rem] h-[20.3rem] backdrop-blur-md bg-white/20 rounded-[1rem] border-1 border-white/20 cp:w-[20.5rem] cp:h-[18rem] sCP:w-[19rem] sCP:h-[18.9rem]">
                    <div class="flex gap-2 ml-[1rem] mt-[1rem] cp:mt-[0.5rem]">
                        <div class="flex gap-1 items-center text-[1.3rem] text-yellow-500 cp:text-[1rem]">
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-star cp:text-[0.9rem]"></i>
                        </div>
                        <h1 class="text-[1.3rem] text-white font-medium cp:text-[1rem]">5.0</h1>
                    </div>
                    <div class="ml-[1rem] mt-[1rem] cp:mt-[0.5rem]">
                        <h1 class="text-[1.5rem] text-white font-medium cp:text-[1.2rem] max-2xs:text-[1.1rem]">A hidden gem!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] max-xl:mt-[0.5rem] cp:text-[0.8rem] max-xs:mt-[0.2rem] max-2xs:text-[0.75rem] max-xs:pr-3">This place completely exceeded our expectations. Every dish was flavorful, fresh, and clearly prepared with care. The staff was kind, attentive, and very knowledgeable about the menu. The ambiance was intimate and perfect for a relaxing dinner. I’m already planning another visit. It’s one of the best dining experience.</p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] cp:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white cp:w-[3.5rem] cp:h-[3.5rem]" src={GuestOne} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  cp:w-[3rem] cp:h-[3rem] max-sm:top-[0.25rem] max-2xs:top-[0.3rem]"></div>
                        <div class="mt-[0.3rem]">
                            <h1 class="text-white text-[1.2rem] cp:text-[1rem]">Liam G</h1>
                            <p class="text-gray-200 cp:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}