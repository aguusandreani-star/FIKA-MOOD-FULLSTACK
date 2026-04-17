import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importación de componentes
import Header from './components/Header';
import Portada from './components/Portada';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos'; 
import Certificaciones from './components/Certificaciones';
import Catalogo from './components/Catalogo';
import ApiRecetas from './components/ApiRecetas';
import ContactoForm from './components/ContactoForm';
import MapaContacto from './components/MapaContacto';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import PaginaCarrito from './components/PaginaCarrito';
import PasarelaPago from './components/PasarelaPago';
import NewsletterPopUp from './components/NewsletterPopUp';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  
  const [cart, setCart] = useState([]);

  
  const agregarAlCarrito = (articulo) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === articulo.id);
      if (existe) {
        
        return prevCart.map((item) =>
          item.id === articulo.id 
            ? { ...item, cantidad: item.cantidad + articulo.cantidad } 
            : item
        );
      } else {
        
        return [...prevCart, articulo];
      }
    });
  };

 
  const quitarDelCarrito = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

 
  const totalUnidades = cart.reduce((acc, item) => acc + (item.cantidad || 0), 0);

  return (
    <Router>
      
      <ScrollToTop />
      <NewsletterPopUp /> 
      
     
      <Header cartCount={totalUnidades} />
      
      <Routes>
        
        <Route path="/" element={
          <>
            <Portada />
            
            <div id="nosotros">
              <Nosotros />
            </div>
            
            <Productos /> 
            
            <div id="certificaciones">
              <Certificaciones />
            </div>
            
            
            <div id="recetas" style={{ backgroundColor: '#f9f9f9' }}>
               <ApiRecetas />
            </div>

          
            <div id="productos">
              <Catalogo addToCart={agregarAlCarrito} />
            </div>

            <div id="contacto">
              <ContactoForm />
            </div>
            
            <MapaContacto />
          </>
        } />
        <Route 
          path="/carrito" 
          element={<PaginaCarrito cart={cart} removeFromCart={quitarDelCarrito} />} 
        />
        
        <Route 
          path="/checkout" 
          element={<PasarelaPago />} 
        />
      </Routes>

      <Footer />
      <ChatBot />
      <a href="#top" id="scroll-to-top"></a>
    </Router>
  );
}

export default App;