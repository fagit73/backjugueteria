let cad = `


<header>
    <section class="top-section">
      
      <div class="social-icons">
      <img class= "loguito-PZ " src="../static/img/logoPapelera.jpg" alt="Logo Papelera Zarate">
        <a href="https://www.facebook.com/papelerazarate444/?locale=es_LA" target="_blank" style="background-color:var(--white-color) ; padding: 2px; border-radius: 10%;">
        <i class="fab fa-facebook" style="color: --Morado-5939e7; font-size: 30px;"></i>
      </a>
        <a href="https://www.instagram.com/papelerazarate/?hl=en" target="_blank" style="background-color:var(--white-color); padding: 2px; border-radius: 10%;">
        <i class="fab fa-instagram" style="color:--Morado-5939e7 ; font-size: 30px;"></i>
      </a>
        
      </div>
      <div class="promotions mobile">
        <p>Promociones bancarias -</p>
        <p>Envíos a todo el país -</p>
        <p>15% de descuento en transferencias</p>
      </div>
      <div class="contact-info social-icons mobile">
      <span><i class="fa-solid fa-envelope"></i></span>
        <p>pedidos@papelerazarate.com.ar</p>
      </div>
    </section>
    <nav class="nav" id="nav">
       <div class=grupo-logo>
          <div class="logo animate__animated animate__rubberBand">
            <a  href="../index.html">
              <img src="../static/img/ShopLOGO.png" alt="Logo Jugueterias Shop">
            </a>
          </div>
          <div class="logo-jugueteria animate__animated animate__rubberBand">
            <a  href="../index.html">
              <img src="../static/img/Shop-Jugueterias.png" alt="Logo Jugueterias Shop">
            </a>
          </div>
          <div class="brand-info">
            <h1 class="word1 fredoka contorno">Jugueterías</h1>
            <p class="contorno" id="textoAnimado"></p>
            <p >"Transformando compras en sonrisas"
            </p>                    
          </div>
        </div>

      <div class="search mobile">
        <form>
          <input id="search-input"class="search-input"  type="text" placeholder="¿Qué estás buscando?...">
          <button type="submit"><img src="../static/img/lupita.png" alt="Buscar"></button>
        </form>
      </div>
      <div class="user mobile">
        <div class="login">
          <button id="loginBtn">Mi cuenta</button>
          <div class="login-dropdown" id="loginDropdown">
            <a href="../templates/login.html">Iniciar sesión</a>
            <a href="../templates/register.html">Registrarse</a>
          </div>
        </div>
        
        <div class="cart">
          <a href="../templates/cart.html">
            <img src="../static/img/carrito-de-compras50x50.png" alt="Carrito">
            <span class="cart-count mobile" id="cartCount">0</span>
          </a>
        </div>
      </div>
    </nav>
    <nav class="nav-menu">
      <div class="menu">
        <div id="header-links-desktop" >
          <button id="toggle-menu-mobile"><img src="../static/img/menu-hamburguesa.svg" alt="Menu"></button>
        </div>
        <div class="nav-links" id="menu" >
        <button id="cerrar" style="display: none;">✖</button>
        <ul>
          <li> <a href="../index.html"><img class="home-icon" src="../static/img/home-icon-blue.png" alt="Home"></a></li>
          <li><a href="../templates/tienda.html">TIENDA ONLINE</a></li>
          <li><a href="../templates/contacto.html">CONTACTO</a></li>
          <li><a href="../templates/promociones.html">PROMOCIONES</a></li>
          <li><a href="../templates/ofertas.html">OFERTAS</a></li>

          <li class="ocultar"><form>
          <input id="search-input"class="search-input"  type="text" placeholder="¿Qué estás buscando?...">
          <button id= "search-button" type="submit"><img src="../static/img/lupita.png" alt="Buscar"></button>
          </form></li>

          <li class="ocultar"><a href="../templates/login.html">INICIAR SESIÓN</a></li>
          <li class="ocultar"><a href="../templates/register.html">REGISTRARSE</a></li>

        </ul>
      </div>
    </nav>

    
  </header>
`;

document.querySelector("header").innerHTML = cad;
