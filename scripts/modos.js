
const botaocolor = document.getElementById("toggle-btn");

function mudarCor(){

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