import video from "../../../assets/videos/two.mp4"

export default function Glimpse({ playStatus }) {
    if (playStatus) {
        return (
            <div className="bg-[url('../../assets/videos/two.mp4">
                <video className="w-[80rem] h-[60rem] rounded-3xl" src={video} autoPlay loop muted ></video>
            </div>
        )
    }
}