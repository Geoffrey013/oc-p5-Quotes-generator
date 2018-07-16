var generator = Object.create(QuoteGenerator);
generator.init(themeLibrary);

function navigation() {
  var themeIndexes = [];

  generator.themes.forEach(function(theme, index) {
    console.log("Pour le theme '" + theme.name + "' tapez '" + index + "'");

    // convertis l'index en String
    var indexToString = index.toString();

    themeIndexes.push(indexToString);
  });

  console.log("Pour quitter, tapez 'quitter'")

  var option = prompt("Veuillez choisir une option:");

  // teste si la valeur de 'option' est comprise dans le tableau des index 'themeIndexes'
  if (themeIndexes.indexOf(option) === -1) {
    if (option === "quitter") {
      console.log("Au revoir 😢");
    } else {
      console.log("Je n'ai pas compris");
      navigation();
    }
  } else {
    //choisir nombre de citations
    var quotesCount = Number(prompt("Combien voulez-vous afficher de citations?"));

    while (isNaN(quotesCount)) {
      console.log("je n'ai pas compris");
      quotesCount = Number(prompt("combien voulez-vous afficher de citations ?"));
    }

    console.clear();

    //afficher les citations
    for (var i = 0; i < quotesCount; i++) {
      generator.display(option);
    }

    navigation();
  }
}

/***DEPART***/
navigation();
