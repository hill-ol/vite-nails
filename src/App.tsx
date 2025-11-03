import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <About />
            <Booking />
            <Footer />
        </div>
    );
}