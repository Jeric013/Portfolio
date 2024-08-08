const navSlide = () => {
    const btn = document.querySelector('.nav-button');
    const nav = document.querySelector('.navbar');

    btn.addEventListener('click', () => {
        nav.classList.toggle('navbar-active');
    });
};

navSlide();

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab input[type="radio"]');
    const infoDivs = document.querySelectorAll('.info_list');

    tabs.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            infoDivs.forEach(info => {
                info.style.display = 'none';
            });
            if (radio.checked) {
                infoDivs[index].style.display = 'block';
            }
        });
    });
});


