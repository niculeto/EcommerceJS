class Producto {
    constructor(id, nombre, precio, origen, stock, img) {
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.precio = parseFloat(precio);
      this.origen = origen;
      this.stock = stock;
      this.img = img;
    }
  }
  
  //ARRAY
  const catalogoC = [];
  const carrito = 0;
 
  //PRODUCTOS
  //AGREGAR IMAGENES
  catalogoC.push(new Producto(1,"Espresso Colombia",1100,"Colombia, Huila",20,"./assets/paquete.jpeg"));
  catalogoC.push(new Producto(2,"Espresso Mineiro Bourbon",1150,"Brasil, Minas Gerais",10,""));
  catalogoC.push(new Producto(3,"Espresso Bolivia", 2200, "Bolivia", 5));
  catalogoC.push(new Producto(4,"Blend Colombia-Brasil", 1800, "Colombia y Brasil", 40));
  catalogoC.push(new Producto(5,"Finca la Linda", 1600,"Bolivia",5));
  catalogoC.push(new Producto(6,"Finca Floripondio", 1800,"Bolivia",4));
  catalogoC.push(new Producto(7,"Finca el Fuerte", 1860,"Bolivia",5));
  catalogoC.push(new Producto(8,"Sol de la mañana", 2100,"Bolivia",2));






//PONER IMAGENES DE PRODUCTOS
for(producto of catalogoC){
$("#productos-mostrar").append(`
<div class="col mb-5">
<div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${producto.img}" alt="grano de bolivia" />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${producto.nombre}</h5>
            <!-- Product price-->
            $${producto.precio}.-
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" id="producto-seleccionado">
        <div class="text-center"><button class="btn btn-outline-dark mt-auto" class="button" )">Agregar al carrito</button></div>
    </div>
</div>
</div>
`)
}

const clickButton = querySelectorAll(".btn");
console.log(clickButton);

clickButton.forEach(btn => {
    btn.addEventListener(`click`, () => console.log(".btn"))
});












//UTILIZAR MAP PARA LOOP
/*
for(carrito of catalogoC){
    document.getElementById("producto-seleccionado").onclick = function(){

    }
}*/


//AGREGAR AL CARRITO
/*document.getElementById("producto-seleccionado").onclick = function() {
    let productos = document.createElement("div", "p");
    productos.innerHTML = `<div class="container"><p>${catalogoC[0].nombre}</p><p>${catalogoC[0].precio}</p>
    </div>`;
    document.body.append(productos);
    productos.style.textAlign = "center";
    productos.style.color = "#459958";
    productos.style.backgroundColor = "#212529";
    productos.style.display = "flex";
    productos.style.justifyContent = "center";
    console.log("aca");
}*/



