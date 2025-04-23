import RootLayout from './shared/components/Layouts/RootLayout';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cars from './pages/Cars';
import Car from './pages/Car';
import AddCar from './pages/AddCar';

export default function App() {
  return (
    <div>
      <RootLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={<Cars/>} />
          <Route path='/cars/:id' element={<Car/>} />
          <Route path='/cars/add' element={<AddCar/>} />
        </Routes>
      </RootLayout>
    </div>
  );
}