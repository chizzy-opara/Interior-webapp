const toggle_button = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.nav-links-wrapper');
// console.log(toggle_button);
// console.log(sideBar);
toggle_button.addEventListener('click', function () {
    if (sideBar.dataset.opened === 'true') {
        sideBar.dataset.opened = 'false';
    } else if(sideBar.dataset.opened === 'false') {
        sideBar.dataset.opened = 'true';
    }
});