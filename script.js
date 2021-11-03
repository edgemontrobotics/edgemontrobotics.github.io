let header = document.getElementById("header")

if (header) {
    console.log("hi")
    window.addEventListener("scroll", (e) => {
        header.style.backgroundPositionY = `${window.scrollY *0.3}px`
    })
}