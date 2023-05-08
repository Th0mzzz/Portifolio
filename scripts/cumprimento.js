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
