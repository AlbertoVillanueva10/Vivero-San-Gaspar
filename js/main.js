const menuListHam = document.querySelector('.container__menu-ham')
const openMenuHam = document.querySelector("#btn__menu-ham--open")
const closeMenuHam = document.querySelector('.btn__menu-ham--close')
const blurBackground = document.querySelector('.overlay')

openMenuHam.addEventListener('click', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
    blurBackground.classList.toggle('visible')
})

closeMenuHam.addEventListener('click',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
    blurBackground.classList.remove('visible')
})

// ** Asegurando uso de dispositivos mobiles

openMenuHam.addEventListener('touchstart', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
    blurBackground.classList.toggle('visible')
})

closeMenuHam.addEventListener('touchstart',() => {
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
    blurBackground.classList.remove('visible')
})