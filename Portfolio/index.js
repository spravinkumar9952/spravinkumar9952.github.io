const toggleBar = () => {
    let navTog = document.getElementById("nav-links");
    let listIcon = document.getElementById("list-icon");
    if (navTog.style.display === "flex") {
        navTog.style.display = "none";
        listIcon.src = "assets/list.png"
    } else {
        navTog.style.display = "flex";
        navTog.style.flexDirection = "column";
        listIcon.src = "assets/close.png"
    }
}