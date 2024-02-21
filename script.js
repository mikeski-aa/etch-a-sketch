//listener added to wait for DOM to load before loading script file
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    let newCol = '';
    let numberOfBox = 16;
    let boxSize = 60;

    container.addEventListener('mouseover', function(e){
        e.target.classList.add('new-colour')
        getRandomColour();
        e.target.setAttribute('style', `background: ${newCol}; width: ${boxSize}px; height: ${boxSize}px;`)
        
    })
    const clearBoxes = document.querySelector('.newSize');
    const addNew = document.querySelector('.addNew');
    
    


    clearBoxes.addEventListener('click', () => {
        let toDel = document.querySelectorAll('.boxes');
        toDel.forEach(function(box){
        box.parentNode.removeChild(box);
        })

        let input = +prompt('Enter how many boxes you want to see');
        if (input >= 100){
            alert('Error');
        } else {

        for (let i = 0; i < input*input; i++){
            let newBox = document.createElement('div');
            newBox.classList.add('boxes');
            container.appendChild(newBox);
        }
        let boxes = document.querySelectorAll('.boxes');
    
//this returns a nodelist not 1 element hence forEach instead selecting one  
    
        boxes.forEach(function(box){
        let boxWidth = (960/input);
        box.setAttribute('style', `width: ${boxWidth}px; height: ${boxWidth}px;`);
        })
        boxSize = 960/input;
        return boxSize;
    }})
    
 
//this creates new boxes depending on numberOfBox^2. After boxes are added, all new boxes are returned in a node

    for (let i = 0; i < numberOfBox*numberOfBox; i++){
        let newBox = document.createElement('div');
        newBox.classList.add('boxes');
        container.appendChild(newBox);
    }
    let boxes = document.querySelectorAll('.boxes');

//this returns a nodelist not 1 element hence forEach instead selecting one  

    boxes.forEach(function(box){
    let boxWidth = (960/numberOfBox);
    box.setAttribute('style', `width: ${boxWidth}px; height: ${boxWidth}px;`);
    })

//generates random hex colour code
function getRandomColour() {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i=0; i<6; i++){
        colour += letters[Math.floor(Math.random()*16)];
    }
    console.log(colour);
    newCol = colour;
    return newCol;
}
    


// Expected output: 0, 1 or 2
    

    

})


