const footer = `

<footer>       
        <div class="contenedor">
          <div class="sobre-mi">
              <h3 class="titulos-footer">Quienes somos</h3>
              <p>Somos una unidad de negocios de Papelera Zaráte</p>
              <ul class="redes-sociales">
                <li><a href="https://www.facebook.com/papelerazarate444/?locale=es_LA" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="../static/video/juguetes.mp4" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.instagram.com/papelerazarate/?hl=en" target="_blank"><i class="fa-brands fa-instagram"></i></i></a></li>
              </ul>
          </div>

          <div class="navegacion">
              <h3 class="titulos-footer">Menú de navegación</h3>
              <ul>
                  
                  <li><a href="../templates/tienda.html">Tienda</a></li>                  
                  <li><a href="../templates/contacto.html">Contacto</a></li>
                  <li><a href="../templates/promociones.html">Promociones</a></li>
                  <li><a href="../templates/ofertas.html">Ofertas</a></li>
              </ul>
          </div>

          <div class="contactanos">
              <h3 class="titulos-footer">Contáctanos</h3>
              <ul class="informacion-contacto">
                  <li>
                      <span><i class="fa-solid fa-location-dot"></i></span>
                      <p>Gral. Pinto 444/438<br> Zaráte, Buenos Aires (2800)</p>
                  </li>

                  <li>
                      <span><i class="fa-solid fa-phone"></i></span>
                      <p>+54 3487 421585 <br> +54 3487 216595</p>
                  </li>

                  <li>
                      <span><i class="fa-solid fa-envelope"></i></span>
                      <p>pedidos@papelerazarate.com.ar</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="copy">
          Copyright © 2024 Proyecto desarrollado por Alumnos de Codo a Codo.
      </div>

      <div class="whatsapp" >
        <a href="https://web.whatsapp.com/s" target="_blank">
        <img src="../static/img/social.png" alt="WhatsApp">
        </a>
    </div>
    <div class="ancla"  >
    <a  href="#nav" >
    <img src="../static/img/up-arrow.png" alt="ir hacia arriba">
    </a>
    </div>

        
    </footer>`;

document.addEventListener("DOMContentLoaded", () => {
// Inserta el pie de página en todas las páginas
const footerContainer = document.querySelectorAll("footer");
footerContainer.forEach((element) => {
  element.innerHTML = footer;
});
});






