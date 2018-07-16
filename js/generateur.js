var Quote = {
  init: function(part1, part2, part3, part4) {
    this.part1 = part1;
    this.part2 = part2;
    this.part3 = part3;
    this.part4 = part4;
  }
};

var QuoteGenerator = {
  init: function(themes) {
    this.themes = themes;
  },

  // Generer un indice aléatoire en fonction de la taille des tableaux de chaques parties
  getRandomPart: function(partsLength) {
    return Math.floor(Math.random() * (partsLength));
  },

  generate: function(themeIndex) {
    //1- Generer aleatoirement chaque partie de la citation
    var newPart1 = this.themes[themeIndex].parts1[this.getRandomPart(this.themes[themeIndex].parts1.length)];
    var newPart2 = this.themes[themeIndex].parts2[this.getRandomPart(this.themes[themeIndex].parts2.length)];
    var newPart3 = this.themes[themeIndex].parts3[this.getRandomPart(this.themes[themeIndex].parts3.length)];
    var newPart4 = this.themes[themeIndex].parts4[this.getRandomPart(this.themes[themeIndex].parts4.length)];

    //2- Generer une citation
    var genQuote = Object.create(Quote);
    genQuote.init(newPart1, newPart2, newPart3, newPart4);

    return genQuote;
  },

  display: function(themeIndex) {
    //1- recuperer la citation generee
    var newQuote = this.generate(themeIndex);

    //2- afficher la citation recuperee
    console.log(newQuote.part1 + " " + newQuote.part2 + " " + newQuote.part3 + this.link(newQuote) + newQuote.part4 + ".");
    newQuote = 0;
  },

  // Ajout d'un caractere de liaison si besoin
  link: function(quote) {
    var part3Length = quote.part3.length;
    var voyelles = ["a", "e", "é", "i", "o", "u", "y"];
    var firstCharPart4 = quote.part4.charAt(0);

    if (quote.part3[part3Length - 1] != "d") {
      return " ";
    } else if (voyelles.indexOf(firstCharPart4) === -1) {
      return "e ";
    } else {
      return "'";
    }
  }

};
