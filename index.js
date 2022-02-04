// alert("Hello world");
let l = document.querySelectorAll(".drum").length;
for (let i = 0; i < l; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let x = this.innerHTML;
        soundPlay(x);
        buttonAnimation(x);
    })
}

document.addEventListener("keydown", function (event) {
    soundPlay(event.key);
    buttonAnimation(event.key);
});
function soundPlay(z) {
    switch (z) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}