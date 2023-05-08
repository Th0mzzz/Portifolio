const botaocolor = document.getElementById("toggle-btn");


function mudarCor(){
const fundoValue = document.documentElement.style.getPropertyValue("--cor-fundo");

if(fundoValue === "#141414"){
    document.documentElement.style.setProperty("--cor-primaria ", "#8C52FF");
    document.documentElement.style.setProperty("--cor-secundaria ", "#000000");
    document.documentElement.style.setProperty("--cor-fundo", "#F5F5DC")
}else{
    document.documentElement.style.setProperty("--cor-primaria ", "#87cefa");
    document.documentElement.style.setProperty("--cor-secundaria ", "#ffffff");
    document.documentElement.style.setProperty("--cor-fundo", "#141414")
}



};