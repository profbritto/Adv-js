function add() {
    console.log(arguments);
    console.log([...arguments]+ "is an array");
    
}

add(5,9,9,3,1,4);