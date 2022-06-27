const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const Clear = document.getElementById("jsClear");
const Mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


const INITIAL_COLOR = "#ff0398";

canvas.width = 280;
canvas.height = 500;

ctx.fillStyle = "white";

ctx.strokeStyle= INITIAL_COLOR; 
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = true;

function stopPainting(){
    painting = false;
};
function startPainting(){
    painting = true;
};
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle= color;
    // console.log(color);
    ctx.fillStyle = color;
    // for(let i =0; i<colors.length; i++){
    //     colors[i].classList.add('check');
    // }
    
};

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;
};
function handleModeClick(){
    
    if(filling === true){
        fill.innerText="Fill";

    }
};
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, 280, 500);
    }
};
function handleClearClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 280, 500);
};
function handleSaveClick(){
    // const image = canvas.toDataURL("image/jpeg");
    const image = canvas.toDataURL(); //기본값 : png
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();
};
// for(let i =0; i<colors.length; i++){
//     colors[i].addEventListener("click", function(){
//         colors[i].className += "check";
//     });
    
// };
const colorCheck = document.querySelectorAll(".jsColor");
colorCheck.forEach((item) => {
    item.addEventListener("click", colorHandler);
});
  
function colorHandler(item) {
    const colorTarget = item.currentTarget;
    colorCheck.forEach((title) => {
        title.classList.remove("check");
    });
    colorTarget.classList.add("check");
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    // canvas.addEventListener("click", handleCanvasClick);
};

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
};

if(Mode){
    Mode.addEventListener("click", handleModeClick);
    Mode.addEventListener("click", handleCanvasClick);
};
if(Clear){
    Clear.addEventListener("click", handleClearClick);
};
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
};
