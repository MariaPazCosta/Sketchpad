
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

createGrid(10,10)