const bgc = document.createElement("div");
let size = 100;
let growRect = true;
document.body.style.height = "10000px";
document.body.appendChild(bgc);
bgc.style.width = "100%";
bgc.style.position = "fixed";
bgc.style.left = "0";
bgc.style.top = "0";
bgc.style.backgroundColor = "green";
bgc.style.height = size + "px";

const changeHeight = () => {

    if (size > window.innerHeight / 2) {
        growRect = !growRect;
        bgc.style.backgroundColor = "red";
    } else if (size <= 0) {
        growRect = !growRect;
        bgc.style.backgroundColor = "green";

    }
    if (growRect) {
        size += 10;
    } else {
        size -= 10;
    }
    bgc.style.height = size + "px"

}

window.addEventListener("scroll", changeHeight);
