function toggleSidebar(param) {
    param.classList.toggle('active');
    document.getElementById("menu-sidebar").classList.toggle('active');
    document.getElementById("main-text").classList.toggle('opacity');
    document.getElementById("items").classList.toggle('opacity');

}