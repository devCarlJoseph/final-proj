import GuestOne from "../../../../assets/pictures/pp 1.jpg"
import GuestTwo from "../../../../assets/pictures/pp 2.jpg"



export default function Three() {
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
                        <h1 class="text-[1.5rem] text-white font-medium cp:text-[1.1rem]">Incredible service and food!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] cp:text-[0.8rem]">From start to finish, the staff made sure we had everything we needed. The service was friendly, attentive, and efficient without being intrusive. Every plate looked and tasted like a work of art. The flavors were balanced and the ingredients fresh. It was clear that a lot of care went into the whole experience. </p>
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
                        <h1 class="text-[1.5rem] text-white font-medium cp:text-[1.1rem]">Perfect for date night!</h1>
                        <p class="text-gray-300 pr-5 mt-[0.5rem] cp:text-[0.8rem]">The setting was romantic, with soft lighting and great background music. Our server was friendly and helped us choose a wonderful wine pairing. Each dish was creative and tasted amazing. Dessert was the perfect sweet ending to our evening. We felt relaxed and well taken care of the entire time. Yeah!! </p>
                    </div>
                    <div class="flex items-center gap-3 relative mt-[1rem] ml-[1rem] cp:mt-[0.5rem]">
                        <img class="w-[4rem] h-[4rem] rounded-[50%] border-1 border-white cp:w-[3.5rem] cp:h-[3.5rem]" src={GuestOne} />
                        <div class="w-[3.5rem] h-[3.5rem] border-2 border-white rounded-[50%] absolute top-1 left-[0.25rem]  cp:w-[3rem] cp:h-[3rem]"></div>
                        <div class="mt-[0.3rem] cp:mt-0">
                            <h1 class="text-white text-[1.2rem] cp:text-[1rem]">Nina D.</h1>
                            <p class="text-gray-200 cp:text-[0.8rem]">Happy Guest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}