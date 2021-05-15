
function toggleMenu() {
    let elementToggle=element.id + "-toggle";
    console.log(document.querySelectorAll(".navigation").classList);
    document.getElementsByClassName(elementToggle)[0].classList.toggle("hide");
}
let d = new Date();

document.querySelector("#lastmod").textContent = document.lastModified;
document.querySelector("#currentyear").textContent = d.getFullYear();