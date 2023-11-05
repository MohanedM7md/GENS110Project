
const setColor = Array.from(document.querySelector(".colorChanger").children);
setColor.forEach(element => {
    element.style.backgroundColor = element.id;
});
    /* let arr = [
    "#readmore",
    "nav",
    ".navItems",
    ".img",
    ".services",
    'h3[style]',
    ".footer",
    ".colorChanger",
    ]

    arr.forEach(changer);
    function changer(element){
        document.querySelector(element).style.backgroundColor = "red";
    } */