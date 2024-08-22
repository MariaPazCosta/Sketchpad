
function createGrid(numColum, numbRow){
    const grid = document.querySelector(".grid")

    for(let i= 0;i<numColum;i++){
        for(let j=0; j<numbRow;j++){
            let pixel = document.createElement("div")
            pixel.classList.add("pixel")
            grid.appendChild(pixel)
        }
    }
}

createGrid(4,4)