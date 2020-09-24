
    console.log('loaded')

    const burger = document.querySelector(".header__burger");
    const settings = document.querySelector(".header__settings");


    burger.addEventListener("click", (e) => {
        settings.classList.toggle("header__settings--hidden")
        console.log(e.target)
    })

