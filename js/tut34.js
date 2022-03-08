console.log("This is tutorial 34");




// // Synchronous Example

// Synchronous mai 'done printing synchronous' ye tak tak ni likh kar aayega jab tak saara ka saara loop finish na hoo je

// for (let index = 0; index < 100; index++) {
//     const element = index;
//     console.log("This is index number" + index);
    
// }
// console.log('done printing synchronous');










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// Asynchronous Example

// isme for loop ko function ke andr daal diya too ye block ni kar raha ,
// iske mane ye kiya hai ki for loop ko asynchronous code bana diya 
// too isme 'done printing asynchronous' phle likh ke aa jega 

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);

console.log('done printing asynchronous');