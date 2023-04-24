let x = document.getElementById("hands");
let y = document.getElementById("monkey");

function closeEye() {
    y.style.backgroundImage = "url(img/monkey_pwd.gif)";
    x.style.marginTop = "0%";
}

function openEye() {
    y.style.backgroundImage = "url(img/monkey.gif)";
    x.style.marginTop = "110%";
}