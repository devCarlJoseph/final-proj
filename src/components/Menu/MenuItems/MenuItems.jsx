import Appetizer from "./Appetizer/AppetizerList"
import Main from "./Main/MainList"
import Dessert from "./Desserts/DessertList"
import Beverages from "./Beverages/Beverages"

export default function MenuItems({ heroCount }) {
    if (heroCount === 0) {
        return (
            <Appetizer />
        )
    }
    else if (heroCount === 1) {
        return (
            <Main />
        )
    }
    else if (heroCount === 2) {
        return (
            <Dessert />
        )
    }
    else if (heroCount === 3) {
        return (
            <Beverages />
        )
    }
}   