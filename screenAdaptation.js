let cssModule = document.createElement('style');
document.documentElement.firstElementChild.appendChild(cssModule);

function setPxToRem(){
    let dpr = 1;
    let pxPerRem = document.documentElement.clientWidth * dpr / 10;
    cssModule.innerHTML = `html{font-size: ${pxPerRem}px !important;}`;
}

document.addEventListener('DOMContentLoaded', function () {
    setPxToRem(); 
}, false)

window.onresize = () =>{
    setPxToRem()
}