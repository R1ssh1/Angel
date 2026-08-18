import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <Industries />
        <WhyChooseUs />
        <Stats />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

export default App;
