import Image1 from "../../assets/pictures/gallery1.webp"
import Image2 from "../../assets/pictures/gallery2.avif"
import Image3 from "../../assets/pictures/gallery3.jpg"
import Image4 from "../../assets/pictures/gallery4.webp"
import Image5 from "../../assets/pictures/gallery5.jpg"
import Image6 from "../../assets/pictures/gallery6.png"
import Image7 from "../../assets/pictures/gallery7.avif"
import Image8 from "../../assets/pictures/gallery8.jpg"
import Image9 from "../../assets/pictures/gallery9.jpg"
import Wave from "react-wavify"



export default function Gallery() {
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
            <div className="h-[90rem] bg-background mt-[-0.5rem]">
                <div>
                    <div class="flex justify-center gap-1 pt-[2rem] text-center text-primary pb-[1rem] max-sm:pt-[3rem]">
                        <i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i>
                    </div>
                    <div className="text-center text-primary">
                        <h1 className="text-[1.2rem] font-medium pb-[1rem]">Gallery</h1>
                    </div>
                    <div className="text-center font-semibold">
                        <h1 className="text-[2.5rem] text-primary">Image <span class="text-text">Gallery</span></h1>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[1.5rem] pt-[3rem]">
                        <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl">
                            <img className="w-[24rem] h-[24rem] rounded-3xl object-cover" src={Image1} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl">
                            <img className="w-[24rem] h-[24rem] rounded-3xl object-cover" src={Image2} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl">
                            <img className="w-[24rem] h-[24rem] rounded-3xl object-cover" src={Image3} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[1.5rem] mt-[2rem]">
                        <div className="flex justify-center items-center w-[43rem] h-[23rem] bg-tertiary rounded-3xl">
                            <img className="w-[42.5rem] h-[22.5rem] rounded-3xl" src={Image4} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[31.85rem] h-[22.5rem] bg-tertiary rounded-3xl">
                            <img className="w-[31.35rem] h-[22rem] rounded-3xl" src={Image5} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[1.5rem] mt-[2rem]">
                        <div className="flex justify-center items-center w-[17.95rem] h-[15.5rem] bg-primary rounded-3xl">
                            <img className="w-[17.5rem] h-[15rem]  rounded-3xl" src={Image6} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[17.95rem] h-[15.5rem] bg-primary rounded-3xl">
                            <img className="w-[17.5rem] h-[15rem]  rounded-3xl" src={Image7} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[17.95rem] h-[15.5rem] bg-primary rounded-3xl">
                            <img className="w-[17.5rem] h-[15rem]  rounded-3xl" src={Image8} alt="" />
                        </div>
                        <div className="flex justify-center items-center w-[17.95rem] h-[15.5rem] bg-primary rounded-3xl">
                            <img className="w-[17.5rem] h-[15rem]  rounded-3xl" src={Image9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}