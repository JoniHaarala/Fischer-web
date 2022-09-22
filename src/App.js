import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navegacion from './routes/Navegacion'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Navegacion />
      </main>
      <Footer />
    </>
  );
}

export default App;
