const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('active');
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1]
};
const io = new IntersectionObserver(cb, options);
io.observe(child);
