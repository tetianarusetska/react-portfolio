const Animals = ["Hund", "Katze", "Vogel", "Pferd"];

const newAnimals = Animals.map(an => an.toUpperCase());
console.log(newAnimals);



const Prices = [4.99, 5.99, 3.45, 2.67];

const newPrices = Prices.map(pr => `${Math.ceil(pr)} euro`);
console.log(newPrices);