const frame = document.querySelector(".photo-frame");

const positions = [
    "rotate(-4deg)",
    "rotate(3deg)",
    "rotate(-2deg)",
    "rotate(1deg)",
    "rotate(0deg)"
];

let current = 0;

frame.addEventListener("click", () => {
    current = (current + 1) % positions.length;
    frame.style.transform = positions[current];
});

(function(){
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('section'));

    if (!navLinks.length || !sections.length) return; // nothing to do

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.target.id) return;
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(s => observer.observe(s));
    } else {
        // fallback: mark first link active
        navLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
})();

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 3000);

});