//Create a function that recieves any ammount of arguments
//The arguments are on a list

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, "pp"));

let test = ["pista", "chin"];
let pistachin = ["hola"];
test = [...pistachin];

console.log(test);