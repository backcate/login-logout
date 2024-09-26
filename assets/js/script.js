let menuOpen = document.querySelector(".menuOpen");
let menuClose = document.querySelector(".menuClose");
let layer1 = document.querySelector(".layer1");

menuOpen.onclick = () => {
    layer1.classList.add("check");
}
menuClose.onclick = () => {
    layer1.classList.remove("check");
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

