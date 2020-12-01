"use strict"

// function soundClick() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'nevergonna.mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
// }

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


const button = document.querySelector("button");

// audio.addEventListener("play", () => {
//     console.log("vrode robbit");
// });


let audiomassiv = ["nevergonna.mp3", "without.mp3", "agiga.mp3", "madina.mp3", "hefuckedup.mp3"]
// document.querySelector('source').src = `music/${audiomassiv[randomInteger(0, audiomassiv.length - 1)]}`


let elem = document.createElement('div');
elem.append(tmpl.content.cloneNode(true));
elem.querySelector("audio").classList.remove('audiotemplate');
elem.querySelector("audio").classList.add('audio');
elem.querySelector("source").src = `music/${audiomassiv[randomInteger(0, audiomassiv.length - 1)]}`;
document.querySelector("main").append(elem);
const audio = document.querySelector(".audio");


button.textContent = "Просто дай мне чепалг";
button.addEventListener("click", () => {

    if (button.textContent == "Просто дай мне чепалг") {
        audio.play();
        button.textContent = "Больше не надо";
    } else {
        audio.pause();
        button.textContent = "Просто дай мне чепалг";
    }

    document.querySelector('.flex').classList.add("flexanimation");
    document.querySelector('.flex1').classList.add("flexanimation1")

})

console.log("vse norm")