const changeThemeButton = document.getElementById("change-theme-button");

const body = document.querySelector("body");

const themeButtonImage = document.querySelector(".button-image");

changeThemeButton.addEventListener("click", () => {
    const darkModeIsActive = body.classList.contains("dark-mode");

    //body.classList.toggle("dark-mode"); Alternar o modo (substituiria a linha de "remove" e de "add")

    if (darkModeIsActive) {
        body.classList.remove("dark-mode");
        themeButtonImage.setAttribute("src", "./src/images/sun.png");
    }
    else {
        body.classList.add("dark-mode");
        themeButtonImage.setAttribute("src", "./src/images/moon.png");
    }

});
