import Wave from "react-wavify"
import List from "./TestimonialList/List"
import Items from "./TestimonialList/Items"
import { useState } from "react";

export default function Testimonial() {

    const [heroCount, setHeroCount] = useState(0);

    return (
        <div>
            <div className='mb-[-4rem]'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{
                        display: 'flex',
                        rotate: '180deg'
                    }}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className="bg-[url('../../assets/pictures/testimonials.jpg')] bg-cover h-[60rem]">
                <div>
                    <div class="pt-[8rem] max-xl:pt-[10rem] max-sm:pt-[7rem]">
                        <div class="flex justify-center gap-1.5 text-center text-primary pb-[1rem]">
                            <i class="fa-solid fa-diamond"></i>
                            <i class="fa-solid fa-diamond"></i>
                            <i class="fa-solid fa-diamond"></i>
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium pb-[1rem] max-sm:pb-[0.5rem]">TESTIMONIALS</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] text-white max-sm:text-[2rem] max-xs:text-[1.5rem]">Testimonials from Our <br /><span class="text-primary">Valued Guests</span></h1>
                        </div>
                    </div>
                </div>
                <Items heroCount={heroCount} />
                <List heroCount={heroCount}
                    setHeroCount={setHeroCount}
                />
            </div>
        </div>
    )
}