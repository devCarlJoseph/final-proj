import Header from "../shared/components/Partials/Header"
import BookIntro from "../components/Book/BookIntro"
import BookATable from "../components/Book/BookATable"
import Footer from "../shared/components/Partials/Footer"

export default function Book() {
    return (
        <div>
            <Header />
            <BookIntro />
            <BookATable />
            <Footer />
        </div>
    )
}