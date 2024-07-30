(function(){
    "use strict";
    const d = document;
    const galeria = d.querySelector(".galeria-ver img");
    const imagenes = d.querySelectorAll(".galeria-img");

    imagenes.forEach((valor,i)=>{
        valor.addEventListener("click",(e)=>{
            if(valor.getAttribute("src") === "img/galeria1.jpg"){
                galeria.setAttribute("src","img/galeria1.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria2.jpg"){
                galeria.setAttribute("src","img/galeria2.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria3.jpg"){
                galeria.setAttribute("src","img/galeria3.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria4.jpg"){
                galeria.setAttribute("src","img/galeria4.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria5.jpg"){
                galeria.setAttribute("src","img/galeria5.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria6.jpg"){
                galeria.setAttribute("src","img/galeria6.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria7.jpg"){
                galeria.setAttribute("src","img/galeria7.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria8.jpg"){
                galeria.setAttribute("src","img/galeria8.jpg");
            }
            else if(valor.getAttribute("src") === "img/galeria9.webp"){
                galeria.setAttribute("src","img/galeria9.webp");
            }
            else if(valor.getAttribute("src") === "img/galeria10.jpg"){
                galeria.setAttribute("src","img/galeria10.jpg");
            }
        })
    })

})();