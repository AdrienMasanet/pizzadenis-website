import Pizza from "@/interfaces/Pizza";
import * as pizzaBases from "@/data/pizzaBases";
import * as ingredients from "@/data/ingredients";

const pizzas: Pizza[] = [
  { name: "Marguerita", priceSmall: 8.0, priceBig: 11.0, ingredients: [ingredients.tomato, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Prochutto", priceSmall: 9.0, priceBig: 12.0, ingredients: [ingredients.tomato, ingredients.ham, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Provencale", priceSmall: 9.0, priceBig: 12.0, ingredients: [ingredients.tomato, ingredients.garlic, ingredients.mushrooms, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Romana", priceSmall: 9.0, priceBig: 12.0, ingredients: [ingredients.tomato, ingredients.chorizo, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Cippolina", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.ham, ingredients.chorizo, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Isabella", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.ham, ingredients.mushrooms, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Royale", priceSmall: 11.0, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.ham, ingredients.mushrooms, ingredients.chorizo, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Vesuvia", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.ham, ingredients.artichokes, ingredients.cheese, ingredients.olives], base: pizzaBases.tomatoBase },
  { name: "Regina", priceSmall: 11.0, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.ham, ingredients.chorizo, ingredients.artichokes, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Audrey", priceSmall: 9.0, priceBig: 12.5, ingredients: [ingredients.tomato, ingredients.strasbourgSausages, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Laetitia", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.onions, ingredients.strasbourgSausages, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Siciliana", priceSmall: 9.0, priceBig: 12.0, ingredients: [ingredients.tomato, ingredients.anchovy, ingredients.capers, ingredients.olives], base: pizzaBases.tomatoBase },
  { name: "Napoletana", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.anchovy, ingredients.capers, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Fruits de mer", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.molds, ingredients.shrimps, ingredients.calamari, ingredients.garlic, ingredients.parsley, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Marinade", priceSmall: 11.0, priceBig: 14.0, ingredients: [ingredients.tomato, ingredients.rouille, ingredients.molds, ingredients.shrimps, ingredients.calamari, ingredients.garlic, ingredients.parsley, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Tramontane", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.cream, ingredients.molds, ingredients.shrimps, ingredients.calamari, ingredients.garlic, ingredients.parsley, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Saumon", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.cream, ingredients.salmon, ingredients.cheese, ingredients.garlic, ingredients.parsley, ingredients.lemon], base: pizzaBases.creamBase },
  { name: "Diana", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.cream, ingredients.crayfish, ingredients.garlic, ingredients.parsley, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Fanny", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.tuna, ingredients.onions, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Marius", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.onions, ingredients.tuna, ingredients.pepper, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Rock", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.cream, ingredients.roquefort, ingredients.mushrooms, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Chèvre", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.cream, ingredients.goatCheese, ingredients.garlic, ingredients.parsley, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Normande", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.cream, ingredients.camembert, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "3 Fromages", priceSmall: 11.0, priceBig: 14.0, ingredients: [ingredients.cream, ingredients.roquefort, ingredients.goatCheese, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "4 Fromages", priceSmall: 11.5, priceBig: 14.5, ingredients: [ingredients.cream, ingredients.camembert, ingredients.roquefort, ingredients.goatCheese, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Mélanie", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.roquefort, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Manon", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.goatCheese, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Gina", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.cream, ingredients.onions, ingredients.baconBits, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Tartiflette", priceSmall: 13.0, priceBig: 16.0, ingredients: [ingredients.cream, ingredients.potatoes, ingredients.onions, ingredients.baconBits, ingredients.reblochon, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Charlottina", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.garlic, ingredients.pepper, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Sylvia", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.ham, ingredients.cheese, ingredients.pepper, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Marie Jeanne", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.mustard, ingredients.onions, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Zoubida", priceSmall: 9.0, priceBig: 12.0, ingredients: [ingredients.tomato, ingredients.merguez, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Lila", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.onions, ingredients.merguez, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "L'orientale", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.onions, ingredients.pepper, ingredients.merguez, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Angela", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.eggplants, ingredients.ham, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Palerma", priceSmall: 12.0, priceBig: 15.0, ingredients: [ingredients.tomato, ingredients.eggplants, ingredients.ham, ingredients.mushrooms, ingredients.chorizo, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Chef", priceSmall: 13.0, priceBig: 16.0, ingredients: [ingredients.tomato, ingredients.eggplants, ingredients.ham, ingredients.mushrooms, ingredients.chorizo, ingredients.artichokes, ingredients.cheese, ingredients.olives], base: pizzaBases.tomatoBase },
  { name: "Chèvre miel", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.cream, ingredients.goatCheese, ingredients.cheese, ingredients.honey], base: pizzaBases.creamBase },
  { name: "Raclette", priceSmall: 13.0, priceBig: 16.0, ingredients: [ingredients.cream, ingredients.potatoes, ingredients.ham, ingredients.mushrooms, ingredients.racletteCheese, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Etna", priceSmall: 12.0, priceBig: 15.0, ingredients: [ingredients.tomato, ingredients.onions, ingredients.mincedMeat, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Canigou", priceSmall: 12.0, priceBig: 15.0, ingredients: [ingredients.cream, ingredients.onions, ingredients.mincedMeat, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "Pepper", priceSmall: 12.5, priceBig: 15.5, ingredients: [ingredients.tomato, ingredients.onions, ingredients.pepperSauce, ingredients.mincedMeat, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Stromboli", priceSmall: 13.0, priceBig: 16.0, ingredients: [ingredients.cream, ingredients.roquefort, ingredients.onions, ingredients.mushrooms, ingredients.mincedMeat, ingredients.cheese], base: pizzaBases.creamBase },
  { name: "St Jacques", priceSmall: 12.5, priceBig: 15.5, ingredients: [ingredients.cream, ingredients.cheese, ingredients.freshScallopsWithCoral, ingredients.garlic, ingredients.parsley, ingredients.lemon], base: pizzaBases.creamBase },
  { name: "Lydie", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.mushrooms, ingredients.pepper, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Végétarienne", priceSmall: 10.5, priceBig: 13.5, ingredients: [ingredients.tomato, ingredients.mushrooms, ingredients.artichokes, ingredients.pepper, ingredients.cheese], base: pizzaBases.tomatoBase },
  { name: "Paysanne", priceSmall: 10.0, priceBig: 13.0, ingredients: [ingredients.tomato, ingredients.onions, ingredients.baconBits, ingredients.cheese], base: pizzaBases.tomatoBase },
];

export default pizzas;
