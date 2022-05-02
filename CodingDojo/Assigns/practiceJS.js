const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = animals;

const [a,, ...b] = animals;
console.log(b);
