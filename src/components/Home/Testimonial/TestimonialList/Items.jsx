import One from "../TestimonialComponents/One"
import Two from "../TestimonialComponents/Two"
import Three from "../TestimonialComponents/Three"
import Four from "../TestimonialComponents/Four"


export default function Items({heroCount}) {
    if (heroCount === 0) {
        return (
            <One />
        )
    }
    else if (heroCount === 1) {
        return (
            <Two />
        )
    }
    else if (heroCount === 2) {
        return (
            <Three />
        )
    }
    else if (heroCount === 3) {
        return (
            <Four />
        )
    }
}