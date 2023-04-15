// // variables
// const formulario = document.getElementById('formulario')
// const inputName = document.getElementById('name')
// const inputLastname = document.getElementById('lastname')
// const inputEmail = document.getElementById('email')
// const errorText = document.getElementById('errorMessage')
// const welcomeMessage = document.getElementById('welcomeMessage')
// const submitBtn = document.getElementById('submitBtn')
// const lista = document.getElementById('lista')
// const primerBtn = document.querySelector('#primerBtn')
// const carDetails = document.getElementById('carDetails')
// const userInformation = {
//     inputName: inputName.value,
//     inputLastname: inputLastname.value,
//     inputEmail: inputEmail.value
// }

// // condition to unable button if userInformation is empty
// if(!inputName.value && !inputLastname.value && !inputEmail.value){
//     document.querySelector('#primerBtn').disabled = true;
// }

// // text added to 'primerBtn' 
// primerBtn.innerText = 'Ver productos'

// // form submit
// formulario.onsubmit = (e) => { 
//     e.preventDefault()
//     const userInformation = {
//         inputName: inputName.value,
//         inputLastname: inputLastname.value,
//         inputEmail: inputEmail.value
//     }

//     if(!inputName.value && !inputLastname.value && !inputEmail.value){
//         errorText.innerHTML = 'Faltan datos de ingresar'
//         errorText.style.color = "red"
//     } else if(!inputName.value) {
//         errorMessage.innerText = 'Ingresa tu nombre'
//         errorMessage.style.color = "red";
//     }  else if(!inputLastname.value){
//         errorMessage.innerText = 'Ingresa tu apellido'
//         errorMessage.style.color = "red";
//     }   else if(!inputEmail.value){
//         errorMessage.innerText = 'Ingresa tu email'
//         errorMessage.style.color = "red";
//     } else {
//         console.log('userInformation', userInformation)
//         console.log('inputEmail.value', inputEmail.value)
//         errorMessage.remove()
//         localStorage.setItem('userInformation', JSON.stringify(userInformation))
//         formulario.remove()
//         welcomeMessage.innerText = `Bienvenido ${inputName.value} ${inputLastname.value}, haz click en el boton para ver productos`
//         document.querySelector('#primerBtn').disabled = false;

//     }
// }
// console.log('userInformation', userInformation)



// // add classList to lista
// lista.classList.add("grid-layout")



// // fetch api
// primerBtn.onclick = () => {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then((resp) => resp.json())
//     .then((resp) => {
//     const pokemons = resp.results
//     welcomeMessage.innerText = `${inputName.value}, haz click en el cada personaje para agregarlo al carrito`
//     // console.log(pokemons)
//     //     pokemons.forEach(chars => {
//     //         // li element for each card
//     //         const li = document.createElement('li')
//     //         li.classList.add("caja")
//     //         li.innerHTML = 
//     //         `
//     //         <div class="cardBox">
//     //         <p>$${chars.id}</p>
//     //         <p style="text-align: center;">${chars.name}</p>
//     //         <img src=${chars.image} style="width: 60px;height: 70px;">
//     //         <button id="addToCartBtn">Add to cart</button>
//     //         </div>
//     //         `
//     //         lista.append(li)
//     //         console.log(li)
//     //         li.onmouseover = () => console.log('mouse over')
//     //         li.onclick = () => console.log('onclick')
//     //         // nex text for button
//     //         primerBtn.innerText = 'Ver más productos'
//     //         // // car price
//     //         // carDetails.innerText = 'total $0'
//     //     })
//     // })
//     // // error
//     // .catch(e => console.log(e))

//     // // cart variable
//     // var cart = []

//     // //func add to cart
//     // cart.push({...categories})

//     // function displaycart(){
//     //     let j = 0;
//     //     if(cart.length ==0){
//     //         document.getElementById('cartItem').innerHTML = "your cas is empty"
//     //     } else {
//     //         document.getElementById('cartItem').innerHTML = cart.map((items) => {
//     //             var {image, title, price} = items;
//     //             return(
//     //                 `<div class='cart-item'>
//     //                     <div class='row-img'>
//     //                         <img class='rowing' src=${image}>
//     //                     </div>
//     //                     <p style='font-size:12px'>${title}</p>
//     //                     <h2 style='font-size:15px'>$${price}</h2>
//     //                 </div>`
//     //             )
//     //         })
//     //     }
//     // }


    
// }


