// MENU-MOBILE


const menuBtn = document.querySelector('.menu_burguer');
const menuItens = document.querySelectorAll('.item');
const menu = document.querySelector('#menu-itens');
let burguerIcons = document.querySelectorAll('.burguer')

menuBtn.addEventListener('click', menuMobile);



for(i = 0; i < menuItens.length; i++){

    menuItens[i].addEventListener('click', () => { 

        if(window.innerWidth < 900){
        menu.style.display = 'none';
        burguerIcons[0].classList.remove('hidden');
        burguerIcons[1].classList.add('hidden');}

    });


}

if(window.innerWidth >= 900){
    menu.style.display = 'flex';
}


function menuMobile(){

    // Fechar e abrir menu

    if(menu.style.display == 'none'){
        menu.style.display = 'flex';
        burguerIcons[0].classList.add('hidden');
        burguerIcons[1].classList.remove('hidden');
    }else{

        menu.style.display = 'none';
        burguerIcons[0].classList.remove('hidden');
        burguerIcons[1].classList.add('hidden');
    }



}

// Mudar tema 

const botaoTema = document.getElementById("toggle-btn");
botaoTema.addEventListener('click', mudarTema);

function mudarTema(){

// Alterando a class do root para alterar as cores
const root = document.querySelector(':root');

if(root.classList == 'light'){
    root.classList.remove('light')
}else{
    root.classList.add('light')
}

// Alterando os icones do botão

const icones = document.querySelectorAll('.icone');
let saturn = document.getElementById('saturn');



if(icones[0].classList.contains('hidden')){
    saturn.src = 'imgs/Saturn-blue.png'
    icones[0].classList.remove('hidden');
    icones[1].classList.add('hidden');
    
    
}else{

    icones[0].classList.add('hidden');
    icones[1].classList.remove('hidden');
    saturn.src = 'imgs/Saturn-purple.png'
}




};

// Horario
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
