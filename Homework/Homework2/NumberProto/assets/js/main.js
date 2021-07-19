//customMath class and method implementation
class CustomMath{
    constructor(value){
        this.value=value
    }

    add = function(value)
    {
        this.value+=value
        return this ;
    }

    minus = function(value)
    {

        this.value-=value
        return this;
    }
    
    multiply = function(value)
    {
        this.value*=value
        return this;
    }
    
    divide = function(value)
    {
        this.value/=value
        return this;
    }
    }

const customMath= new CustomMath(5);
// console.log(customMath.multiply(10).minus(5).add(5).divide(5).value) ;



//custom implementation with prototypes
Number.prototype.add=function(value){
    
    return this+value;
}

// console.log((10).add(20));

