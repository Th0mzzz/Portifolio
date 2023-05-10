
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

let icon1 = icones[0];
let icon2 = icones[1];


if(icon2.classList.contains('hidden')){

    icon2.classList.remove('hidden');
    icon1.classList.add('hidden');
}else{
    icon2.classList.add('hidden');
    icon1.classList.remove('hidden');
}

//Alterando o src da img Saturn




};