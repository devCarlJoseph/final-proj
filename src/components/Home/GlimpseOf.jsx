import Glimpse from "./Background/GlimpseB"
import GlimpseH from "./Hero/GlimpseH"
import { useState } from "react";
import Wave from "react-wavify";

export default function GlimpseOf() {

    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
            <div className="relative">
                <div className='mb-[-7rem]'>
                    <Wave fill='#fdfbfa'
                        paused={false}
                        style={{
                            display: 'flex',
                            rotate: '180deg'
                        }}
                        options={{
                            height: 10,
                            amplitude: 30,
                            speed: 0.20,
                            points: 10
                        }}
                    />
                </div>
                <div className="bg-[url('../../assets/pictures/workmates.png')] bg-cover h-[70rem] ">
                    <div className="flex justify-center items-center pt-[10rem]">
                        <Glimpse playStatus={playStatus} />
                    </div>
                    <div className="absolute top-[32rem] left-[47.1%]">
                        <GlimpseH
                            setPlayStatus={setPlayStatus}
                            playStatus={playStatus}
                        />
                    </div>
                    <div className="absolute top-[22rem] left-[20.65%]">
                        <div class="flex justify-center items-center gap-1.5 text-primary pb-[1.5rem] max-xl:pb-[0.4rem]">
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                            <i class="fa-solid fa-diamond max-sm:text-[0.8rem] max-2xs:text-[0.6rem]"></i>
                        </div>
                        <div>
                            <h1 className="text-[4rem] text-white font-medium text-center">Get a Glimpse of Our Dining Eperience</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}