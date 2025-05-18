import Wave from "react-wavify"


export default function Sweets() {
    return (
        <div>
            <div className='mt-[-6rem]'>
                <Wave fill='#ffffff'
                    paused={false}
                    style={{
                        display: 'flex',
                    }}
                    options={{
                        height: 10,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className="h-[48rem] tablet:h-[38rem] cp:h-[85rem]">
                <div className="flex justify-center items-center">
                    <div className="w-[50rem] text-center">
                        <h1 className="text-[2.7rem] text-primary font-semibold tablet:text-[2.2rem]">Special
                            <br />
                            <span className="text-black">Menu Today</span></h1>
                        <p className="tablet:px-10 cp:px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe incidunt, voluptate minus optio impedit recusandae earum consequuntur iusto quam!</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-[1.5rem] mt-[1rem]">-Featured-</div>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-[1rem] mt-[1.5rem] cp:flex-col">
                        <div className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]"></div>
                        <div className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]"></div>
                        <div className="w-[20rem] h-[20rem] bg-red-200 rounded-3xl tablet:w-[15rem] tablet:h-[15rem] cp:w-[19rem] cp:h-[19rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}