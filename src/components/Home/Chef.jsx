import Wave from "react-wavify"
import ChefOne from "../../assets/pictures/executive.jpg"
import ChefTwo from "../../assets/pictures/sous chef.jpg"
import ChefThree from "../../assets/pictures/pastry.jpg"

export default function Dine() {
    return (
        <div>
            <div className='mt-[-9.5rem]'>
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
            <div className="bg-background h-[50rem]">
            <div>
                    <div>
                        <div class="pt-[1rem] text-center text-primary pb-[1rem] max-lg:pt-[4.5rem] max-sm:pt-[3rem]">
                            <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>    
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium max-sm:text-[1rem] max-2xs:text-[0.85rem]">MEET THE CHEF</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] text-primary max-sm:text-[1.5rem] max-2xs:text-[1.25rem]">The Master <span class="text-black">Behind the Menu</span></h1>
                        </div> 
                    </div>
                    <div class="flex justify-evenly items-center mt-[3rem] max-lg:flex-col max-lg:gap-[2rem] max-2xs:mt-[2rem]">
                        <div class="ml-[17rem] relative max-2xl:ml-[7.5rem] max-xl:ml-[0.5rem] max-lg:ml-0">
                            <img class="w-[25rem] h-[25rem] rounded-t-[50%] rounded-[1rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefOne} />
                            <div class="flex gap-[1.2rem] absolute bottom-[7.5rem] left-[4.7rem] max-xl:left-[2.3rem] max-xl:bottom-[6rem]" >
                                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                                    <i class="fa-brands fa-facebook text-[2rem] text-white mt-[0.38rem]"></i>
                                </div>
                                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                                    <i class="fa-brands fa-square-x-twitter text-[2rem] mt-[0.35rem] text-white"></i>
                                </div>
                                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                                    <i class="fa-brands fa-pinterest text-[2rem] mt-[0.35rem] text-white"></i>
                                </div>
                                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                                    <i class="fa-brands fa-square-instagram text-[2rem] mt-[0.35rem] text-white"></i>
                                </div>
                            </div>
                            <div class="text-center pt-[1rem]">
                                <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                                <h1 class="text-primary">Executive Chef</h1>
                            </div>
                        </div>
                        <div>
                            <img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefTwo} />
                            <div class="text-center pt-[1rem]">
                                <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                                <h1 class="text-primary">Sous Chef</h1>
                            </div>
                        </div>
                        <div class="mr-[17rem] max-2xl:mr-[7.5rem] max-xl:mr-[0.5rem] max-lg:mr-0">
                            <img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefThree} />
                            <div class="text-center pt-[1rem]">
                                <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                                <h1 class="text-primary">Executive Chef</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}