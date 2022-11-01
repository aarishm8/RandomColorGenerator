let btn = document.getElementById("regenarateBtn");
let output = document.getElementById("output");

btn.addEventListener('click', changeBackground)

function changeBackground(e) {
    let r = Math.floor(Math.random() * 255 - 0 + 0)
    let g = Math.floor(Math.random() * 255 - 0 + 0)
    let b = Math.floor(Math.random() * 255 - 0 + 0)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    output.textContent = `Rgb(${r},${g},${b})`;
    

    setInterval("changeBackground", 1000)
}