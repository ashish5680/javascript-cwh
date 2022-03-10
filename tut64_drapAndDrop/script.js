console.log('This is drag and drop utility');
// Drag and Drop Elements with JavaScript and HTML

console.log("\n");






const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');





// Event listeners for draggable element imgBox
                                    // e matlab jispe event lagaya hua hai
imgBox.addEventListener('dragstart', (e) => {       // yaha pe pick kiya
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);        // ye 0 time out chalane ka matlab ye hota hai ki jab sab kuch hoo jaaye tab ye chale
});






imgBox.addEventListener('dragend', (e) => {       //  yaha pe mouse ke button ko leave kr diya
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});







for (whiteBox of whiteBoxes) {

    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();                            
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    });

}
