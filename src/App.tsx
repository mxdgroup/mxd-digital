import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Growth } from './components/Growth';
import { Features } from './components/features/Features';
import { Tools } from './components/Tools';
import { Services } from './components/services/Services';
import { Clients } from './components/clients/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThankYou } from './pages/ThankYou';

function App() {
  // Simple route handling
  const isThankYouPage = window.location.pathname === '/thank-you';

  if (isThankYouPage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ThankYou />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Growth />
        <Features />
        <Tools />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;