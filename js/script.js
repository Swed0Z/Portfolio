const toggleBtn1 = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn1.onmousedown = function () {
    dropDownMenu.classList.toggle('open');
};