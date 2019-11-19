
function createDivs(divs) 
{
    const container = document.querySelector('.container');
    const square = document.createElement('div');
    square.classList.add("square");
    square.textContent = "Hello!";

    for (i= 0; i < divs; i++)
    {  
        for(j = 0; j < divs; j++)
        {
            container.appendChild(square.cloneNode());
        }

       // container.appendChild(square.cloneNode());
    }
}