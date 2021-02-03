
const hornSound = document.getElementById("horn-sound");

const button = document.getElementById("honk-btn");



const changeVolume = function(volume){
    hornSound.volume = volume / 100;
}

const changeIcon = function(volume){
    const volumeImage = document.getElementById("volume-image");
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
    }
}

const sliderChange = function(){
    const newValue = document.getElementById("volume-slider").value;
    const slider = document.getElementById("volume-number");
    slider.value = newValue;
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


const numberInput = document.getElementById("volume-number");

numberInput.addEventListener("input", numberChange)

const slider = document.getElementById("volume-slider");

slider.addEventListener("input", sliderChange)


const makeSound = function(event){
    event.preventDefault();
    // alert("sound")
    hornSound.play();
}

button.addEventListener("click", makeSound)



const disableEnter = function(event){
    {if(event.key === "Enter")event.preventDefault()}
}

numberInput.addEventListener("keydown", disableEnter)
slider.addEventListener("keydown", disableEnter)



console.log(hornSound.attributes)

