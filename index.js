// constants
const DIALOGUE = [
    {
        colin: "Hello brother!",
        mattias: "Hey brother!", 
    },
    {
        colin: "What are we doin' here?",
        mattias: "Well... its crambus, isn't it?", 
    },
    {
        colin: "That's true I guess...",
        mattias: "...", 
    },
    {
        colin: "But why are we bugs?",
        mattias: "What do you mean why are we bugs?", 
    },
    {
        colin: "I'm a fly and you're a beetle!",
        mattias: "That's because we're BUG BROTHERS!", 
    },
    {
        colin: "Bug Brothers?",
        mattias: "Bug Brothers.", 
    },
];

const COLIN_URL = "fly.webp";
const MATTIAS_URL = "beetle.webp";

// functionality

let dialogIndex = -1;
let speaker = "mattias";

const dialogueText = document.getElementById("dialogue");
const portrait = document.getElementById("portrait");

const setPortraitUrl = (url) => {
    portrait.src = url;
}

const setColinText = (index) => {
    speaker = "colin";
    dialogueText.innerText = DIALOGUE[index].colin;
    setPortraitUrl(COLIN_URL);
}

const setMattiasText = (index) => {
    speaker = "mattias";
    dialogueText.innerText = DIALOGUE[index].mattias;
    setPortraitUrl(MATTIAS_URL);
}

const advanceDialogue = () => {
    if (dialogIndex >= DIALOGUE.length) {
        return;
    }

    if (speaker === "mattias") {
        dialogIndex += 1;

        if (dialogIndex >= DIALOGUE.length) {
            return;
        }

        setColinText(dialogIndex);
        return;
    }

    setMattiasText(dialogIndex);
}

// subscription

const colinFly = document.getElementById("fly");
const mattiasBeetle = document.getElementById("beetle");

const chatbox = document.getElementById("chatbox");


window.onload = () => {
    console.log("Moving bugs in!");
    colinFly.style.left = "5rem";
    mattiasBeetle.style.right = "5rem";
    setTimeout(() => {
        chatbox.style.bottom = "0%";
        setTimeout(() => {
            portrait.style.visibility = "visible";
            advanceDialogue();
            document.addEventListener("click", (e) => {
                advanceDialogue();
            })
        }, 750);
        
    }, 1000);
}
