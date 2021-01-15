const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyButton = document.querySelector(".select");
const myInp = document.getElementById("myInp");
const discoBtn = document.getElementById("disco");
const stopBtn = document.getElementById("stop")
let timer;

function getColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumbers()];
  }
  color.setAttribute("value", hexColor);
  document.body.style.backgroundColor = hexColor;
}
const colorRandom = btn.addEventListener("click", () => {
  getColor();
});

function getRandomNumbers() {
  return Math.floor(Math.random() * hex.length);
}
copyButton.addEventListener("click", () => {
  const col = document.querySelector(".color");
  col.select();
  document.execCommand("copy");
  alert("Copied: " + col.value);
});

discoBtn.addEventListener("click", () => {
          getColor();  
  timer = setInterval(getColor, 300);
  stop()

});
function stop(){
    stopBtn.addEventListener("click",()=> {
        clearInterval(timer)
    })
}
