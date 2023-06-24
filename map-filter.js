const a=[66,9,6,3,1,5,8];
// const o=[];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     const result=element*element;
//     o.push(result);
    
// }

let res=a.map(function(element,index,array){
    console.log(element,index);
})
 res=a.map(function(element){
    return element*2;
})


const sqare=(element)=>element*element;
console.log(a.map(sqare));
//console.log(o);
console.log(res);

const bigger=a.filter(x=>x>=5)
console.log("Yummy",bigger);
const smaller=a.filter(x=>x<=5)
console.log("Yummy",smaller);

const isTHere=a.find(x=>x>5);
console.log(isTHere);