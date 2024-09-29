const themeSelection = document.getElementById("theme");
const logo = document.getElementById("logo");
const body = document.body;
themeSelection.addEventListener('change', changeTheme);

function changeTheme() {
    if (themeSelection.value == "dark") {
        body.className = "dark";
        logo.src = "byui-logo_white.png";
    } 
    else {
        logo.src = "byui_logo.webp"  ;
        body.classList.remove("dark");
    }
}