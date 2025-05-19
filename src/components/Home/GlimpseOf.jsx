import Glimpse from "./Background/GlimpseB"
import GlimpseH from "./Hero/GlimpseH"
import { useState } from "react";
import Wave from "react-wavify";


export default function GlimpseOf() {

    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
            <div>
                <div className='mb-[-3rem]'>
                    <Wave fill='#faf8f7'
                        paused={false}
                        style={{
                            display: 'flex',
                            rotate: '180deg'
                        }}
                        options={{
                            height: 100,
                            amplitude: 10,
                            speed: 0.15,
                            points: 10
                        }}
                    />
                </div>
                <div className="bg-secondary h-[32.65rem]">
                    <div className="flex">
                        <div className="bg-[url('../../assets/pictures/dining.jpg')] bg-cover h-[26.75rem] w-[50%]">
                            <div>
                                <Glimpse playStatus={playStatus} />
                            </div>
                        </div>
                        <div className="h-[35.65rem] w-[50%] mt-[-4rem]">
                            <div className="text-center max-xl:pt-[5.5rem] max-lg:pt-[4.5rem] max-sm:pt-[2.5rem]">
                                <div className="flex justify-center items-center gap-1 ml-[-2.5rem] text-primary mt-[10rem] max-xl:mt-[8rem] max-lg:mt-[4rem]">
                                    <i className="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                                    <i className="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                                    <i className="fa-solid fa-diamond max-sm:text-[0.8rem]"></i>
                                </div>
                                <div>
                                    <h1 className="text-primary text-[2rem] pt-[0.5rem] font-medium max-2xl:text-[4.5rem] max-xl:text-[3rem] max-sm:text-[1.5rem]">Get a Glimpse of Our Dining Experience</h1>
                                </div>
                                <div>
                                    <p className="p-4 text-justify text-text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate labore nulla ducimus harum iure deleniti commodi sequi totam veniam sunt necessitatibus eveniet voluptatum consequuntur similique recusandae, quod saepe impedit.
                                        Lorem</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <GlimpseH
                                    setPlayStatus={setPlayStatus}
                                    playStatus={playStatus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}