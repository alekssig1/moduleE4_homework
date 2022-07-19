// Задание 3.
//
// Написать функцию, которая создает пустой объект, но без прототипа.


function newObject(){
    return  Object.create(null)

}


//let oldObj = {}; // __proto__: Object
//let newObj = new Object(); // __proto__: Object
//let objCreate = Object.create(null); // No properties