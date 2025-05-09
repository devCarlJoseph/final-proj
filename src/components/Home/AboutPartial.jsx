import Manager from '../../assets/pictures/manager.jpg'
import Wave from 'react-wavify'

export default function SectionTwo() {
    return (
        <div>
            <div className='mt-[-9rem]'>
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
            <div className="w-full box-border h-[48rem] overflow-hidden max-sm:h-[20rem] bg-background">
                <div>
                    <div className="flex justify-center items-center gap-[3rem] h-[40rem] ">
                        <div className="relative ml-[1rem]">
                            <div className="w-[5.5rem] h-[5.5rem] bg-primary rounded-[50%] absolute left-[29rem] z-[1] rotate-[-15deg]">
                                <h1 className="text-center text-white font-medium mt-[1.2rem]">Since <br /> 2005</h1>
                            </div>
                            <div className="w-[5rem] h-[5rem] border-2 border-white rounded-[50%] absolute left-[29.25rem] top-[0.25rem] z-[2]"></div>
                            <img src={Manager} className="rounded-[41%] w-[25rem] h-[30rem] ml-[12rem] object-obtain" />
                            <div className="w-[23rem] h-[28rem] border-[3px] border-white rounded-[41%] absolute top-[1rem] left-[13rem]"></div>
                            <div className="text-primary max-lg:hidden">
                                <i className="fa-solid fa-star-of-life text-[4rem] absolute left-[14.5rem] top-[23.5rem]"></i>
                                <i className="fa-solid fa-star-of-life text-[2rem] absolute left-[11.5rem] top-[22rem]"></i>
                                <i className="fa-solid fa-star-of-life absolute left-[12.5rem] top-[25.5rem]"></i>
                            </div>
                        </div>
                        <div className="w-[40rem] text-justify mr-[12rem] max-2xl:mr-[10rem] max-xl:mr-[2rem] max-xl:w-[30rem] max-lg:text-center max-lg-[20rem] max-sm:mt-[-11rem]">
                            <div className="flex gap-1.5 text-primary pb-[1.5rem] max-xl:pb-[0.4rem]">
                                <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                                <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                                <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                            </div>
                            <div className="text-primary">
                                <h1 className="text-[1.1rem] font-medium pb-[1rem] max-xl:pb-[0.2rem] max-xl:text-[1rem] max-sm:text-[0.8rem] max-2xs:text-[0.6rem]">ABOUT US</h1>
                            </div>
                            <div className="text-[2rem] font-semibold max-xl:text-[1.7rem] max-sm:text-[1.2rem] max-2xs:text-[1rem]">
                                <h1>A Culinary Exprience of <br /> <span className="text-primary">Elegance and Excellence</span></h1>
                            </div>
                            <div className="pt-[1rem] text-text max-xl:pt-[0.2rem] max-xl:text-[0.9rem] max-sm:text-[0.7rem] max-2xs:text-[0.6rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, magni numquam? Pariatur unde aliquid aspernatur libero ipsam sunt, ratione sint nisi iure repellat inventore tempora autem ab eveniet vitae totam.</p>
                            </div>
                            <div className="flex justify-between items-center pt-[1.5rem] max-sm:pt-[1rem] max-2xs:pt-[0.5rem]">
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary max-sm:text-[1rem] max-sm:pb-[0.2rem] max-2xs:text-[0.8rem]">5-Star</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium max-sm:text-[0.65rem] max-2xs:text-[0.5rem]">Dining Experience</p>
                                </div>
                                <div className="border-r-[1px] border-gray-300 h-[5rem] max-sm:h-[3rem] max-2xs:h-[2rem]"></div>
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary max-sm:text-[1rem] max-sm:pb-[0.2rem] max-2xs:text-[0.8rem]">150,000+</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium max-sm:text-[0.65rem] max-2xs:text-[0.5rem]">Happy Guests</p>
                                </div>
                                <div className="border-r-[1px] border-gray-300 h-[5rem] max-sm:h-[3rem] max-2xs:h-[2rem]"></div>
                                <div classNameName='text-center'>
                                    <h1 className="text-[1.5rem] font-bold pb-[0.5rem] text-primary max-sm:text-[1rem] max-sm:pb-[0.2rem] max-2xs:text-[0.8rem]">99%</h1>
                                    <p className="text-[0.8rem] text-gray-400 font-medium max-sm:text-[0.65rem] max-2xs:text-[0.5rem]">Guest Satisfaction</p>
                                </div>
                            </div>
                            <div className="mt-[1.5rem] max-sm:mt-[0.8rem]">
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