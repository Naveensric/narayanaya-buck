
import './App.css';
import './configure/assets/css/main.css'
import Header from './components/header'
import Home from './components/home';
import AboutUs from './components/aboutUs';
import WhyUsSection from './components/whyUsSection';
import StatusCount from './components/statusCounter';
import MenuSection from './components/menuSection';
import TestiMonaialsSection from './components/testimonialsSection';
import EventSection from './components/eventSection';
import ChefsSection from './components/chefsSection';
import GallerySection from './components/gallerySection';
import Contactz from './components/contact';
import Footer from './components/footer';
//import EndFoot from './components/endFoot';



function App() {
  return (
    <div className="App">
    <Header />
    <Home />
        <main id="main">
        <AboutUs />
        <WhyUsSection />
        <StatusCount />
        <MenuSection />
        <TestiMonaialsSection />
        <EventSection />
        <ChefsSection />
        <GallerySection />
        <Contactz />
        </ main>
    <Footer />   
    {/* <EndFoot />  */}
    </div>
  );
}

export default App;
