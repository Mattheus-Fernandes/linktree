const aboutMe = document.querySelector("[data-aboutMe]")
const closeInfo = document.querySelector("[data-close-info]")
const box = document.querySelector("[data-box]")



aboutMe.addEventListener("click", () => {
        box.classList.add("showInfo")
})


closeInfo.addEventListener("click", () => {
    box.classList.remove("showInfo")
})