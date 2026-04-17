import React from 'react';

function Footer() {
  return (
    <footer>
      <article>
        <p>Seguinos en nuestras redes</p>
        <a href="http://www.facebook.com" target="new">
          <img src="/Facebook.svg" alt="Facebook" />
        </a>
        <a href="http://www.instagram.com" target="new">
          <img src="/Instagram.svg" alt="Instagram" />
        </a>
      </article>
      <p className="sobrerayado">
        Copyright © 2025 - Agustina Andreani - FIKA MOOD - UTN CURSO WEB STACK
        DEVELOPER
      </p>
    </footer>
  );
}

export default Footer;