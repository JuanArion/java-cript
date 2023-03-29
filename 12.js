let divs = document.querySelectorAll(".container>div")

divs.forEach(e => {
    e.addEventListener("click",() =>{
        divs.forEach(d =>{
            d.style.removeProperty("width")
        })
        e.style.width ="60%"
    })
 });