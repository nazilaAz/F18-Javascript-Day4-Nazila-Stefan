function randomRGB() {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    let rgb;

    // console.log(randomRed, randomGreen, randomBlue);
    rgb = `rgb(${randomRed},${randomGreen},${randomBlue})`;
    // console.log(rgb);
    document.body.style.backgroundColor = rgb;

}

document.getElementById("btn").addEventListener("click", function() {
    randomRGB();
})