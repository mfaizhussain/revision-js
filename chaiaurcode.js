const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const para = document.querySelector("#para")
let colorInterval;




const changeColor = () =>
{
  
  const date = new Date()
  document.body.style.backgroundColor = `#${Math.round(Math.random() * 16777215).toString(16)}`
  para.innerHTML = date.toLocaleTimeString()
  
}
start.addEventListener("click", () =>{

  if(!colorInterval){
    colorInterval = setInterval(changeColor, 1000)

  }
   

})

stop.addEventListener("click", () => {
  clearInterval(colorInterval)
  colorInterval = null;
})