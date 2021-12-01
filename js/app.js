let mainPosition = window.pageYOffset; 
let $nav = document.querySelector(".nav-bar");

function seeMore(){
    document.getElementById('more-text').style.display = 'block';
    document.getElementById('btn-see-more').style.display = 'none';
}

window.addEventListener("scroll", () => {
    let actualMovement = window.pageYOffset;

    if(mainPosition >= actualMovement) {
        $nav.style.top = "0px";
    } 
    else {
        $nav.style.top = "-60px";
    }
    mainPosition = actualMovement;
});