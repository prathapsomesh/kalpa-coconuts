import {createRef} from 'react';
import NavBar from './components/navbar/NavbarTop';
import {BrowserRouter} from 'react-router-dom'
import Corousel from './components/corousel/Corousel';
import Products from './components/products/Products';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import Testimonials from './components/testimonials/Testimonials';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';

function App() {
  const contactRef = createRef(null);
  const productsRef = createRef(null);
  const scrollToContact = ()=>{
    contactRef.current.scrollIntoView({
      behavior: "smooth"
    }) ;
  }
  const scrollToProducts = ()=>{
    productsRef.current.scrollIntoView({
      behavior: "smooth"
    }) ;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar scrollToContact={scrollToContact}  scrollToProducts={scrollToProducts}/>
        <Corousel scrollToContact={scrollToContact} />
        <WhoWeAre />
        <Products  ref={productsRef} />
        <Testimonials />
        <ContactUs ref={contactRef} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
