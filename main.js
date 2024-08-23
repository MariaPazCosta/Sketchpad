
function createGrid(numColum, numbRow){
    const grid = document.querySelector(".grid")
    let wid= (numColum*45)+"px"
    console.log(wid)
    grid.style.width = wid;

    for(let i= 0;i<numColum;i++){
        for(let j=0; j<numbRow;j++){
            let pixel = document.createElement("div")
            pixel.classList.add("pixel")
            grid.appendChild(pixel)
        }
    }
}

function changePixelColor(color){
    let pix = document.querySelectorAll(".pixel");
    console.log(pix);
    
    pix.forEach((p) => {
        p.addEventListener("mouseenter", (event) => {
            // Cambiar el color del pixel cuando el mouse entra
            event.target.style.backgroundColor = color; 
        });
    });
    
} 

function clearGrid(){
    let pix = document.querySelectorAll(".pixel");
    let clearBtt = document.querySelector("#clean-grid")
    
    clearBtt.addEventListener("click",()=>{
        pix.forEach(pi=>{
            pi.style.backgroundColor="rgb(194, 194, 194)"
        })
    })
}


createGrid(15,10)
changePixelColor("purple")
clearGrid()

