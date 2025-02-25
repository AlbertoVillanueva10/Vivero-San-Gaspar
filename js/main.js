const menuListHam = document.querySelector('.container__menu-ham')
const openMenuHam = document.querySelector("#btn__menu-ham--open")
const closeMenuHam = document.querySelector('.btn__menu-ham--close')
const bodyColor = document.querySelector('body')

openMenuHam.addEventListener('click', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
    bodyColor.classList.toggle('opacity')
})

closeMenuHam.addEventListener('click',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
    bodyColor.classList.remove('opacity')
})

// ** Asegurando uso de dispositivos mobiles

openMenuHam.addEventListener('touchstart', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
    bodyColor.classList.toggle('opacity')
})

closeMenuHam.addEventListener('touchstart',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
    bodyColor.classList.remove('opacity')
})