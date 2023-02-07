function printInfo() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    let fcolor = "red";
    let lcolor = "red";

    if (fname.length >= 5) {
        fcolor = "green";
    }
    if (lname.length >= 5) {
        lcolor = "green";
    }

    document.getElementById("fresult").innerHTML = `<div style="color:${fcolor}"> ${fname} </div>`;
    document.getElementById("lresult").innerHTML = `<div style="color:${lcolor}"> ${lname} </div>`;
    document.getElementById("aResult").innerHTML = `<div> ${age} </div>`;
}

document.getElementById("btn").addEventListener("click", function() {
    printInfo();
});