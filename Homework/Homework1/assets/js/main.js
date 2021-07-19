//Task 1 Create an empty object user.
let emptyUser= new Object();

//Task 2 Add the property name with the value John.
const username="firstname";
emptyUser[username]="John";

//Task 3 Add the property surname with the value Smith.
emptyUser["secondName"]="Smith";

//Task 4 Change the value of the name to Pete.
emptyUser[username]="Pete";

//Task 5 Remove the property name from the object.
delete emptyUser["firstname"];

// for(let key in emptyUser){
//     console.log(emptyUser[key]);
// }

//Task 6 Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function customIsEmpty(obj){

    let arrayObj=Object.keys(obj);
    for (let i = 0; i < arrayObj.length; i++) {
        return true;
    }
    return false;
}
let Obj={
    name: "Ilham"
}
// console.log(customIsEmpty(Obj));

//Task 7 Write the code to sum all salaries and store in the variable sum.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  sum(){
      let sum=0;
      sum+=salaries.Ann+salaries.John+salaries.Pete;
      return sum;
  }
};

// console.log(salaries.sum());

//Task 8 Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyByTwo(obj){

    let arrayObj=Object.values(obj);
    let modifyObj=arrayObj.map(element=> typeof element == 'number'?element*2:element);
    var menuConverted = {};
    for (var i = 0; i < modifyObj.length; ++i)
    menuConverted[i] = modifyObj[i];
    return menuConverted;

  }

//   console.log(multiplyByTwo(menu));