
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


function changeGridSize(){
    let popupBtt = document.querySelector("#popup")
    let modal = document.querySelector("#modal")
    let closeBtt = document.querySelector("#close")
    let form = document.querySelector("form")

    popupBtt.addEventListener("click",()=>{
        modal.style.display="flex"
    })
    closeBtt.addEventListener("click",()=>{
        modal.style.display="none"
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let columns = document.querySelector("#columns").value
        let rows = document.querySelector("#rows").value
        console.log(columns,rows)
        if(columns>0 && rows>0){
            let grid = document.querySelector(".grid")
            grid.innerHTML=""
            createGrid(columns,rows)
            changePixelColor("purple")
            clearGrid()
            modal.style.display="none"
            form.reset()
        }else{
            alert("Please enter valid numbers")
        }
    })

}

createGrid(15,10)
changePixelColor("purple")
clearGrid()
changeGridSize()

