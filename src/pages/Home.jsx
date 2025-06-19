import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Tu próximo smartphone te espera</h1>
          <p>Explorá los últimos modelos de Apple, Samsung, Xiaomi y Motorola al mejor precio.</p>
          <a href="/productos" className="btn-primary">Ver Catálogo</a>
        </div>
      </section>

      <section className="destacados">
        <h2>Destacados de la semana</h2>
        <div className="destacados-grid">
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660753619946" alt="iPhone 14 Pro" />
            <h3>iPhone 14 Pro</h3>
            <p>Potencia. Diseño. Cámara de última generación.</p>
          </div>
          <div className="card">
            <img src="https://images.samsung.com/is/image/samsung/p6pim/es/galaxy-s22-ultra-s908-sm-s908ezkalgo-frontgreen-thumb-530421289?$720_576_PNG$" alt="Galaxy S22 Ultra" />
            <h3>Galaxy S22 Ultra</h3>
            <p>Experiencia profesional con S-Pen incluido.</p>
          </div>
          <div className="card">
            <img src="https://i01.appmifile.com/images/2022/08/25/0adf33f5-5a91-4c42-8b43-fdd9810f4f45.jpg" alt="Redmi Note 12 Pro" />
            <h3>Redmi Note 12 Pro</h3>
            <p>Alto rendimiento a un precio accesible.</p>
          </div>
        </div>
      </section>

      <section className="beneficios">
        <h2>¿Por qué elegirnos?</h2>
        <div className="beneficios-grid">
          <div className="beneficio">
            <i className="fa fa-shipping-fast"></i>
            <h3>Envío rápido</h3>
            <p>Recibí tu nuevo equipo en 24hs en CABA y GBA.</p>
          </div>
          <div className="beneficio">
            <i className="fa fa-credit-card"></i>
            <h3>Cuotas sin interés</h3>
            <p>Financiación hasta 12 cuotas fijas.</p>
          </div>
          <div className="beneficio">
            <i className="fa fa-headset"></i>
            <h3>Soporte personalizado</h3>
            <p>Atención al cliente 24/7 con asesoramiento experto.</p>
          </div>
        </div>
      </section>

      <section className="testimonios">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonios-grid">
          <div className="testimonio">
            <p>"La atención fue excelente y el envío súper rápido. El mejor precio en iPhone que encontré!"</p>
            <h4>- Juan M.</h4>
          </div>
          <div className="testimonio">
            <p>"Compre un Galaxy S23 Ultra y llegó en perfectas condiciones, todo original. 100% recomendado."</p>
            <h4>- Laura G.</h4>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Suscribite y recibí ofertas exclusivas</h2>
        <form>
          <input type="email" placeholder="Ingresá tu email" required />
          <button type="submit">Suscribirme</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
