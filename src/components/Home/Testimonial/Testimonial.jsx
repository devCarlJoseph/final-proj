import Wave from "react-wavify"
import List from "./TestimonialList/List"
import Items from "./TestimonialList/Items"
import { useState } from "react";

export default function Testimonial() {

    const [heroCount, setHeroCount] = useState(0);

    return (
        <div>
            <div className='mb-[-9rem]'>
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
            <div className="bg-[url('../../assets/pictures/testimonials.jpg')] bg-cover h-[60rem] overflow-hidden tablet:h-[90rem] cp:h-[69.5rem] sCP:h-[73rem]">
                <div>
                    <div class="pt-[8rem]">
                        <div class="flex justify-center gap-1.5 text-center text-primary pb-[1rem]">
                            <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                            <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                        </div>
                        <div class="text-center text-primary">
                            <h1 class="text-[1.2rem] font-medium pb-[1rem] cp:text-[1rem] cp:pb-[0.5rem]">TESTIMONIALS</h1>
                        </div>
                        <div class="text-center font-semibold">
                            <h1 class="text-[2.5rem] text-white cp:text-[2rem]">Testimonials from Our <br /><span class="text-primary">Valued Guests</span></h1>
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