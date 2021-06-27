import React, { createRef } from 'react'
import NavBar from '../navbar/NavbarTop'
import ContactUs from './contactus/ContactUs'
import Corousel from './corousel/Corousel'
import Products from './products/Products'
import Testimonials from './testimonials/Testimonials'
import WhoWeAre from './whoWeAre/WhoWeAre'

const Home = React.forwardRef((props,ref) =>{
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
        <>
            <NavBar scrollToContact={scrollToContact}  scrollToProducts={scrollToProducts}/>
            <Corousel scrollToContact={scrollToContact} />
            <WhoWeAre />
            <Products ref={productsRef} />
            <Testimonials />
            <ContactUs ref={contactRef} />
        </>
    )
});

export default Home
