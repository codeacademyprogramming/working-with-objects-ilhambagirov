// customSome Prototype
 Array.prototype.customSome=function (cb){
    result= false;
    for (let i = 0; i < this.length; i++) {

        if (cb(this[i])) {
            return true;
        }
    }
    return result;
}
// console.log([1, 4, 3, 9, 11].customSome((element) => element < 0 ? true :false));


//customEvery Prototype
Array.prototype.customEvery=function (cb){
    result= true;
    for (let i = 0; i < this.length; i++) {

        if (!cb(this[i])) {
            return false;
        }
    }
    return result;
}

// console.log([1, 4, 3, 9, 11].customEvery((element) => element < 0 ? true :false));


// customMap Prototype

Array.prototype.customMap=function (cb){
   let result =[];
   for (let i = 0; i < this.length; i++) {
       result.push(cb(this[i],i,this));
   }
   return result;
}
// console.log([1, 4, 3, 9, 11].customMap(element => element *2));


//customForeach Prototype
Array.prototype.customForEach=function (cb){
    let result =[];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i],i,this));
    }
    console.log(result);
 }
// let result=[1, 4, 3, 9, 11].customForEach(element=>element+5);



//customFilter Prototype
Array.prototype.customFilter=function (cb){
    let result =[];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
 }

console.log([1, 4, 3, 9, 11].customFilter(element => element >5? true:false));
