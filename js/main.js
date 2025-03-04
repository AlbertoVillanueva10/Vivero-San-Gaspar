const containerMenuHam = document.querySelector('.container__menu-ham')
const btnOpenMenuHam = document.querySelector("#btn__menu-ham--open")
const btnXCloseMenuHam = document.querySelector('.btn__menu-ham--close')
const blurBackground = document.querySelector('.overlay')
const anyLinkMenuHamSelected = document.querySelectorAll('#menu__ham-list li a')


// ** Al presionar el boton hamburguesa agrega las siguientes clases 
btnOpenMenuHam.addEventListener('click', () => {
    // ** Abre el menu hamburguesa
    containerMenuHam.classList.toggle('open')
    // ** Agrega el efecto borroso al resto de la pantalla, fuera del menu
    blurBackground.classList.toggle('visible')
})

btnXCloseMenuHam.addEventListener('click',() => {
    // ** Cierra el menu hamburguesa removiendo la clase 'open' con el metodo toogle
    containerMenuHam.classList.toggle('open')
    // ** Remueve la clase visible de la clase overlay
    blurBackground.classList.toggle('visible')
})

// ** Asegurando uso de dispositivos mobiles

// btnOpenMenuHam.addEventListener('touchstart', () => {
//     containerMenuHam.classList.toggle('open')
//     btnOpenMenuHam.classList.toggle('close')
//     blurBackground.classList.toggle('visible')
// })

// // btnXCloseMenuHam.addEventListener('touchstart',() => {
// //     btnOpenMenuHam.classList.remove('close')
// //     containerMenuHam.classList.remove('open')
// //     blurBackground.classList.remove('visible')
// // })

// //** Al presionar el menu hamburguesa cerrar el menu */


// anyLinkMenuHamSelected.forEach(link => {
//     link.addEventListener('touchstart', () => {
//         console.log("entro foreach touchstart")
//         containerMenuHam.classList.toggle('open')
//         blurBackground.classList.toggle('visible')
//         btnOpenMenuHam.classList.toggle('open')
//     })
// })

// anyLinkMenuHamSelected.forEach(link => {
//     link.addEventListener('click', () => {
//         console.log("entro foreach click")
//         containerMenuHam.classList.toggle('open')
//         blurBackground.classList.toggle('visible')
//         btnOpenMenuHam.classList.toggle('open')
//     })
// })

// anyLinkMenuHamSelected.forEach(link => {
//     link.addEventListener('click', () => {
//         console.log("entro foreach click")
//         containerMenuHam.classList.remove('open')
//         blurBackground.classList.remove('visible')
//         btnOpenMenuHam.classList.remove('open')
//     })
// })