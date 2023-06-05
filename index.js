// variables
const formulario = document.getElementById('formulario')
const inputName = document.getElementById('name')
const inputLastname = document.getElementById('lastname')
const inputEmail = document.getElementById('email')
const errorText = document.getElementById('errorMessage')
const welcomeMessage = document.getElementById('welcomeMessage')
const submitBtn = document.getElementById('submitBtn')
const lista = document.getElementById('lista')
const primerBtn = document.querySelector('#primerBtn')
const carDetails = document.getElementById('carDetails')
const buyBtn = document.querySelector('#buyBtn')
const divProducts = document.getElementById('divProducts')
const totalPrice = document.getElementById('TotalPrice')
const endBtn = document.getElementById('end') 
const imgContainer = document.querySelector('.imgContainer')
console.log(imgContainer)

const userInformation = {
    inputName: inputName.value,
    inputLastname: inputLastname.value,
    inputEmail: inputEmail.value
}

// condition to unable button if userInformation is empty
if(!inputName.value && !inputLastname.value && !inputEmail.value){
    document.querySelector('#primerBtn').disabled = true;
    document.querySelector('#buyBtn').disabled = true;

}

// text added to 'primerBtn' 
primerBtn.innerText = 'See characters'
buyBtn.innerText = 'Buy something'

// form submit
formulario.onsubmit = (e) => { 
    e.preventDefault()
    const userInformation = {
        inputName: inputName.value,
        inputLastname: inputLastname.value,
        inputEmail: inputEmail.value
    }

    if(!inputName.value && !inputLastname.value && !inputEmail.value){
        errorText.innerHTML = 'Complete your data'
        errorText.style.color = "red"
    } else if(!inputName.value) {
        errorMessage.innerText = 'Enter your name'
        errorMessage.style.color = "red";
    }  else if(!inputLastname.value){
        errorMessage.innerText = 'Enter your lastname'
        errorMessage.style.color = "red";
    }   else if(!inputEmail.value){
        errorMessage.innerText = 'Enter your email'
        errorMessage.style.color = "red";
    } else {
        errorMessage.remove()
        localStorage.setItem('userInformation', JSON.stringify(userInformation))
        formulario.remove()
        // imgContainer.element.style.display = 'none';
        document.querySelector('.imgContainer').style.display = 'none';;  
        welcomeMessage.innerText = `Welcome ${inputName.value} ${inputLastname.value}, you can choose to see your favorite characters or buy something`
        document.querySelector('#primerBtn').disabled = false;
        document.querySelector('#buyBtn').disabled = false;
        document.querySelector('#TotalPrice').disabled = false;

    }
}



// add classList to lista
lista.classList.add("grid-layout")



// fetch api
primerBtn.onclick = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((resp) => resp.json())
    .then((resp) => {
    const rickMortys = resp.results
    welcomeMessage.innerText = `${inputName.value}, this are the characters`

    const characters = [...new Set(rickMortys.map((item) =>
        {return item}))]
        console.log(characters)
        document.getElementById('root').innerHTML = characters.map((item) => 
        {
            var {image, name, id} = item
            // li element for each card
            const li = document.createElement('li')
            li.classList.add("caja")
            li.innerHTML = 
            `
            <div class="cardBox">
            <p class="charData">Char. ${id}</p>
            <p class="charData" style="text-align: center;  font-weight: bold;">${name}</p>
            <img src=${image} style="width: 60px;height: 70px;">`
            // `<button id='btnAdd' class='btn btn-primary'>Add</button>`
            lista.append(li)

        })
    })
    // error
    .catch(e => console.log(e))

}

buyBtn.onclick = () => {
    welcomeMessage.innerText = `${inputName.value}, add your products, then click the 'total' button after you finish`
        
    // class
    class Product {
        constructor(id, name, price, stock){
            this.id = id
            this.name = name
            this.price = price
            this.stock = stock
        }
    }

    const products = [
        new Product(1, 'Morty t-shirt', 500, 2),
        new Product(2, 'Rick t-shirt', 400, 3),
        new Product(3, 'Jerry t-shirt', 300, 1),
        new Product(4, 'Summer t-shirt', 200, 0),
        new Product(5, 'alien t-shirt', 100, 5)
    ]

    products.forEach(prod => {
        divProducts.innerHTML +=  `
        <div class="cardProduct">
            <div class="card-body">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">$${prod.price}</p>
                <a href="#" class="btn btn-primary" id=${prod.id}>Add</a>
            </div>
        </div>
        `
    })

    //carrito para guardar producto
    const carArray = []
    
    // save function in every button
    const addButtons = document.querySelectorAll('.btn-primary')
    // for each button of addButtons
    addButtons.forEach((button) => {
        button.onclick = () => {
            // product with same id as the button id
            const product = products.find(p => p.id === parseInt(button.id))

            const prodCar = {
                id: product.id,
                name: product.name,
                price: product.price,
                amount: 1
            }

            // to find product with same id in array
            const indexProd = carArray.findIndex(prod => prod.id === prodCar.id)
            // if indexProd doesn't contain it, push prodCar 
            if(indexProd === -1){
                carArray.push(prodCar)
            } else {
                carArray[indexProd].amount++
            }
            console.log(carArray)
        }
    })
    
    //total button
    const buttonEnd = document.querySelector('#end')
    const thead = document.querySelector('#thead')
    const tbody = document.querySelector('#tbody')
    console.log(buttonEnd)
    buttonEnd.onclick = () =>{
        buttonEnd.remove()
        welcomeMessage.innerText = `${inputName.value}, you can see your total below`
        thead.innerHTML += `
    <tr id='trResults'>
        <th scrope="col">Productos</th>
        <th scrope="col">Cantidad</th>
        <th scrope="col">Total</th>
    </tr>
`
    let totalShop = 0

        carArray.forEach(prod => {
            totalShop += prod.amount * prod.price
            tbody.innerHTML += 
            `<tr>
                <td>${prod.name}</td>
                <td>${prod.amount}</td>
                <td>${prod.amount * prod.price}</td>
            </tr>
            `
        })
        
        if(totalShop > 0){
            totalPrice.innerText = `Your total is: ${totalShop}`
            totalPrice.style.color = 'green'
        } else {
            totalPrice.innerText = `Your total is: ${totalShop}, add more products`
            totalPrice.style.color = 'red'
        }

    }
    //total button event
}

