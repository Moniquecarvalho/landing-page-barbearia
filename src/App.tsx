import Header from "./components/shared/Header";
import { Hero } from './components/Hero';
import { Services } from "./components/shared/Services";
import { Contact } from "./components/shared/Contact";
import Footer from "./components/shared/Footer";


function App() {
  return (
    <>
    <div>
      <Header />

      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
