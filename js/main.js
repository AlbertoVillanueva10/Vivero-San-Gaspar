const menuListHam = document.querySelector('.container__menu-ham')
const openMenuHam = document.querySelector("#btn__menu-ham--open")
const closeMenuHam = document.querySelector('.btn__menu-ham--close')

openMenuHam.addEventListener('click', () => {
    menuListHam.classList.toggle('open')
    openMenuHam.classList.toggle('close')
})

closeMenuHam.addEventListener('click',() => {
    // menuListHam.classList.toggle('close')
    openMenuHam.classList.remove('close')
    menuListHam.classList.remove('open')
})