import ItemsOne from "./TestimonialItems/ItemsOne"
import ItemsTwo from "./TestimonialItems/ItemsTwo"
import ItemsThree from "./TestimonialItems/ItemsThree"
import ItemsFour from "./TestimonialItems/ItemsFour"


export default function TestimonialMain({ testCount }) {
    if (testCount === 0) {
        return (
            <ItemsOne />
        )
    }
    else if (testCount === 1) {
        return (
            <ItemsTwo />    
        )
    }
    else if (testCount === 2) {
        return (
            <ItemsThree />    
        )
    }
    else if (testCount === 3) {
        return (
            <ItemsFour />    
        )
    }
}   