const button = document.getElementById("myButton");
const hoverSound = document.getElementById("hoverSound")

button.addEventListener("mouseenter", () =>{
    hoverSound.currentTime =0.5; //sesi 0.5 saniyede başlatır.
    hoverSound.play();


//1.5 saniyede durdurur.

setTimeout( () =>{
    hoverSound.pause();
    hoverSound.currentTime = 0; // sesi sıfırlayarak durdurur.
}, 1500); //1.5 saniyeye gelen süre (1000ms = 1saniye demek)
});


