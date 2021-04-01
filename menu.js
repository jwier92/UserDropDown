
const btnToggleSideMenu = document.getElementById("btnSideBar")
const sidebarMenu = document.getElementById("sidebar")

const btnUserMenu = document.getElementById("btnUserMenu")
const divUserMenu = document.getElementById("divUserMenu")

const toggleSidebar = (e) => {
    sidebarMenu.classList.toggle("active")
}

const toggleUserMenu = (e) => {
    divUserMenu.classList.toggle("active")
}

const handleDocumentClick = (e) => {
    if (divUserMenu.classList.contains("active")) {
        if (e.target.closest("#divUserMenu") == null) {
            divUserMenu.classList.remove("active")
        }
    }
}

btnToggleSideMenu.addEventListener("click", toggleSidebar)
btnUserMenu.addEventListener("click", toggleUserMenu)
document.addEventListener("click", handleDocumentClick)
