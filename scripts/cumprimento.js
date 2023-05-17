let cumprimento = document.getElementById("cumprimento");
let data = new Date();
let hora = data.getHours();


    if (hora >= 6 && hora < 12) {
        cumprimento.innerHTML = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        cumprimento.innerHTML = "Boa tarde!";
    } else {
        cumprimento.innerHTML = "Boa noite!";
    }


// MENU-MOBILE

const menuBtn = document.querySelector('.menu_burguer');
const menuItens = document.querySelector('#menu-itens');
let burguerIcons = document.querySelectorAll('.burguer')

menuBtn.addEventListener('click', menuMobile);

function menuMobile(){

    if(menuItens.style.display == 'none'){
        menuItens.style.display = 'flex';
        burguerIcons[0].classList.add('hidden');
        burguerIcons[1].classList.remove('hidden');
    }else{

        menuItens.style.display = 'none'
        burguerIcons[0].classList.remove('hidden');
        burguerIcons[1].classList.add('hidden')
    }
}
