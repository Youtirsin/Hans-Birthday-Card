document.querySelector("#card").addEventListener("click", function () {
    document.querySelector("#instruction").style.zIndex = "1";
});
document.querySelector("#instruction").addEventListener("click", function () {
    document.querySelector("#instruction").style.zIndex = "-1";
});