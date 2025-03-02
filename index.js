const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (event)=>{ 
  const xPos = event.offsetX;
  const yPos = event.offsetY; 
  const spanEi = document.createElement("span");
  spanEi.style.left = xPos + "px"
  spanEi.style.top = yPos + "px"
  const size = Math.random()* 100;
  spanEi.style.width = size + "px";
  spanEi.style.height = size + "px"
  bodyEl.appendChild(spanEi)
  setTimeout(()=>{
    spanEi.remove();
  }, 3000)



}
);