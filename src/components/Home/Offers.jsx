import Wave from "react-wavify"
import OfferOne from "../../assets/pictures/special off 1.png"
import OfferTwo from "../../assets/pictures/special off 2.png"

export default function Offer() {
    return (
        <div>
            <div className='mt-[-9rem] z-10'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 50,
                        speed: 0.15,
                        points: 15
                    }}
                />
            </div>
            <div class="overflow-hidden bg-background h-[40rem] max-lg:h-[80rem] max-sm:h-[53rem] max-2xs:h-[45rem]">
                <div class="w-full">
                    <div class="text-center">
                        <div class="flex justify-center gap-2 pt-[2rem] text-center text-primary pb-[1rem] max-sm:pb-[0.5rem]">
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium mb-[1rem] max-sm:text-[0.9rem] max-sm:mb-[0.5rem]">SPECIAL OFFERS</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] max-sm:text-[1.5rem]">Exclusive <span class="text-primary">Dining Offers</span></h1>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-[1.5rem] max-lg:flex-col">
                        <div class="w-[36rem] h-[23rem] bg-secondary mt-[2.5rem] ml-[10.5rem] rounded-[1rem] relative overflow-hidden max-xl:ml-[3.5rem] max-lg:w-[27rem] max-lg:ml-[0] max-sm:mt-[1.5rem] max-sm:w-[20rem] max-sm:h-[17rem] max-2xs:w-[15rem] max-2xs:h-[12.5rem]">
                            <div class="w-[6rem] h-[6rem] bg-primary rounded-[50%] absolute top-[-0.5rem] left-[2rem] rotate-[-10deg] max-sm:hidden">
                                <h1 class="text-white text-center text-[1.3rem] font-semibold mt-[1rem]">20%<br /><span class="text-[1.2srem] font-sm">Off</span></h1>
                            </div>
                            <div class="w-[5.5rem] h-[5.5rem] border-2 border-white rounded-[50%] absolute top-[-0.28rem] left-[2.25rem] rotate-[-10deg] max-sm:hidden"></div>
                            <div>
                                <div class="mt-[7.5rem] max-sm:mt-[1.5rem]">
                                    <div class="border-b-2 border-b-primary w-[11.2rem] absolute ml-[1rem] max-2xs:w-[8.7rem]"></div>
                                    <h1 class="text-[1.2rem] text-primary ml-[1rem] max-2xs:text-[0.9rem]">FLAT 20% DISCOUNT</h1>
                                    <div class="border-b-2 border-b-primary w-[11.2rem] absolute ml-[1rem] max-2xs:w-[8.7rem]"></div>
                                </div>
                                <h1 class="text-[2.8rem] ml-[1rem] mt-[0.5rem] max-2xs:text-[1.8rem]">Dine & Save - <br /> 20% Off Today!</h1>
                                <p class="text-gray-500 ml-[1rem] mt-[0.4rem] max-2xs:text-[0.8rem]">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <div class="w-[9rem] h-[9rem] bg-primary rounded-[50%] opacity-[15%] absolute top-[-2.5rem] left-[18rem] max-sm:left-[14.5rem] max-2xs:w-[4rem] max-2xs:h-[4rem] max-2xs:top-[-1.5rem] max-2xs:left-[10.5rem]"></div>
                                <div class="w-[6rem] h-[6rem] bg-primary rounded-[50%] opacity-[15%] absolute top-[22.5rem] left-[2rem] max-sm:top-[13.5rem] max-2xs:top-[10rem] max-2xs:left-[2.5rem]"></div>
                                <img class="w-[22rem] top-[-0.5rem] left-[14rem] absolute max-sm:hidden" src={OfferOne} />
                            </div>
                        </div>
                        <div class="w-[36rem] h-[23rem] bg-primary mt-[2.5rem] mr-[10.5rem] rounded-[1rem] relative overflow-hidden max-xl:mr-[3.5rem] max-lg:w-[27rem] max-lg:mr-[0] max-lg:mt-[0] max-sm:w-[20rem] max-sm:h-[17rem] max-2xs:w-[15rem] max-2xs:h-[12.5rem]">
                            <div class="w-[6rem] h-[6rem] bg-white rounded-[50%] absolute top-[-0.5rem] left-[2rem] rotate-[-10deg] max-sm:hidden">
                                <h1 class="text-primary text-center text-[1.3rem] font-semibold mt-[1rem]">20%<br /><span class="text-[1.2srem] font-sm">Off</span></h1>
                            </div>
                            <div class="w-[5.5rem] h-[5.5rem] border-2 border-primary rounded-[50%] absolute top-[-0.28rem] left-[2.25rem] rotate-[-10deg] max-sm:hidden"></div>
                            <div>
                                <div class="mt-[7.5rem] max-sm:mt-[1.5rem]">
                                    <div class="border-b-2 border-b-white w-[11.2rem] absolute ml-[1rem] max-2xs:w-[8.7rem]"></div>
                                    <h1 class="text-[1.2rem] text-white ml-[1rem] max-2xs:text-[0.9rem]">FLAT 20% DISCOUNT</h1>
                                    <div class="border-b-2 border-b-white w-[11.2rem] absolute ml-[1rem] max-2xs:w-[8.7rem]"></div>
                                </div>
                                <h1 class="text-[2.8rem] ml-[1rem] mt-[0.5rem] text-white max-2xs:text-[1.8rem]">Dine & Save - <br /> 20% Off Today!</h1>
                                <p class="text-gray-300 ml-[1rem] mt-[0.4rem] max-2xs:text-[0.8rem]">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <div class="w-[9rem] h-[9rem] bg-secondary rounded-[50%] opacity-[55%] absolute top-[-2.5rem] max-sm:left-[14.5rem] left-[18rem] max-2xs:w-[4rem] max-2xs:h-[4rem] max-2xs:top-[-1.5rem] max-2xs:left-[10.5rem]"></div>
                                <div class="w-[6rem] h-[6rem] bg-secondary rounded-[50%] opacity-[35%] absolute top-[22.5rem] max-sm:top-[13.5rem] left-[2rem] max-2xs:top-[10rem] max-2xs:left-[2.5rem]"></div>
                                <img class="w-[22rem] top-[-4.5rem] left-[20.5rem] absolute max-2xl:left-[16.5rem] max-sm:hidden" src={OfferTwo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}