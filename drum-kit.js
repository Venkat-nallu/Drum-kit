var size = document.querySelectorAll(".drum").length;

        // To handle mouse events

for(var i=0;i<size;++i)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        playSound(this.innerHTML);
        addEffects(this.innerHTML);
    });   
}

        // To handle keyboard events

document.addEventListener("keypress",

    function(event)
    {
        playSound(event.key);

        addEffects(event.key);
    }

        
);

        // common funtion to play sound for both the events

function playSound(buttonClicked)
{
    switch(buttonClicked)
    {
        case "a":
            var a = new Audio("/Drum-kit/sounds/tom-1.mp3");
            a.play();
        break;

        case "b":
            var b = new Audio("/Drum-kit/sounds/tom-2.mp3");
            b.play();
        break;

        case "c":
            var c = new Audio("/Drum-kit/sounds/tom-3.mp3");
            c.play();
        break;

        case "d":
            var d = new Audio("/Drum-kit/sounds/tom-4.mp3");
            d.play();
        break;

        case "e":
            var crash = new Audio("/Drum-kit/sounds/crash.mp3");
            crash.play();
        break;


        case "f":
            var snare = new Audio("/Drum-kit/sounds/snare.mp3");
            snare.play();
        break;
        

        default: console.log("None");
    }

}

// adding blinking effect when particular letter is pressed/clicked

function addEffects(buttonClicked)
{
    var buttonClicked = document.querySelector("."+buttonClicked);

    buttonClicked.classList.add("final-transition");

    setTimeout(
    function()
    {
        buttonClicked.classList.remove("final-transition");
    },    
    100);
}

