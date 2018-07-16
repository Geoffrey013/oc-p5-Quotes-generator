var Theme = {
  init: function(name, parts1, parts2, parts3, parts4) {
    this.name = name;
    this.parts1 = parts1;
    this.parts2 = parts2;
    this.parts3 = parts3;
    this.parts4 = parts4;
  }
}

var theme1 = Object.create(Theme);
var theme1Part1 = ["Une lada", "Mitterrand", "Un ninja", "Ségolène Royal", "Une licorne", "La finalité du monde"];
var theme1Part2 = ["chante", "se fait extruder par", "passe", "a frappé à mort", "s'agite", "compile"];
var theme1Part3 = ["le chocolat", "l'état Français", "une tomate", "une jeune femme", "une racaille", "un bol", "un écureuil"];
var theme1Part4 = ["plutôt joli", "avec un opposum vertueux", "et un babouin ougandais", "sur un cactus", "de son ami"];
theme1.init("humour", theme1Part1, theme1Part2, theme1Part3, theme1Part4);

var theme2 = Object.create(Theme);
var theme2Part1 = ["En ce qui concerne", "Où que nous mène", "Dans le but de palier à", "Quel que soit"];
var theme2Part2 = ["la politique générale", "la fragilité induite", "l'inconstance de l'époque actuelle", "l'austérité actuelle", "la dégradation contextuelle", "l'ambiance de ces derniers temps"];
var theme2Part3 = ["il serait intéressant d", "on ne peut se passer d", "il faut de toute urgence", "nous sommes contraints d", "il ne faut pas s'interdire d"]
var theme2Part4 = ["étudier toutes les solutions imaginables", "examiner chacunes des problématiques évidentes", "anticiper l'ensemble des issues possibles", "uniformiser la plus grande partie des modalités de bon sens", "revoir la majorité des solutions s'offrant à nous"];
theme2.init("phrases multiples", theme2Part1, theme2Part2, theme2Part3, theme2Part4);

var themeLibrary = [];
themeLibrary.push(theme1);
themeLibrary.push(theme2);
