import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import ContactUsPage from './components/contactus/ContactUsPage';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Route exact path={process.env.PUBLIC_URL +'/'}  component={Home}/>
        <Route exact path={process.env.PUBLIC_URL +'/about'} component={About}/>
        <Route exact path={process.env.PUBLIC_URL +'/products'} component={Products}/>
        <Route exact path={process.env.PUBLIC_URL +'/contactus'} component={ContactUsPage}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
