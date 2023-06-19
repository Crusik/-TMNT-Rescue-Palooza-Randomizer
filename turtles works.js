let allButtons = document.querySelectorAll('button');



// window.onload = function() {
//     const introSong = document.getElementById('intro_song');
//     // The intro song is 60 seconds long
//     let introTimer = 60000;
//     introSong.play();
//     disableButtons();
//     // After the intro song plays, the buttons will become active
//     setTimeout(function() {
//         enableButtons();
//     }, introTimer)
// }

// let stageList = [{ stage: "April's", characters: ["April", "Bebop", "Rocksteady"] },
//     { stage: "Swamp", characters: ["Genghis", "Rasputin", "Napoleon", "Atilla", "Leatherhead"] },
//     { stage: "Beach", characters: ["Ray Fillet", "Armaggon"] },
//     { stage: "Sewer", characters: ["Splinter", "Rat King"] },
//     { stage: "Van", characters: ["Mondo Gecko", "Ace Duck", "Chrome Dome"] },
//     { stage: "Dim.X", characters: ["Dask", "Kala", "Zak", "Anthrax", "Traag", "Granitor"] },
//     { stage: "Dojo", characters: ["Aska", "Usagi", "Lotus", "Tatsu", "Shogun"] },
//     { stage: "Channel 6", characters: ["Irma", "Burne", "Vernon", "Baxter", "Karai"] },
//     { stage: "Ship", characters: ["Mona Lisa", "Wingnut", "Groungchuck", "Dirtbag"] },
//     { stage: "Park", characters: ["Hothead", "Fugitoid", "Tora"] },
//     { stage: "Street", characters: ["Casey Jones", "Tempestra", "Triceraton"] },
//     { stage: "Rooftop", characters: ["Metalhead", "Slash", "Mecaturtle"] },
//     { stage: "Construction", characters: ["Muckman", "Zach", "Tokka", "Rahzar"] }

// ];

let stageList = [{
        stage: "April's",
        characters: [
            { character: "April", image: "", voice: "" },
            { character: "Bebop", image: "", voice: "" },
            { character: "Rocksteady", image: "", voice: "" }
        ]
    }, {
        stage: "Swamp",
        characters: [
            { character: "Genghis", image: "", voice: "" },
            { character: "Rasputin", image: "", voice: "" },
            { character: "Napoleon", image: "", voice: "" },
            { character: "Atilla", image: "", voice: "" },
            { character: "Leatherhead", image: "", voice: "" },
        ]

    },
    {
        stage: "Beach",
        characters: [
            { character: "Ray Fillet", image: "", voice: "" },
            { character: "Armaggon", image: "", voice: "", }
        ]
    },
    {
        stage: "Sewer",
        characters: [
            { character: "Splinter", image: "", voice: "" },
            { character: "Rat King", image: "", voice: "" }
        ]
    },
    {
        stage: "Van",
        characters: [
            { character: "Mondo Gecko", image: "", voice: "" },
            { character: "Ace Duck", image: "", voice: "" },
            { character: "Chrome Dome", image: "", voice: "" }
        ]
    }, {
        stage: "Dim.X",
        characters: [
            { character: "Dask", image: "", voice: "" },
            { character: "Kala", image: "", voice: "" },
            { character: "Zak", image: "", voice: "" },
            { character: "Anthrax", image: "", voice: "" },
            { character: "Traag", image: "", voice: "" },
            { character: "Granitor", image: "", voice: "" }
        ]
    }, {
        stage: "Dojo",
        characters: [
            { character: "Aska", image: "", voice: "" },
            { character: "Usagi", image: "", voice: "" },
            { character: "Lotus", image: "", voice: "" },
            { character: "Tatsu", image: "", voice: "" },
            { character: "Shogun", image: "", voice: "" }
        ]
    }, {
        stage: "Channel 6",
        characters: [
            { character: "Irma", image: "", voice: "" },
            { character: "Burne", image: "", voice: "" },
            { character: "Vernon", image: "", voice: "" },
            { character: "Baxter", image: "", voice: "" },
            { character: "Karai", image: "", voice: "" }
        ]
    }, {
        stage: "Ship",
        characters: [
            { character: "Mona Lisa", image: "", voice: "" },
            { character: "Wingnut", image: "", voice: "" },
            { character: "Groundchuck", image: "", voice: "" },
            { character: "Dirtbag", image: "", voice: "" }
        ]
    }, {
        stage: "Park",
        characters: [
            { character: "Hothead", image: "", voice: "" },
            { character: "Fugitoid", image: "", voice: "" },
            { character: "Tora", image: "", voice: "" }
        ]
    }, {
        stage: "Street",
        characters: [
            { character: "Casey Jones", image: "", voice: document.getElementById("punker") },
            { character: "Tempestra", image: "", voice: "" },
            { character: "Triceraton", image: "", voice: "" }
        ]
    }, {
        stage: "Rooftop",
        characters: [
            { character: "Metalhead", image: "", voice: "" },
            { character: "Slash", image: "", voice: "" },
            { character: "Mecaturtle", image: "", voice: "" }
        ]
    }, {
        stage: "Construction",
        characters: [
            { character: "Muckman", image: "", voice: "" },
            { character: "Zach", image: "", voice: "" },
            { character: "Tokka", image: "", voice: "" },
            { character: "Rahzar", image: "", voice: "" }
        ]
    }
];

let audioClips = ['tmntClear', 'tmntAreaClear', 'tmntStageClear'];

let removingClips = ["chucker", "jose", "vanish", "punker", "30seconds", "april", "listen", "splinter", "theRat"]

let characterList = [
    { character: "Leo", image: "", voice: document.getElementById("vanish") },
    { character: "Mike", image: "", voice: document.getElementById("chucker") },
    { character: "Raph", image: "", voice: document.getElementById("punker") },
    { character: "Don", image: "", voice: document.getElementById("listen") }
];

let newStageList = [{ stage: "Default", characters: ["Leo", "Mike", "Raph", "Don"] }]

let i = 0;
// Actual x,y values
let x = 0;
let y = 13;
const minTimer = 10;
const maxTimer = 20;
// for quick testing
// let x = 12;
// let y = 46;
const stageButton = document.getElementById("stageButton");
const characterButton = document.getElementById("characterButton");
const removeStageButton = document.getElementById("removeStageButton");
const removeCharacterButton = document.getElementById("removeCharacterButton");
let selectedStages = [];

function disableButtons() {
    allButtons.forEach(button => {
        button.disabled = true;
    })
}

function removeButtonsCheck() {
    if ((y === 13) || ((y - 13)/2 === x)) {
        removeCharacterButton.disabled = true;
        if ((x === 0) || ((y - 13)/2 != x)) {
            removeStageButton.disabled = true;
        } else {
            return;
        }
    } else if ((x === 0) || ((y - 13)/2 != x)) {
        removeStageButton.disabled = true;
    } else {
        removeCharacterButton.disabled = false;
        removeStageButton.disabled = false;
    }
}

// if (x === 0) || ((y - 13)/2 != x) {
//     removeStageButton.disabled = true;
// }

function stageAndCharacterCheck(){
    enableButtons();
    // This will check if either the all the characters or stages have been selected and will disable the corresponding button(s).
    if (y === 47 && x === 13) {
        // This means all selections have been made and will play "Cowabunga" while both "Picker" buttons are now disabled.
        completed();
        stageButton.disabled = true;
        characterButton.disabled = true;
    } else if ((x === 13) || (y - 13 - (x * 2) < 2)) {
        stageButton.disabled = true;
        removeButtonsCheck()
    } else if ((y === 47) || (y - 13 - (x * 2) === 2)) {
        characterButton.disabled = true;
        removeButtonsCheck()
    } else {
        characterButton.disabled = false;
        stageButton.disabled = false;
        removeButtonsCheck()
    }
}

function disableOneButton(button) {
    button.disabled = true;
}

function enableButtons() {
    allButtons.forEach(button => {
        button.disabled = false;
    });
    // This keep the Stage Button disabled after the very first character is picked since you need to pick two before picking the stage.
    // disableStageButton();
}

function enableRemoveButtons(button1, button2) {
    button1.disabled = false;
    button2.disabled = false;
}

function randomRemovalSound() {
    var index = Math.floor(Math.random() * 1000) % removingClips.length;
    var id = removingClips[index];
    var audioElement2 = document.getElementById(id);
    audioElement2.play();
}
// Disables Stage Button since you need to pick two characters first before picking the stage.
function disableStageButton() {
    if (y < 15) {
        stageButton.disabled = true;
        removeButtonsCheck()
    }
}
// Makes the default state of the Stage button disabled until 2 characters have been selected.
disableStageButton();

// To play voice clilp
function playVoice() {
    for (var i = 0; i < characterList.length; i++) {
        if (characters.textContent === characterList[i]["character"]) {
            characterList[i]['voice'].play();
        }
    }
    // let characterVoice = characterList[i].voice;
    // characterVoice.play();
}

function randomStageSound() {
    var index = Math.floor(Math.random() * 1000) % audioClips.length;
    var id = audioClips[index];
    var audioElement = document.getElementById(id);
    audioElement.play();
}
stageButton.addEventListener("click", function() {
    disableButtons();
    randomStageSound();
    // Timer for the random picker. The timer will be random within a set range "min-max"
    // Thought about changing the two function timers into the same one, but feel there are too many different elements in the two.
    function stageTimer(min, max) {
        intervalHandle = setInterval(function() {
            headerStages.textContent = stageList[i++ % stageList.length]["stage"];
        }, 60);
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
        console.log(rand / 2 + ' seconds');
        setTimeout(function() {
            clearInterval(intervalHandle);
        }, 500 * rand);

        function displayStage() {
            setTimeout(() => {
                // Each Stage/Character combo Div has 1 Stage div per parent Div. Index + 1 for each time this is ran. This will move stage picker the next stage selection
                let stage = document.getElementById(x)
                stage.textContent = headerStages.textContent; // Whatever selected will display on the right side of the App in the proper section
                function removeStageFromSelection() {
                    let selectedStage = [];
                    const randomStage = document.querySelector("#headerStages");
                    const randomPick = randomStage.textContent;
                    selectedStage.push(randomPick);
                    // This will iterate through the stageList object, then compare whatever the "randomPick" is with the Object. For the Object stage:("value") that is equal, then
                    // it will iterate through the array that is within the array of Ojects and then push "this" ("characters") onto the "characterList" for the available characters.
                    for (let i = 0; i < stageList.length; i++) {
                        if (stageList[i]["stage"] === selectedStage[0]) {
                            for (let j = 0; j < stageList[i]["characters"].length; j++) {
                                characterList.push(stageList[i]["characters"][j]);
                            }
                            selectedStages.push(stageList[i]);
                            newStageList.push(stageList[i]);
                            console.log(`%c${JSON.stringify(newStageList)}`, "color: green")
                            stageList.splice(i, 1);
                        }
                    }
                }
                if (x < 13) {
                    x++;
                }
                removeStageFromSelection();
                stageAndCharacterCheck()
            }, 500 * rand + 50);
        }
        displayStage();
    }
    if (x < 12) {
        stageTimer(minTimer, maxTimer)
    } else {
        stageTimer(1, 1)
    }
});

function log(){
    console.log(x)
}

let doubleTimer;

function runTwice(func) {
    disableButtons()
    func()
    setTimeout(()=> {
        disableButtons()
        func()
        setTimeout(()=> {
            stageAndCharacterCheck();
        }, 10500);
    }, 10000)
    // }, 500 * rand + 3000);
}

// runTwice(log)

function multipleCalls(func, arg) {
    return {
        func,
        arg,
        times: function (num) {
            let counter = 0;
            while (counter < num) {
                this.func(this.arg);
                counter += 1;
            }
        }
    };
}

characterButton.addEventListener("click", function(){
    runTwice(characterPicker)
    // multipleCalls(characterPicker).times(1)
    // stageAndCharacterCheck()
})
function characterPicker() {
    randomStageSound();
    disableButtons();
    function characterTimer(min, max) {
        // Indexes through the list of characters that are available, then stops at a random time to pick a character.
        intervalHandle = setInterval(function() {
            headerNames.textContent = characterList[i++ % characterList.length]["character"];
        }, 60);
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
        console.log(rand / 2 + ' seconds');
        setTimeout(function() {
            clearInterval(intervalHandle);
        }, 500 * rand);
        function displayCharacter() {
            setTimeout(() => {
                // Selecting the character Divs which will start at 13 and increase +1 each time this is ran.
                let characters = document.getElementById(y);
                characters.textContent = headerNames.textContent;
                // Animation via gsap
                const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
                tl.to(characters, { autoAlpha: "1", duration: 1 });
                tl.to(characters, { transform: "translateX(0)", duration: 1 }, "-=1");
                // Name of the next selected character
                const randomCharacter = document.querySelector("#headerNames");
                const randomPick = randomCharacter.textContent;
                if (y < 47){
                    y++;
                }
                // Allow the button to be pressed again for the next character once a character is picked.
                // playVoice();
                // stageAndCharacterCheck();
            }, 500 * rand + 50)
        }
        displayCharacter();
    }
    characterTimer(minTimer, maxTimer)
};

removeStageButton.addEventListener("click", function() {
        let lastStage = document.getElementById(x - 1);
        randomRemovalSound();
        disableButtons();
        // removalAnimation(lastStage);
        // tl.to(lastStage, { transform: "translateX(-100%)", duration: 1 });
        // tl.to(lastStage, { autoAlpha: "0", duration: 1 }, "-=1");
        // Need to add when the last Stage is removed, the characters unlocked from that stage are removed as well
        // from the available "Pool" of characters to be selecter.
        for (var i = 0; i < selectedStages.length; i++) {
            // Checks to see what the last stage selected is
            if (lastStage.innerHTML === selectedStages[i]['stage']) {
                // Adds the removed stage back to the stage list array
                stageList.push(selectedStages[i]);
                // The last group of characters that was added to the "pool".
                // These will be removed when the corresponding stage is removed
                let lastCharacters = selectedStages[i]['characters'];
                    // I believe this is removing the characters that correspond to the stage that is removed
                characterList = characterList.filter(characters => !lastCharacters.includes(characters))
                    // Removes the last stage on both of these
                newStageList.pop();
                selectedStages.pop();
            }
        }
        console.log(characterList);
        console.log(newStageList)
        // Change the Stage that is removed back to "Stage" default
        setTimeout(function() {
        lastStage.innerHTML = 'Stage';

        if (x > 0) {
            x--;
            console.log(x)
        }
        // enableRemoveButtons(removeStageButton, removeCharacterButton);
        stageAndCharacterCheck()
        // removeButtonsCheck();
        // Need to make a check for the stage/character button on removal. Or adjust the other check.
        // stageButton.disabled = false;
    }, 4000);
})

function removalAnimation(lastEntry) {
    const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
    tl.to(lastEntry, { transform: "translateX(-100%)", duration: 1 });
    tl.to(lastEntry, { autoAlpha: "0", duration: 1 }, "-=1");
}
    // Need to add a Delete last entry button/function(). It will delete the last entry when we are not happy or we both get the same
    // character for the same stage. It will also need to subtract 1 from the *id# but it will need to stop at id = 13.
removeCharacterButton.addEventListener("click", function() {
    let lastCharacter = document.getElementById(y - 1);
    randomRemovalSound();
    disableButtons();
    removalAnimation(lastCharacter);
    // tl.to(lastCharacter, { transform: "translateX(-100%)", duration: 1 });
    // tl.to(lastCharacter, { autoAlpha: "0", duration: 1 }, "-=1");
    setTimeout(function() {
        lastCharacter.innerHTML = '';
        if (x > 12) {
            // Button is disabled after all the available stages are selected.
            stageAndCharacterCheck();
        }
        if (y > 13) {
            y--;
        }
        stageAndCharacterCheck();
        // characterButton.disabled = false;
        // enableRemoveButtons(removeStageButton, removeCharacterButton);
    }, 4000);
})

// I want to add something where the Stage/Character Picker selection moves over (visually)to the proper slot 
//on the page.

function disableButtons2(button1, button2) {
    button1.disabled = true;
    button2.disabled = true;
    // button3.disabled = true;
    // button4.disabled = true;
}
// Need to add something to disable stage and character buttons 
function completed() {
    let cowabungaLogo = document.getElementById("cowabunga-logo");
    let cowabunga = document.getElementById("cowabunga");
    // let cowabungaLogo = document.getElementById("cowabunga-logo");
        cowabunga.play();
        // Logo needs to fade-in for 2 second, stay until the page is clicked anywhere, then fade-out.
        cowabungaLogo.classList.add('fadeIn');
        if (cowabungaLogo.classList.contains('fadeIn')) {
            disableButtons(removeStageButton, removeCharacterButton);
        cowabungaLogo.addEventListener("click", function() {
                // I am pretty sure the following is what is messing up the remove buttons not being disabled when I press them when all characters and stages are selected.
                // if (stageButton.disabled == true && characterButton.disabled == true) {
                //     if (removeCharacterButton.disabled == true && removeStageButton.disabled == true) {
            if (cowabungaLogo.classList.contains('fadeIn')) {
                stageAndCharacterCheck();
                enableRemoveButtons(removeStageButton, removeCharacterButton);
            } else {
                return;
            }
            cowabungaLogo.classList.remove('fadeIn');
            })
    }
}

// function playVoice(character) {
//     for (i = 0; i < i.length; i++) {
//         if (characters.textContent === characterList[i]["character"]) {
//             characterList[i]['voice'].play()
//         }
//     }
//     // let characterVoice = characterList[i].voice;
//     // characterVoice.play();
// }