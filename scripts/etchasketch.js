
function createDivs(divs) 
{
    const container = document.querySelector('.container');
    const square = document.createElement('div');
    square.classList.add("square");
    square.setAttribute('style', 'width: 100px; height: 100px')
    square.style.height = divs + "px";
    square.style.width = divs +"px";

    for (i= 0; i < divs; i++)
    {  
        for(j = 0; j < divs; j++)
        {
            container.appendChild(square.cloneNode());
            
        }
    }
    addColorChanger();
}

function addColorChanger()
{
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "grey";
        });
    });
}


createDivs(10);

