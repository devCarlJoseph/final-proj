import Header from "../shared/components/Partials/Header"
import Intro from "../components/ChefDetails/ChefOne/Intro"
import ChefImage from "../components/ChefDetails/ChefFour/ChefFour"
import Skills from "../components/ChefDetails/ChefOne/Skills"
import Reserve from "../components/Home/Reserve"
import Gallery from "../components/Home/Gallery"
import Footer from "../shared/components/Partials/Footer"


export default function ChefTwo() {
    return (
        <div>
            <div>
                <Header />
                <Intro />
                <ChefImage />
                <Skills />
                <Reserve />
                <Gallery />
                <Footer />
            </div>
        </div>
    )
}