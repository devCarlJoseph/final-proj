import video from "../../../assets/videos/two.mp4"

export default function Glimpse({ playStatus }) {
    if (playStatus) {
        return (
            <div>
                <video src={video} autoPlay loop muted ></video>
            </div>
        )
    }

}