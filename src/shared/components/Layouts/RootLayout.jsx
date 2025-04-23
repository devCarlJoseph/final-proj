import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link } from 'react-router-dom';


export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cars">Cars</Link>
      
      {children}
      <Footer />
    </div>
  );
}