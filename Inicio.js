document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.clientes', {
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        centeredSlides: false, 
        watchOverflow: true, 
        preventClicks: false,

        on: {
            init: function () {
                this.update(); 
            },
            resize: function () {
                this.update(); 
            },
            slideChange: function () {
                this.update(); 
            }
        }
    });
});
