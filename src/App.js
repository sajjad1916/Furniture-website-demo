import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Design from './components/Design/Design';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Design />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
