
function createGrid() 
{   
    let gridSize = parseInt(prompt("Input a Grid Size betweeen 1 and 64!"));
    if (gridSize >= 1 && gridSize <= 64)
    {
        const container = document.querySelector('.container');    
        container.style.border = "black solid";
        const square = document.createElement('div');
        square.classList.add("square");
        //creating the Grid by calculating the Divs Height and Width from the User's Requested Amount of Divs
        let sizeOfDivs = (960 / gridSize);
        square.style.height = sizeOfDivs + "px";
        square.style.width = sizeOfDivs +"px";

        for (i= 0; i < gridSize; i++)
        {  
            for(j = 0; j < gridSize; j++)
            {
                container.appendChild(square.cloneNode());
            }

        }
        addColorChanger();
    } 
    else 
    {
        alert("That number is out of range, try again!");
    }
}

function addColorChanger()
{
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.removeEventListener('mouseover', colorSquare);
        square.addEventListener('mouseover', () => {
            colorSquare(square);
        });
    });
}

function colorSquare(squareToColor)
{
    let rgbColor = "#"+(switchRGB()).toString(16)+(switchRGB()).toString(16)+(switchRGB()).toString(16); 
    squareToColor.style.backgroundColor = rgbColor;
}

function switchRGB()
{
    if(isRGB)
    {
        let randomrgb = Math.floor(Math.random() * 255);
        return randomrgb;
    }
    else 
    {
        //Value for Grey
        return 128;
    }
}

function resetGrid()
{
    const container = document.querySelector('.container');
    while (container.firstChild) 
    {
        container.removeChild(container.firstChild);
    }
    container.style.border = "white solid";
}

let isRGB = true;

const buttonreset = document.querySelector("#btnreset");
buttonreset.addEventListener('click', () => {
    resetGrid();
});

const buttoncreate = document.querySelector("#btncreate");
buttoncreate.addEventListener('click', () => {
    createGrid();
});

const buttonrgb = document.querySelector("#btnrgb");
buttonrgb.addEventListener("click", () => {
    isRGB = !isRGB;
    addColorChanger();
});
