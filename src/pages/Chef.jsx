import ChefIntro from "../components/Chef/ChefIntro"
import Header from "../shared/components/Partials/Header"
import Chefs from "../components/Home/Chef"
import Other from "../components/Chef/Other"
import Footer from "../shared/components/Partials/Footer"


export default function Chef() {
    return (
        <div>
            <Header />
            <ChefIntro />
            <Chefs />
            <Other />
            <Footer />
        </div>
    )
}