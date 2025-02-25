const menuListHam = document.querySelector('.container__menu-ham')
const openMenuHam = document.querySelector("#btn__menu-ham--open")
const closeMenuHam = document.querySelector('.btn__menu-ham--close')

openMenuHam.addEventListener('click', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
})

closeMenuHam.addEventListener('click',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
})

// ** Asegurando uso de dispositivos mobiles

openMenuHam.addEventListener('touchstart', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
})

closeMenuHam.addEventListener('touchstart',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
})