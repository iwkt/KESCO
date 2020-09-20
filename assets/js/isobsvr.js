const options = {
    root: null,
    rootMargin: '-30% 0px',
    threshold: 0
};

const obs = new IntersectionObserver(showIntersect, options);

const slideIn = document.querySelectorAll('.slide_in');
slideIn.forEach(sa => obs.observe(sa));


function showIntersect(changes,observer) {
    changes.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
            observer.unobserve(change.target);
        } else {
            change.target.classList.remove('active');
        }
    });
}
