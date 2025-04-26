
import image1 from "../../../assets/pictures/about us.jpg"
import image2 from "../../../assets/pictures/main.jpg"
import image3 from "../../../assets/pictures/experience2.jpg"

export default function Background({ heroCount}) {
     if (heroCount===0) {
        return <img className="w-screen h-[55rem] object-cover" src={image1} />

    }
    else if (heroCount===1) {
        return <img className="w-screen h-[55rem] object-cover" src={image2} />

    }
    else if (heroCount===2) {
        return <img className="w-screen h-[55rem] object-cover" src={image3} />

    }
}   