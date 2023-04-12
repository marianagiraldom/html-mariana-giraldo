document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "ariel",
      img: "imagenes/ariel.png"
    },
    {
      name: "aurora",
      img: "imagenes/aurora.png"
    },
    {
      name: "bella",
      img: "imagenes/bella.png"
    },
    {
      name: "blancanieves",
      img: "imagenes/blancanieves.png"
    },
    {
      name: "cenicienta",
      img: "imagenes/cenicienta.png"
    },
    {
      name: "rapunzel",
      img: "imagenes/rapunzel.png"
    },

    {
      name: "ariel",
      img: "imagenes/ariel.png"
    },
    {
      name: "aurora",
      img: "imagenes/aurora.png"
    },
    {
      name: "bella",
      img: "imagenes/bella.png"
    },
    {
      name: "blancanieves",
      img: "imagenes/blancanieves.png"
    },
    {
      name: "cenicienta",
      img: "imagenes/cenicienta.png"
    },
    {
      name: "rapunzel",
      img: "imagenes/rapunzel.png"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
function verificarPareja() {
 var cards=document.querySelectorALl("img");
 const opcionUnold = cartasEscogidasId[0];
 const opcionDosId = cartasEscogidasId[1];
}

if (opcionUnoId === opcionDosId) {
cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
cards[opcionDosId].setAttribute("sIc", "imagenes/reverso.png");
alert(" Diste click a la misma imagen!");
}else if (cartasEscogidas [0] === cartasEscogidas [1]) {
alert("¡correcto!");
cards[opcionUnoId].setAttribute("sIc", "imagenes/blank-png");
cards [opcionDosId].setAttribute("src", "imagenes/blank-png");
cards [opcionUnoId1].removeEventListener("click",voltearCarta);
cards [opcionDosId1].removeEventListener("click",voltearCarta);
cartasGanadas.push(cartasEscogidas);
} 
else {
cards[opcionUnoId]-setAttribute("src", "imagenes/reverso.png");
cards[opcionDosId]-setAttribute("sIc", "imagenes/reverso.png");
alert("¡Intenta de nuevo!");
}
cartasEscogidas = [];
cartasEscogidasId = [];

resultado.textContent = cartasGanadas.length;

if (cartasGanadas.length = cardAdj.length / 2) {
  resultado.textContent = "¡Felicidades, encontraste todos los pares!";
   }
}

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
