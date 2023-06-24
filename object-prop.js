const students=[
    {id:21,name:"sunny"},
    {id:31,name:"rifat"},
    {id:41,name:"anik"},
    {id:51,name:"junu"},
    {id:61,name:"aku"},
    {id:71,name:"maku"}

];

const names=students.map(s=>s.name);
const ids=students.map(x=>x.id); //sob obj er id check kore id store kore
console.log(names);
console.log(ids);


const bigger=students.filter(s=>s.id>40);//sob obj er id check kore object store kore
console.log(bigger);
const bigger1=students.find(s=>s.id>40);
console.log(bigger1);