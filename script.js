async function fetchProductos() {
  try {
    const response = await fetch("./productos.json");
    const data = await response.json();
    return data.productos;
  } catch (error) {
    console.log(error);
  }
}

const contenedor = document.querySelector("#contenedorProducto");

async function getProducts() {
  const productos = await fetchProductos();
  productos.forEach((producto) => {
    contenedor.innerHTML += `
        <div class="tarjeta">
        <img src=${producto.img} alt=${producto.nombre}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <p class="descripcion">${producto.descripcion}</p>            
            <button class="btn">COMPRAR AHORA</button>
            </div> 
        `;
  });
}
getProducts();

function scrolltoTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
