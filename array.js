const nums=[1,2,3,4,5,6,7,8,9];
const part =nums.slice(2,5);//2 theke 5 porjonto niye ekta array hoye gese
console.log(part);

const removed =nums.splice(2,5);//2 index theke koyta delete hobe
const removed2 =nums.splice(2,5,777,99,55,55,6,7);//2 index theke koyta delete hobe
console.log(removed);
console.log(removed2);
console.log(nums+"mua");//changed nums


const together =nums.join("ami");
console.log(together);//array er sobgulo niye ekta value hoye jabe