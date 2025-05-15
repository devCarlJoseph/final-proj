
import Header from "../shared/components/Partials/Header"
import TestIntro from "../components/Testimonials/TestIntro"
import TestText from "../components/Testimonials/TestText"
import TestCont from "../components/Testimonials/TextCont"
import Footer from "../shared/components/Partials/Footer"

export default function TestiList() {
    return (
        <div>
            <Header />
            <TestIntro />
            <TestText />
            <TestCont />
            <Footer />
        </div>
    )
}