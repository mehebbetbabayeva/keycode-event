let container = document.querySelector(".container");
window.addEventListener("keydown" , (e)=>{
    container.innerHTML=`
       <div class="card-key key-name">
            <p>Event Key</p> 
            ${e.key === " " ? "Space" : e.key}  
        </div>
        <div class="card-key key-code">
            <p>Event Code</p>
            ${e.keyCode}
        </div>
    
    `
})