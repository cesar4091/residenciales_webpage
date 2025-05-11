

document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll("a");
    let toggleButton = document.getElementById('menu-toggle');
    let ul = document.getElementById('dropdown-menu');

    document.getElementById('ham-button').addEventListener('click', function () {
        console.log(ul.style.display)

        if (ul.style.display === 'hidden' || ul.style.display === '' || ul.style.display === 'none') {
            ShowElement(ul, toggleButton);
        } else {
            HideElement(ul, toggleButton);
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            HideElement(ul, toggleButton);
        });
    });
});

function HideElement(element, toggle) {
    element.style.display = 'none';
    toggle.innerHTML = "☰";

}

function ShowElement(element, toggle) {
    element.style.display = 'block';
    toggle.innerHTML = "✗";
}