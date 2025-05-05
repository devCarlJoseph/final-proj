import Wave from "react-wavify"


export default function Gallery() {
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
            <div className="bg-mainH h-[40rem]">
                <div className="flex justify-center items-center">
                    <div className="bg-[url('../../assets/pictures/f1.jpg')] bg-cover w-[60%] h-[40rem]">

                    </div>
                    <div className="w-[40%] h-[40rem] flex">
                        <div className="">
                            <div className="w-[25rem] h-[13.5rem] bg-secondary"></div>
                            <div className="w-[25rem] h-[13.5rem] bg-tertiary"></div>
                            <div className="bg-[url('../../assets/pictures/f7.jpg')] bg-cover w-[25rem] h-[13.5rem] bg-emerald-300"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-[url('../../assets/pictures/f6.jpg')] bg-cover w-[22.6rem] h-[40rem] bg-blue-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}