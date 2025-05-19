import Wave from "react-wavify"
import Image1 from "../../assets/pictures/Baklava.jpg"
import Image2 from "../../assets/pictures/Chicken Alfredo pasta.jpg"
import Image3 from "../../assets/pictures/caprese.jpg"

export default function Sweets() {
    return (
        <div>
            <div className='mt-[-9rem]'>
                <Wave fill='#ffffff'
                    paused={false}
                    style={{
                        display: 'flex',
                    }}
                    options={{
                        height: 100,
                        amplitude: 10,
                        speed: 0.15,
                        points: 10
                    }}
                />
            </div>
            <div className="h-[48rem] tablet:h-[38rem] cp:h-[85rem]">
                <div className="flex justify-center items-center">
                    <div className="w-[50rem] text-center">
                        <h1 className="text-[2.7rem] text-primary font-semibold tablet:text-[2.2rem]">Special
                            <br />
                            <span className="text-black">Menu Today</span></h1>
                        <p className="tablet:px-10 cp:px-5">Indulge in our limited-time specials, each a unique creation inspired by the season's finest and our chef's latest inspirations. Don't miss this opportunity to savor something truly extraordinary.</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-[1.5rem] mt-[1rem]">-Featured-</div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[1rem] mt-[1.5rem] cp:flex-col">
                        <div>
                            <img className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl object-cover tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]" src={Image1} />
                        </div>
                        <div>
                            <img className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl object-cover tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]" src={Image2} />
                        </div>
                        <div>
                            <img className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl object-cover tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]" src={Image3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}