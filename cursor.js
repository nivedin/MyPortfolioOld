const mouseCursor = document.querySelector(".mouseCursor");

document.addEventListener("mousemove",e=>{
    mouseCursor.setAttribute("style","top: "+(e.pageY - 10)+"px; left:"+(e.pageX - 10)+"px;");
})

document.addEventListener("click",() =>{
    mouseCursor.classList.add("expand");

    setTimeout(()=>{
        mouseCursor.classList.remove("expand");
    },500);
})

