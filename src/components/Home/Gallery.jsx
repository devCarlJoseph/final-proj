import Wave from "react-wavify"


export default function Gallery() {
    return (
        <div>
            <div className='mt-[-4.5rem]'>
                <Wave fill='#e4dcbe'
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
            <div className="bg-mainH h-[40rem]"> 
                <h1 className="text-center">Test 123</h1>
            </div>
        </div>
    )
}