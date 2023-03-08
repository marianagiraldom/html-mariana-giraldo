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

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});

function voltearCarta() {
  var cardId = this.getAttribute("data-Id");
  cartasEscogidas.push(cardAdj[cardId].name);
  cartasEscogidasId.push(cardId);
  this.setAttribute("src", cardAdj[cardId].img);
  if (cartasEscogidas.length === 2){
    setTimeout(verificarPareja, 1000);
  }
}
crearTablero();
});
