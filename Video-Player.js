
let ico = document.querySelector(`.toggle`);
let slide = document.querySelectorAll(`.player_slider`);
let skipButton = document.querySelectorAll(`[data-skip]`);
let Vview = document.querySelector(`.Vviewe`);
let progress= document.querySelector(`.progress`);
let progress_bar = document.querySelector(`.progressFilled`);
let mousedown = false;

//function will toggle play and pause
function toggle(){
    if(Vview.paused){
        Vview.play();
    }else{
        Vview.pause();
    }
    updateTxt();
}
//funvtion will change play pause symbol
function updateTxt(){
    if(Vview.paused){
        ico.textContent = `►`;
    }else{
        ico.textContent = `❚ ❚`;
    }
}
//skippin 10 sec and 25 according to button clicked
function skipping(){
    Vview.currentTime += parseFloat(this.dataset.skip);
}
//slider for speed and volume changer
function SpeedAndVol(){
    Vview[this.name] = this.value;
   
}
//change the timeline progress 
function progressUpdate(){
    let Ctime = (Vview.currentTime/Vview.duration)*100;
    progress_bar.style.flexBasis = `${Ctime}%`;
}
//can srub the timeline by click dragging a random timeframe on it
function scrub(e){
    let scr = (e.offsetX /progress.offsetWidth)*Vview.duration;
    Vview.currentTime = scr;
}
//making the function work
Vview.addEventListener(`timeupdate`,progressUpdate);
skipButton.forEach(button => button.addEventListener(`click`,skipping));
ico.addEventListener(`click`,toggle);
document.addEventListener(`keydown = space`,toggle);
progress.addEventListener(`mousedown`,()=>mousedown = true);
progress.addEventListener(`mouseup`,()=>mousedown = false);
progress.addEventListener(`mousemove`,(e)=>mousedown && scrub(e));
slide.forEach(slider => slider.addEventListener(`change`,SpeedAndVol));
let inp = document.getElementById(`vdio`)
progress.addEventListener(`click`,scrub)