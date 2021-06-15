
function toggleMenu() {
    
    console.log(document.querySelectorAll(".navigation").classList);
    document.getElementById("navigation").classList.toggle("hide");
}
let d = new Date();

document.querySelector("#lastmod").textContent = document.lastModified;
document.querySelector("#currentyear").textContent = d.getFullYear();


