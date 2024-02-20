//listener added to wait for DOM to load before loading script file
document.addEventListener("DOMContentLoaded", () => {

//assigned constants to elements that will be affected by following code, declared starting values for X and Y

    const btn = document.querySelector('button');
    const container = document.querySelector('.container');
    let x = 7;
    let y = 15;

//functions to be executed
    drawStart();

//function creates initial 16x16 divs    
//for loop to create divs depending on X and Y values
    function drawStart(){
        dynamicScaling();
        for (let i = 0; i < x*y; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('new');
            container.appendChild(newDiv);
        }
    }

//scale width with number of X boxes, never above 960px
    function dynamicScaling(){
        let newWidth = x * 60;
        if (newWidth > 960) {
            alert('ERROR');
        } else container.setAttribute('style', `width: ${newWidth}px`)
    }

})