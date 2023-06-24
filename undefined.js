function add(num1,num2) {
    console.log(num1+num2);
    
}

console.log(add(2,3));//undefined cz return kore nai
function add2(num1,num2) {
    console.log(num1+num2);
    return
}

console.log(add2(2,3));//undefined cz return kore nai
function add2(num1,num2) {
    console.log(num1+num2);
    return num1+num1;
}

console.log(add2(2,3));//defined cz return korse


//variable er value na thaklei undefined dekhabe default vabe

let fun=undefined;
console.log(fun);//undefined


//null means not exist.null must be set korte hobe.nahole null dibena
