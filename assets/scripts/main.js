//Button--------------------------------------------------------

const button = document.getElementById("honk-btn");


const makeSound = function(event){
    event.preventDefault();
    const hornSound = document.getElementById("horn-sound");
    hornSound.play();
}

button.addEventListener("click", makeSound)


//Volume and icons relating to volume---------------------------------------------

const numberInput = document.getElementById("volume-number");
const slider = document.getElementById("volume-slider");


const changeVolume = function(volume){
    const hornSound = document.getElementById("horn-sound");
    hornSound.volume = volume / 100;
}

const changeIcon = function(volume){
    const volumeImage = document.getElementById("volume-image");
    button.disabled = false;
    if(volume >= 67){
        volumeImage.setAttribute("src","./assets/media/icons/volume-level-3.svg");
        volumeImage.setAttribute("alt","Max Volume");
    }
    else if(volume >=34){
        volumeImage.setAttribute("src","./assets/media/icons/volume-level-2.svg");
        volumeImage.setAttribute("alt","Medium Volume");
    }
    else if(volume >=1){
        volumeImage.setAttribute("src","./assets/media/icons/volume-level-1.svg");
        volumeImage.setAttribute("alt","Low Volume");
    }
    else{
        volumeImage.setAttribute("src","./assets/media/icons/volume-level-0.svg");
        volumeImage.setAttribute("alt","Muted");
        button.disabled = true;
    }
}

const sliderChange = function(){
    const newValue = document.getElementById("volume-slider").value;
    const number = document.getElementById("volume-number");
    number.value = newValue;
    changeVolume(newValue); 
    changeIcon(newValue);    
}

const numberChange = function(){
    const newValue = document.getElementById("volume-number").value;
    const slider = document.getElementById("volume-slider");
    slider.value = newValue;
    changeVolume(newValue);  
    changeIcon(newValue);    
}


numberInput.addEventListener("input", numberChange)
slider.addEventListener("input", sliderChange)

// extra thing that improves UX - pressing enter after entering number does not create sound

const disableEnter = function(event){
    {if(event.key === "Enter")event.preventDefault()}
}

numberInput.addEventListener("keydown", disableEnter)
slider.addEventListener("keydown", disableEnter)


//Sound type--------------------------------------------------------------------------------------

const airHorn = document.getElementById("radio-air-horn-container");
const carHorn = document.getElementById("radio-car-horn-container");
const partyHorn = document.getElementById("radio-party-horn-container");

const changeType = function(img, audio){
    const soundImage = document.getElementById("sound-image");
    soundImage.setAttribute("src",img)

    const hornSound = document.getElementById("horn-sound");
    hornSound.setAttribute("src",audio)
}

const airHornClick = function(){
    changeType("./assets/media/images/air-horn.svg", "./assets/media/audio/air-horn.mp3")
}
const carHornClick = function(){
    changeType("./assets/media/images/car.svg", "./assets/media/audio/car-horn.mp3")
}
const partyHornClick = function(){
    changeType("./assets/media/images/party-horn.svg", "./assets/media/audio/party-horn.mp3")
}

airHorn.addEventListener("click",airHornClick)
carHorn.addEventListener("click",carHornClick)
partyHorn.addEventListener("click",partyHornClick)