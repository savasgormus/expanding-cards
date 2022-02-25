let viewer = document.querySelectorAll(".view");

viewer.forEach(layer => {
    layer.addEventListener("click", () => {
        // console.log(e.target);
        removeActiveClasses();
        layer.classList.add("current");   
    });
})


function removeActiveClasses() {
    viewer.forEach(layer => {
        layer.classList.remove("current");
    });
}