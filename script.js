
const setColor = Array.from(document.querySelector(".colorChanger").children);
setColor.forEach(element => {
    element.style.backgroundColor = element.id;
});

const ColorDegress = new Map();
ColorDegress.set("blue", "sepia(50%) hue-rotate(170deg) saturate(300%)")
ColorDegress.set("red", "sepia(50%) hue-rotate(320deg) saturate(300%)")
ColorDegress.set("green", "sepia(50%) hue-rotate(50deg) saturate(300%)")
ColorDegress.set("yellow", "sepia(50%) hue-rotate(33deg) saturate(300%)")
ColorDegress.set("Orange", "sepia(50%) hue-rotate(0deg) saturate(300%)")
const lightColors = new  Map();
lightColors.set("red", "#ff3838");
lightColors.set("yellow", "#eeff38");
lightColors.set("blue", "#3b38ff");
lightColors.set("green", "#38ff42");
lightColors.set("Orange", "#ffa238");
const darkColors = new  Map();
darkColors.set("red", "#7b0000a5");
darkColors.set("yellow", "#737b00a5");
darkColors.set("blue", "#1f007ba5");
darkColors.set("green", "#007b0ca5");
darkColors.set("Orange", "#7b3300a5");
const shadedColors = new  Map();
shadedColors.set("red", "#7b0d0b21");
shadedColors.set("yellow", "#7b790b21");
shadedColors.set("blue", "#0d0b7b21");
shadedColors.set("green", "#0b7b1c21");
shadedColors.set("Orange", "#7b450b21");

function changeme(){
    var r = document.querySelector(':root');
    r.style.setProperty('--oragneColor',lightColors.get( this.id));
    r.style.setProperty('--darkOragneColor',darkColors.get( this.id));
    r.style.setProperty('--shadedOrange',shadedColors.get( this.id));
    r.style.setProperty('--blueImge',ColorDegress.get( this.id));
    
}
function drageMeRight(){
    if(this.parentElement.parentElement.style.right == "0px"){
       
        this.parentElement.parentElement.style.right = "-320px"
        this.style.animationName = "none";
    }
    else{
       
        this.parentElement.parentElement.style.right = "0px"
        this.style.animationName = "rotate";}
    
}

document.getElementById("mysamola").addEventListener("click",drageMeRight)
Array.from(document.getElementsByClassName("color")).forEach(el=>el.addEventListener("click",changeme));



const swapper = document.querySelector('.TechCont');
const arrowGo = document.querySelectorAll('.yarbN5ls i');
const scrollLength = document.querySelector('.img2').offsetWidth;
const allImages =document.querySelector('.TechCont');
const allImagesArr =Array.from(document.querySelector('.TechCont').children);
const imgSize = allImagesArr.length;
let oldscroll = 1;

arrowGo.forEach(e =>{
    e.addEventListener('click', ()=>{
        swapper.scrollLeft += (e.id === "left")?-(scrollLength+19) : (scrollLength+19);
        console.log(Math.round(swapper.scrollWidth - swapper.offsetWidth))
        console.log(swapper.scrollLeft)
        if((Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) > -8
        && (Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) <8 && e.id === "right" ){
            swapper.scrollLeft = 0;
        }
        if(0 === swapper.scrollLeft && e.id === "left" ){
            swapper.scrollLeft = swapper.scrollWidth - swapper.offsetWidth;
        }
           
    })
}) 
setInterval(()=>{
    
    swapper.scrollLeft +=(scrollLength+19);
    if((Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) > -8
    && (Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) <8){
        swapper.scrollLeft = 0;
    }
}, 6000);



let isDrag = false , prevPageX,prevScrll;
swapper.addEventListener('mousedown',dragOn);
swapper.addEventListener('mouseup',dragOff);
swapper.addEventListener('mousemove',dragging);
swapper.addEventListener('mouseleave',dragOff);
swapper.addEventListener("touchstart", touchOn);
swapper.addEventListener("touchmove", Touching);


function dragOn(e){
    isDrag = true;
    prevPageX = e.pageX;
    prevScrll = this.scrollLeft;
    
}
function dragOff(){
    isDrag = false;
}
function touchOn(e){
    isDrag = true;
    prevPageX = e.changedTouches[0].clientX;
    prevScrll = this.scrollLeft;
    
}

function dragging(e){
    e.preventDefault();
    

    if(isDrag){
        let postion = e.pageX - prevPageX;
        swapper.scrollLeft =prevScrll - postion;
    }
}
function Touching(e){
    e.preventDefault();

    if(isDrag){
        console.log(e.changedTouches[0].clientX)
        let postion = e.changedTouches[0].clientX - prevPageX;
        swapper.scrollLeft =prevScrll - postion;
    }
    if((Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) > -8
    && (Math.round(swapper.scrollWidth - swapper.offsetWidth) - Math.ceil(swapper.scrollLeft)) <8){
    swapper.scrollLeft = 0;
}  
}


const navs = Array.from(document.querySelector('.navItems').children);
const checker = document.querySelector('#chk');
if(screen.width < 770)
navs.forEach(e=>e.addEventListener('mousedown',()=>{
    checker.checked = false;
}))




