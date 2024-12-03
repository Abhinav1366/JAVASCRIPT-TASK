// COUNTER FUNCTION


function counter (){
    let count = 0;
    return {
        increment: function(){
            count ++
            return count;
        },
        decrement: function(){
            count --
            return count;
        }
    }
}

const createCounter =  counter(); 
console.log(createCounter.increment(2));
console.log(createCounter.decrement(1));

