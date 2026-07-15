//==================================//
// LIGHTBOX GALERÍA
//==================================//
const images = document.querySelectorAll(".photos img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
let currentImage = 0;
function showImage(index){
    currentImage = index;
    lightboxImg.src = images[currentImage].src;
    lightbox.style.display = "flex";
}
images.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        showImage(index);
    });
});
nextBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    currentImage++;
    if(currentImage >= images.length){
        currentImage = 0;
    }
    showImage(currentImage);
});
prevBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    currentImage--;
    if(currentImage < 0){
        currentImage = images.length-1;
    }
    showImage(currentImage);
});
closeLightbox.addEventListener("click",()=>{
    lightbox.style.display="none";
});
lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
});
document.addEventListener("keydown",(e)=>{
    if(lightbox.style.display==="flex"){
        if(e.key==="Escape"){
            lightbox.style.display="none";
        }
        if(e.key==="ArrowRight"){
            nextBtn.click();
        }
        if(e.key==="ArrowLeft"){
            prevBtn.click();
        }
    }
});

//==================================//
// MENÚ MÓVIL
//==================================//
const menuToggle=document.getElementById("menu-toggle");
const navMenu=document.getElementById("nav-menu");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuToggle.textContent="✕";
    }else{
        menuToggle.textContent="☰";
    }

});

// Cerrar menú al seleccionar una opción
const menuLinks=document.querySelectorAll("#nav-menu a");

menuLinks.forEach(link=>{
    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");
        menuToggle.textContent="☰";

    });
});


//==================================//
// ANIMACIONES AL HACER SCROLL
//==================================//

const reveals = document.querySelectorAll(".reveal");

function mostrarElementos(){
    const windowHeight = window.innerHeight;

    reveals.forEach(elemento=>{
        const top = elemento.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            elemento.classList.add("active");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);