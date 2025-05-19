import video from "../../../assets/videos/two.mp4"

export default function Glimpse({ playStatus }) {
    if (playStatus) {
        return (
            <div className="absolute z-[1] left-[9.5rem] top-[17.4rem] tablet:top-[22rem] tablet:left-[1.5rem] cp:top-[40rem] cp:left-[0.95rem]">
                <video className="w-[78rem] rounded-3xl tablet:w-[45rem] cp:w-[25rem]" src={video} autoPlay loop muted ></video>
            </div>
        )
    }

}