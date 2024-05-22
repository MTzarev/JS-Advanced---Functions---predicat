function predicat(input){
let found = input.filter(isFound).sort((a,b)=>a-b);

function isFound(target){
    return target>10
}
console.log(found);

}
predicat([1,5,7,12,15,11,27,9])