(function(){
    "use strict";

    const d = document;
    const click = d.querySelectorAll(".habitat-card");
    const parrafo = d.querySelectorAll(".habitat-card-parrafo");
    const title = d.querySelectorAll(".habitat-card-title");

    click.forEach((valor,i) =>{
        valor.addEventListener("click",(e)=>{
            console.log(i);
            if(i === 0){
                parrafo[i].classList.toggle("habitat-card-show");
                title[i].classList.toggle("habitat-card-show2");
            }
            else if(i === 1){
                parrafo[i].classList.toggle("habitat-card-show");
                title[i].classList.toggle("habitat-card-show2");
            }
            else if(i === 2){
                parrafo[i].classList.toggle("habitat-card-show");
                title[i].classList.toggle("habitat-card-show2");
            }
            else if(i === 3){
                parrafo[i].classList.toggle("habitat-card-show");
                title[i].classList.toggle("habitat-card-show2");
            }
            else if(i === 4){
                parrafo[i].classList.toggle("habitat-card-show");
                title[i].classList.toggle("habitat-card-show2");
            }
        })
    })

})();