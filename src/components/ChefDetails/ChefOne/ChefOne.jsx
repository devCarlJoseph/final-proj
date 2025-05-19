import ChefImage from "../../../assets/pictures/executive.jpg"
import Wave from "react-wavify"


export default function ChefOne() {
    return (
        <div>
            <div className='mt-[-9.5rem]'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 100,
                        amplitude: 10,
                        speed: 0.15,
                        points: 10
                    }}
                />
            </div>
            <div className="bg-background h-[35.5rem] tablet:h-[58rem]">
                <div className="flex justify-center items-center gap-[2rem] mt-[-0.5rem] tablet:flex-col">
                    <div>
                        <a href="/chef"><img src={ChefImage} className="w-[32rem] h-[32rem] rounded-[1rem] object-cover rounded-t-[50%] cp:w-[24rem] cp:h-[24rem] cpM:w-[22rem] cpM:h-[22rem] myPhone:w-[21rem] myPhone:h-[21rem] sCP:w-[19rem] sCP:h-[19rem]" /></a>
                    </div>
                    <div className="w-[40rem] mt-[1.3rem] tablet:mt-[0.5rem] cp:w-[24rem] cp:mt-0 cpM:w-[21rem] myPhone:w-[20rem] sCP:w-[18rem]">
                        <div className="tablet:text-center">
                            <h1 className="text-[2.3rem] cp:text-[1.8rem]">Lindsy Sheyan</h1>
                            <p className="text-[1.2rem] pt-[0.5rem] text-primary">Executive Chef</p>
                        </div>
                        <div className="pt-[1.2rem]">
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur, saepe quia tempora aliquam neque quasi, a maxime nobis fugiat consequuntur vitae doloribus reiciendis odio nihil earum, sed obcaecati iusto.</p>
                        </div>
                        <div className="tablet:flex tablet:justify-center tablet:items-center gap-[2rem] tablet:mt-[2rem] cp:block cp:mt-[1rem]">
                            <div className="pt-[1.5rem] flex items-center gap-[0.5rem] tablet:pt-0">
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-solid fa-envelope text-white"></i>
                                </div>
                                <p>exaple@gmail.com</p>
                            </div>
                            <div className="pt-[1rem] flex items-center gap-[0.5rem] tablet:pt-0 cp:pt-[0.5rem]">
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-solid fa-phone text-white"></i>
                                </div>
                                <p>(000)000-000</p>
                            </div>
                            <div className="pt-[1rem] flex items-center gap-[0.5rem] tablet:pt-0 cp:pt-[0.5rem]">
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-solid fa-briefcase text-white"></i>
                                </div>
                                <p>18+ Years of Experience</p>
                            </div>
                        </div>
                        <div className="mt-[1.3rem] tablet:text-center cp:text-start">
                            <h1 className="text-[1.4rem]">Connect Now</h1>
                            <div className="flex gap-[0.5rem] mt-[0.7rem] tablet:justify-center cp:justify-start">
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-brands fa-facebook-f text-white"></i>
                                </div>
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-brands fa-x-twitter text-white"></i>
                                </div>
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-brands fa-pinterest-p text-white"></i>
                                </div>
                                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-primary rounded-[50%]">
                                    <i class="fa-brands fa-instagram text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}