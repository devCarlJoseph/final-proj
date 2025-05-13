import Header from "../shared/components/Partials/Header"
import Intro from "../components/ChefDetails/Intro"
import ChefImage from "../components/ChefDetails/ChefOne"


export default function ChefDetails() {
    return (
        <div>
            <div>
                <Header />
                <Intro />
                <ChefImage />
            </div>
        </div>
    )
}