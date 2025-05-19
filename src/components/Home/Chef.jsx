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
            <div className="bg-background h-[50rem] tablet:h-[100rem] cp:h-[90rem]">
            <div>
                    <div>
                        <div class="flex justify-center items-center gap-1 pt-[1rem] text-center text-primary pb-[1rem] max-lg:pt-[4.5rem] max-sm:pt-[3rem]">
                            <i class="fa-solid fa-diamond cp-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond cp-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond cp-[0.9rem]"></i>
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium cp:text-[1rem]">MEET THE CHEF</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] text-primary cp:text-[1.8rem]">The Master <span class="text-black">Behind the Menu</span></h1>
                        </div> 
                    </div>
                    <div class="flex justify-center gap-[1.5rem] items-center mt-[3rem] tablet:flex-col">
                        <div class="relative max-xl:ml-[0.5rem] max-lg:ml-0">
                            <a href="/ChefOne"><img class="w-[25rem] h-[25rem] rounded-t-[50%] rounded-[1rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefOne} /></a>
                            <div class="flex gap-[1.2rem] absolute bottom-[7.5rem] left-[2.7rem] cp:left-[1.2rem] cp:bottom-[6rem] sCP:left-[1.5rem]" >
                                <div class="w-[4rem] h-[4rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center myPhone:w-[3.5rem] myPhone:h-[3.5rem] sCP:w-[3rem] sCP:h-[3rem]">
                                    <i class="fa-brands fa-facebook text-[2.6rem] text-white mt-[0.65rem] cursor-pointer hover:text-primary/80 myPhone:text-[2.3rem] myPhone:mt-[0.5rem] sCP:text-[2rem] sCP:mt-[0.4rem]"></i>
                                </div>
                                <div class="w-[4rem] h-[4rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center myPhone:w-[3.5rem] myPhone:h-[3.5rem] sCP:w-[3rem] sCP:h-[3rem]">
                                    <i class="fa-brands fa-square-x-twitter text-[2.6rem] mt-[0.65rem] text-white cursor-pointer hover:text-primary/80 myPhone:text-[2.3rem] myPhone:mt-[0.5rem] sCP:text-[2rem] sCP:mt-[0.4rem]"></i>
                                </div>
                                <div class="w-[4rem] h-[4rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center myPhone:w-[3.5rem] myPhone:h-[3.5rem] sCP:w-[3rem] sCP:h-[3rem]">
                                    <i class="fa-brands fa-pinterest text-[2.6rem] mt-[0.65rem] text-white cursor-pointer hover:text-primary/80 myPhone:text-[2.3rem] myPhone:mt-[0.5rem] sCP:text-[2rem] sCP:mt-[0.4rem]"></i>
                                </div>
                                <div class="w-[4rem] h-[4rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center myPhone:w-[3.5rem] myPhone:h-[3.5rem] sCP:w-[3rem] sCP:h-[3rem]">
                                    <i class="fa-brands fa-square-instagram text-[2.6rem] mt-[0.65rem] text-white cursor-pointer hover:text-primary/80 myPhone:text-[2.3rem] myPhone:mt-[0.5rem] sCP:text-[2rem] sCP:mt-[0.4rem]"></i>
                                </div>
                            </div>
                            <div class="text-center pt-[1rem]">
                                <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                                <h1 class="text-primary">Executive Chef</h1>
                            </div>
                        </div>
                        <div>
                            <a href="/ChefTwo"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefTwo} /></a>
                            <div class="text-center pt-[1rem]">
                                <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                                <h1 class="text-primary">Sous Chef</h1>
                            </div>
                        </div>
                        <div class="max-xl:mr-[0.5rem] max-lg:mr-0">
                            <a href="/ChefThree"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefThree} /></a>
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