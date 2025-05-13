import Header from "../shared/components/Partials/Header"
import Intro from "../components/ChefDetails/ChefOne/Intro"
import ChefImage from "../components/ChefDetails/ChefOne/ChefOne"
import Skills from "../components/ChefDetails/ChefOne/Skills"


export default function ChefDetails() {
    return (
        <div>
            <div>
                <Header />
                <Intro />
                <ChefImage />
                <Skills />
            </div>
        </div>
    )
}