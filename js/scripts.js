const clickButton = document.querySelectorAll('.botones');
const tbody = document.querySelector(".tbody");
let carrito = []



clickButton.forEach(btn => {
    btn.addEventListener(`click`, addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest(".card");
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrice = item.querySelector(".card-price").textContent;
    const itemImg = item.querySelector(".card-img-top").src;

    const newItem = {
        title: itemTitle,
        price: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}



function addItemCarrito(newItem){

    const inputElement = tbody.getElementsByClassName("input__element")
    for(i= 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim())
            carrito[i].cantidad ++;
            const inputValue = inputElement[i]
            inputValue.value++;
            CarritoTotal()
            return null;
    }
    carrito.push(newItem)
    renderCarrito()
}



function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
    const tr = document.createElement("tr")
    tr.classList.add("itemCarrito")
    const content =`
        <th scope="row">1</th>
        <td class="table__productos">
            <img class="imagen__carrito" src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__price"><p>${item.price}</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input__element">
            <button class="delete btn btn-danger">X</button>
        </td>
    `
        tr.innerHTML = content;
        tbody.append(tr);

        tr.querySelector(".delete").addEventListener("click",removeItemCarrito);
        tr.querySelector(".input__element").addEventListener("change", sumaCantidad());
    })
    CarritoTotal()
}


function CarritoTotal(){
    let total= 0;
    const itemCartTotal = document.querySelector(".itemCartTotal");
    carrito.forEach((item) => {
        const price = Number(item.price.replace("$", ""));
        total = total + price*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${total}`    
}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".itemCarrito")
    const title = tr.querySelector(".title").textContent;
    for (let i= 0;  i<carrito.length; i++) {
        if (carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }
    tr.remove();
    CarritoTotal();
}

function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".itemCarrito")
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal();
        }
    })
    console.log(carrito);
}
