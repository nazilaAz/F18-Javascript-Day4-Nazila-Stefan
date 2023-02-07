function removeSanta() {
    let santa = document.getElementsByClassName("santa");



    for (let i = 0; i < santa.length; i++) {
        santa[i].addEventListener("click", function() {
            this.remove();
        })
    }
}

document.addEventListener("click", function() {
    removeSanta();
})