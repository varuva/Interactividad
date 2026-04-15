let a = 1;
let b = 2;

function suma() {
const resultado = a + b;
alert(resultado);
}
function resta() {
const resultado = a - b;
alert(resultado);
}

suma();
//resta(2, 1);

document.addEventListener("click", function() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgb;
});
