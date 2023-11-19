const cine = document.querySelector(".cine");
const blog = document.querySelector(".blog");
const boton = document.querySelector(".boton");
const portfolio = document.querySelector(".portfolio");
const games = document.querySelector(".game");

const video = document.querySelector(".container-videos");


cine.addEventListener("mouseover", () => {
  const video = document.querySelector(".container-videos");

  video.style.backgroundImage = "url(./images/cine.png)";
  video.classList.add("active");
})

cine.addEventListener("mouseout", () => {
  const video = document.querySelector(".container-videos");

  video.classList.remove("active");
})


blog.addEventListener("mouseover", () => {
  const video = document.querySelector(".container-videos");

  video.style.backgroundImage = "url(./images/machine.png)";
  video.classList.add("active");
})


blog.addEventListener("mouseout", () => {
  const video = document.querySelector(".container-videos");

  video.classList.remove("active");
})


boton.addEventListener("mouseover", () => {
  const video = document.querySelector(".container-videos");

  video.style.backgroundImage = "url(./images/boton.png)";
  video.classList.add("active");
})


boton.addEventListener("mouseout", () => {
  const video = document.querySelector(".container-videos");

  video.classList.remove("active");
})



portfolio.addEventListener("mouseover", () => {
  const video = document.querySelector(".container-videos");

  video.style.backgroundImage = "url(./images/portfolio.png)";
  video.classList.add("active");
})


portfolio.addEventListener("mouseout", () => {
  const video = document.querySelector(".container-videos");

  video.classList.remove("active");
})



games.addEventListener("mouseover", () => {
  const video = document.querySelector(".container-videos");

  video.style.backgroundImage = "url(./images/game.png)";
  video.classList.add("active");
})


games.addEventListener("mouseout", () => {
  const video = document.querySelector(".container-videos");

  video.classList.remove("active");
})




// document.addEventListener('mouseover', (e)=>{
//     if(e.target.matches(blog)){
//     alert("esto es una calculadora")
//     };
// })


// calc.addEventListener('mouseover', ()=>{
//     alert("esto es una calculadora");
// })

// blog.addEventListener('mouseover', ()=>{
//     alert("esto es un blog");
// })



// function button(calculadora){
//     const calc=document.querySelector(calculadora);
//     document.addEventListener('mouseover', (e)=>{
//         if(e.target.matches(calculadora)){
//         alert("esto es una calculadora")
//         };
//     })
// }

// button(".calc");


// window.addEventListener("scroll", (e)=>{
//     const top= window.pageYOffset;

//     if(top===600){
//         alert("te has pasado de listo");
//     }
// })






// ZONAS ANIMADAS

let scrolled= document.querySelectorAll(".animated");

function mostrarScroll(){
  let scrollTop=document.documentElement.scrollTop;
  

  for(var i=0; i<scrolled.length; i++){
    let altura= scrolled[i].offsetTop;
    
    if(altura-400 < scrollTop){
      scrolled[i].style.opacity=1;
      scrolled[i].classList.add("showY");
      
    }
  }
}

window.addEventListener("scroll", mostrarScroll);

