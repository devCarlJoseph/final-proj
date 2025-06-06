import Manager from '../../assets/pictures/manager.jpg'
import Wave from 'react-wavify'

export default function SectionTwo() {
    return (
        <div>
            <div className='mt-[-9rem]'>
                <Wave fill='#faf9f7'
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
            <div className="w-full bg-background box-border h-[44rem] overflow-hidden max-sm:h-[20rem] tablet:h-[70rem] tablet:pt-[11rem] cp:h-[72rem] cp:pt-[13rem]">
                <div>
                    <div className="flex justify-center items-center gap-[3rem] h-[40rem] tablet:flex-col">
                        <div className="relative ml-[1rem] tablet:ml-0 ">
                            <div className="w-[5.5rem] h-[5.5rem] bg-primary rounded-[50%] absolute left-[29rem] z-[1] rotate-[-15deg] tablet:left-[17rem] cp:w-[5rem] cp:h-[5rem] cp:left-[13rem]">
                                <h1 className="text-center text-white font-medium mt-[1.2rem] cp:mt-[0.85rem]">Since <br /> 2005</h1>
                            </div>
                            <div className="w-[5rem] h-[5rem] border-2 border-white rounded-[50%] absolute left-[29.25rem] top-[0.25rem] z-[2] tablet:left-[17.25rem] cp:w-[4.5rem] cp:h-[4.5rem] cp:left-[13.25rem]"></div>
                            <img src={Manager} className="rounded-[41%] w-[25rem] h-[30rem] ml-[12rem] object-obtain tablet:ml-0 cp:w-[19rem] cp:h-[24rem]" />
                            <div className="w-[23rem] h-[28rem] border-[3px] border-white rounded-[41%] absolute top-[1rem] left-[13rem] tablet:left-[1rem] cp:w-[17rem] cp:h-[22rem]"></div>
                            <div className="text-primary">
                                <i className="fa-solid fa-star-of-life text-[4rem] absolute left-[14.5rem] top-[23.5rem] tablet:left-[2.4rem] tablet:top-[23rem] cp:text-[3rem] cp:top-[19.3rem]"></i>
                                <i className="fa-solid fa-star-of-life text-[2rem] absolute left-[11.5rem] top-[22rem] tablet:top-[21.5rem] tablet:left-[-0.6rem] cp:text-[1.5rem] cp:top-[18.1rem] cp:left-[0.2rem]"></i>
                                <i className="fa-solid fa-star-of-life absolute left-[12.5rem] top-[25.5rem] tablet:top-[25rem] tablet:left-[0.6rem] cp:left-[0.8rem] cp:top-[21rem]"></i>
                            </div>
                        </div>
                        <div className="w-[40rem] text-justify mr-[12rem] tablet:mr-0">
                            <div className="flex gap-1.5 text-primary pb-[1.5rem] tablet:justify-center cp:pb-[0.5rem]">
                                <i className="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                                <i className="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                                <i className="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                            </div>
                            <div className="text-primary">
                                <h1 className="text-[1.1rem] font-medium pb-[1rem] tablet:text-center cp:text-[0.95rem] cp:pb-[0.5rem]">ABOUT US</h1>
                            </div>
                            <div className="text-[2rem] font-semibold tablet:text-center cp:text-[1.5rem]">
                                <h1>A Culinary Exprience of <br /> <span className="text-primary">Elegance and Excellence</span></h1>
                            </div>
                            <div className="pt-[1rem] text-text max-xl:pt-[0.2rem] max-xl:text-[0.9rem] max-sm:text-[0.7rem] max-2xs:text-[0.6rem] cp:px-[9.5rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, magni numquam? Pariatur unde aliquid aspernatur libero ipsam sunt, ratione sint nisi iure repellat inventore tempora autem ab eveniet vitae totam.</p>
                            </div>
                            <div className="flex justify-between items-center pt-[1.5rem] max-sm:pt-[1rem] max-2xs:pt-[0.5rem] cp:flex-col cp:gap-[1rem]">
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary cp:text-center">5-Star</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium">Dining Experience</p>
                                </div>
                                <div className="border-r-[1px] border-gray-300 h-[5rem] max-sm:h-[3rem] max-2xs:h-[2rem] cp:hidden"></div>
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary cp:text-center">150,000+</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium">Happy Guests</p>
                                </div>
                                <div className="border-r-[1px] border-gray-300 h-[5rem] max-sm:h-[3rem] max-2xs:h-[2rem] cp:hidden"></div>
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary cp:text-center">99%</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium">Guest Satisfaction</p>
                                </div>
                            </div>
                            <div className="mt-[1.5rem] tablet:text-center">
                                <h1 className="text-[1.5rem] font-bold max-sm:text-[1rem] max-2xs:text-[0.8rem]">Manang G</h1>
                                <p className="text-[0.9rem] text-gray-400 font-sm max-sm:text-[0.7rem] max-2xs:text-[0.6rem]">Manang G <span className="text-primary">•</span> Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}    