import React, { useState, useEffect } from 'react';

function NewsletterPopUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const cerrarPopUp = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="overlay-newsletter">
            <div className="popup-newsletter">
                <button className="btn-cerrar" onClick={cerrarPopUp}>&times;</button>
                <div className="contenido-popup">
                    <h3>¡ÚNETE A FIKA MOOD! 🌿</h3>
                    <p>Subscríbete a nuestro newsletter y recibe las mejores recetas saludables y descuentos exclusivos.</p>
                    <form onSubmit={(e) => { e.preventDefault(); cerrarPopUp(); }}>
                        <input type="email" placeholder="Tu email aquí..." required className="input-newsletter" />
                        <button type="submit" className="btn-enviar-news">SUSCRIBIRME</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsletterPopUp;