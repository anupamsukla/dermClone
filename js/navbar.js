<script>
    var mobileNavBtn = document.querySelector(".mobile-menu");
    var mobileNav = document.querySelector(".mobile-nav-menu")
    var mobileNavExit = document.querySelector(".mobile-close-button")

    mobileNavBtn.addEventListener("click", () => {
        mobileNav.classList.add("show-menu")
    })
    mobileNavExit.addEventListener("click", () => {
        mobileNav.classList.remove("show-menu")
    })



</script>