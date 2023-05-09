const botaocolor = document.getElementById("toggle-btn");

function mudarCor(){
/*const fundoValue = document.documentElement.style.getPropertyValue("--cor-fundo");
    
Solução-1

if(fundoValue === "#141414"){
    document.documentElement.style.setProperty("--cor-primaria", "#8C52FF");
    document.documentElement.style.setProperty("--cor-primaria-2", "#9662ff");
    document.documentElement.style.setProperty("--cor-secundaria", "#000000");
}else{
    document.documentElement.style.setProperty("--cor-primaria", "#87cefa");
    document.documentElement.style.setProperty("--cor-secundaria", "#ffffff");
    document.documentElement.style.setProperty("--cor-fundo", "#141414");
}*/

/*----Solução 2*/ 

const root = document.querySelector(':root');

if(root.classList == 'light'){
    root.classList.remove('light')
}else{
    root.classList.add('light')
}





};