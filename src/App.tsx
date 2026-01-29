import Header from "./components/shared/Header";
import { Hero } from './components/Hero';
import Footer from "./components/shared/Footer";

import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import WhatsAppButton from "./components/shared/WhatsAppButton";


function App() {
  return (
    <>
    <div>
      <Header />

      <Hero />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
    </>
  );
}

export default App;
