document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('.header');
    const _navAnimation = function (el, inview) {
        if (inview) {
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }

    };

    const so = new ScrollObserver('.nav-trigger', _navAnimation, { once: false });



    new MobileMenu();
    
    new ScllOb(elem, rm, ths);

    new ChangeImage('.thumb','#bigimg');

});