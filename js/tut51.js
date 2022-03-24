console.log('The file is tutorial 51');
// Iterators

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {                                 // ye function ki return value hai
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {                          // ye next function ka return hai
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
