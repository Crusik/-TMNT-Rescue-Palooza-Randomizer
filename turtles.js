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

let stageList = [{ stage: "April's", characters: ["April", "Bebop", "Rocksteady"] },
    { stage: "Swamp", characters: ["Genghis", "Rasputin", "Napoleon", "Atilla", "Leatherhead"] },
    { stage: "Beach", characters: ["Ray Fillet", "Armaggon"] },
    { stage: "Sewer", characters: ["Splinter", "Rat King"] },
    { stage: "Van", characters: ["Mondo Gecko", "Ace Duck", "Chrome Dome"] },
    { stage: "Dim.X", characters: ["Dask", "Kala", "Zak", "Anthrax", "Traag", "Granitor"] },
    { stage: "Dojo", characters: ["Aska", "Usagi", "Lotus", "Tatsu", "Shogun"] },
    { stage: "Channel 6", characters: ["Irma", "Burne", "Vernon", "Baxter", "Karai"] },
    { stage: "Ship", characters: ["Mona Lisa", "Wingnut", "Groungchuck", "Dirtbag"] },
    { stage: "Park", characters: ["Hothead", "Fugitoid", "Tora"] },
    { stage: "Street", characters: ["Casey Jones", "Tempestra", "Triceraton"] },
    { stage: "Rooftop", characters: ["Metalhead", "Slash", "Mecaturtle"] },
    { stage: "Construction", characters: ["Muckman", "Zach", "Tokka", "Rahzar"] }

];

// let stageList = [{
//         stage: "April's",
//         characters: [{
//             April: { image: "", voice: "" },
//             Bebop: { image: "", voice: "" },
//             Rocksteady: { image: "", voice: "" }
//         }]
//     }, {
//         stage: "Swamp",
//         characters: [{
//             Genghis: { image: "", voice: "" },
//             Rasputin: { image: "", voice: "" },
//             Napoleon: { image: "", voice: "" },
//             Atilla: { image: "", voice: "" },
//             Leatherhead: { image: "", voice: "" },
//         }]

//     },
//     {
//         stage: "Beach",
//         characters: [{
//             "Ray Fillet": { image: "", voice: "" },
//             Armaggon: { image: "", voice: "", }
//         }]
//     },
//     {
//         stage: "Sewer",
//         characters: [{
//             Splinter: { image: "", voice: "" },
//             "Rat King": { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Van",
//         characters: [{
//             "Mondo Gecko": { image: "", voice: "" },
//             "Ace Duck": { image: "", voice: "" },
//             "Chrome Dome": { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Dim.X",
//         characters: [{
//             Dask: { image: "", voice: "" },
//             Kala: { image: "", voice: "" },
//             Zak: { image: "", voice: "" },
//             Anthrax: { image: "", voice: "" },
//             Traag: { image: "", voice: "" },
//             Granitor: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Dojo",
//         characters: [{
//             Aska: { image: "", voice: "" },
//             Usagi: { image: "", voice: "" },
//             Lotus: { image: "", voice: "" },
//             Tatsu: { image: "", voice: "" },
//             Shogun: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Channel 6",
//         characters: [{
//             Irma: { image: "", voice: "" },
//             Burne: { image: "", voice: "" },
//             Vernon: { image: "", voice: "" },
//             Baxter: { image: "", voice: "" },
//             Karai: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Ship",
//         characters: [{
//             "Mona Lisa": { image: "", voice: "" },
//             Wingnut: { image: "", voice: "" },
//             Groungchuck: { image: "", voice: "" },
//             Dirtbag: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Park",
//         characters: [{
//             Hothead: { image: "", voice: "" },
//             Fugitoid: { image: "", voice: "" },
//             Tora: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Street",
//         characters: [{
//             "Casey Jones": { image: "", voice: "" },
//             Tempestra: { image: "", voice: "" },
//             Triceraton: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Rooftop",
//         characters: [{
//             Metalhead: { image: "", voice: "" },
//             Slash: { image: "", voice: "" },
//             Mecaturtle: { image: "", voice: "" }
//         }]
//     },
//     {
//         stage: "Construction",
//         characters: [{
//             Muckman: { image: "", voice: "" },
//             Zach: { image: "", voice: "" },
//             Tokka: { image: "", voice: "" },
//             Rahzar: { image: "", voice: "" }
//         }]
//     }
// ];

let audioClips = ['tmntClear', 'tmntAreaClear', 'tmntStageClear'];

let removingClips = ["chucker", "jose", "vanish", "punker", "30seconds", "april", "listen", "splinter", "theRat"]

// let characterList = [{
//     Leo: { image: "", voice: "" },
//     Mike: { image: "", voice: "" },
//     Raph: { image: "", voice: "" },
//     Don: { image: "", voice: "" }
// }];

let newStageList = [{ stage: "Default", characters: ["Leo", "Mike", "Raph", "Don"] }]

const stageButton = document.getElementById("stageButton");
const characterButton = document.getElementById("characterButton");
const removeStageButton = document.getElementById("removeStageButton");
const removeCharacterButton = document.getElementById("removeCharacterButton");
let selectedStages = [];
const maxSeconds = 20;
const minSeconds = 10;

function disableButtons() {
    allButtons.forEach(button => {
        button.setAttribute("disabled", true);
    })
}

function enableButtons() {
    allButtons.forEach(button => {
        button.setAttribute("disabled", false);
    });
}

function enableRemoveButtons(button1, button2) {
    button1.setAttribute("disabled", false);
    button2.setAttribute("disabled", false);
}

function randomRemovalSound() {
    var index = Math.floor(Math.random() * 1000) % removingClips.length;
    var id = removingClips[index];
    var audioElement2 = document.getElementById(id);
    audioElement2.play();
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
    if (x < 1) {
        removeStageButton.disabled = true;
    }
    // Timer for the random picker. The timer will be random within a set range "min-max"
    // Thought about changing the two function timers into the same one, but feel there are too many different elements in the two.
    function stageTimer(min, max) {
        intervalHandle = setInterval(function() {
            headerStages.textContent = stageList[i++ % stageList.length]["stage"];
        }, 60);
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
        console.log(rand);
        console.log('Stage will be picked in ' + rand / 2 + ' seconds');
        setTimeout(function() {
            clearInterval(intervalHandle);
        }, 500 * rand);

        function displayStage() {
            setTimeout(() => {
                // Each Stage/Character combo Div has 1 Stage div per parent Div
                // Index + 1 for each time this is ran. This will move stage picker the next stage selection
                let stage = document.getElementById(x)
                    // Whatever selected will display on the right side of the App in the proper section
                stage.textContent = headerStages.textContent;

                function removeStageFromSelection() {
                    let selectedStage = [];
                    const randomStage = document.querySelector("#headerStages");
                    const randomPick = randomStage.textContent;
                    console.log(randomPick);
                    selectedStage.push(randomPick);
                    // This will iterate through the stageList object, then compare whatever the "randomPick" is with the Object. For the Object stage:("value") that is equal, then
                    // it will iterate through the array that is within the array of Ojects and then push "this" ("characters") onto the "characterList" for the available characters.
                    for (var i = 0; i < stageList.length; i++) {
                        if (stageList[i]["stage"] === selectedStage[0]) {
                            for (var j = 0; j < stageList[i]["characters"].length; j++) {
                                characterList.push(stageList[i]["characters"][j]);
                            }
                            selectedStages.push(stageList[i]);
                            console.log(`%c${JSON.stringify(selectedStages)}`, "color: red; font-weight: bold")
                            console.log(stageList[i])
                            newStageList.push(stageList[i]);
                            console.log(`%c${JSON.stringify(newStageList)}`, "color: green")
                            stageList.splice(i, 1);
                        }
                    }
                }
                if (x <= 13) {
                    x++;
                    enableButtons();
                }
                if (x > 12) {
                    stageButton.setAttribute("disabled", true);
                }
                if (y > 46) {
                    characterButton.setAttribute("disabled", false);
                }
                removeStageFromSelection();
            }, 500 * rand + 50);
        }
        displayStage();
        console.log(stageList);
        console.log(characterList);
    }
    if (x < 12) {
        stageTimer(minSeconds, maxSeconds)
    } else {
        stageTimer(1, 1)
    }
});

characterButton.addEventListener("click", function() {
    // I want to add this to double run for player 1 and player 2, back to back.
    randomStageSound();
    function characterTimer(min, max) {
        disableButtons();
        // Indexes through the list of characters that are available
        intervalHandle = setInterval(function() {
            headerNames.textContent = characterList[i++ % characterList.length];
        }, 60);
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
        console.log(rand);
        console.log('Character will be picked in ' + rand / 2 + ' seconds');
        setTimeout(function() {
            clearInterval(intervalHandle);
        }, 500 * rand);

        function displayCharacter() {
            setTimeout(() => {
                // Selecting the character Divs which will start at 13 and increase +1 each time this is ran.
                let characters = document.getElementById(y);
                characters.textContent = headerNames.textContent;
                console.log(y);
                // Animation via gsap
                const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
                tl.to(characters, { autoAlpha: "1", duration: 1 });
                tl.to(characters, { transform: "translateX(0)", duration: 1 }, "-=1");
                y++;
                console.log(characterList);
                // Allow the button to be pressed again for the next character once a character is picked.
                enableButtons();
                // Button is disabled after all the available stages are selected.
                if (x > 12) {
                    stageButton.disabled = true;
                }
                if (y >= 47) {
                    // This means all selections have been made and will play "Cowabunga" while both "Picker" buttons are now disabled.
                    completed();
                }
            }, 500 * rand + 50)
        }
        displayCharacter();
    }
    characterTimer(minSeconds, maxSeconds)
});

removeStageButton.addEventListener("click", function() {
        let lastStage = document.getElementById(x - 1);
        console.log(lastStage.innerHTML);
        randomRemovalSound();

        // When the last Stage is removed, the characters unlocked from that stage are removed from the available Object
        for (var i = 0; i < selectedStages.length; i++) {
            // Checks to see what the last stage selected is and selects it in our currect Object
            if (lastStage.innerHTML === selectedStages[i]['stage']) {
                // Adds the removed stage back to the stage list array
                stageList.push(selectedStages[i]);
                // The last group of characters will be removed when the corresponding stage is removed
                let lastCharacters = selectedStages[i]['characters'];
                console.log(lastCharacters)
                    // I believe this is removing the characters that correspond to the stage that is removed
                characterList = characterList.filter(characters => !lastCharacters.includes(characters))
                    // Removes the last stage on both of these
                newStageList.pop();
                selectedStages.pop();
            }
        }
        console.log(characterList);
        console.log(stageList)
        console.log(selectedStages)
        console.log(newStageList)
        // Change the Stage that is removed back to "Stage" default
        lastStage.innerHTML = 'Stage';
        if (x > 0) {
            x--;
            console.log(x)
        }
        stageButton.disabled = false;
    })
    // It will delete the last entry when we are not happy or we both get the same
    // character for the same stage. It will also need to subtract 1 from the *id# but it will need to stop at id = 13.
removeCharacterButton.addEventListener("click", function() {
        let lastCharacter = document.getElementById(y - 1);
        console.log(lastCharacter.innerHTML);
        randomRemovalSound();
        disableButtons();
        
        const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
        tl.to(lastCharacter, { transform: "translateX(-100%)", duration: 1 });
        tl.to(lastCharacter, { autoAlpha: "0", duration: 1 }, "-=1");
        setTimeout(function() {
            enableButtons();
            lastCharacter.innerHTML = '';
            if (x > 12) {
                // Button is disabled after all the available stages are selected.
                stageButton.disabled = true;
            }
            if (y > 13) {
                y--;
                console.log(y)
            }
        }, 4000);
    })
    // It would also be nice to add it where you cannot pick another Stage until the two characters are selected, so it won't add the
    // new characters from that stage before they can be selected.


// I want to add something where the Stage/Character Picker selection moves over (visually)to the proper slot 
//on the page.

function disableButtons2(button1, button2) {
    button1.disabled = true;
    button2.disabled = true;
    // button3.disabled = true;
    // button4.disabled = true;
}

function completed() {
    let cowabungaLogo = document.getElementById("cowabunga-logo");
    let cowabunga = document.getElementById("cowabunga");
    // let cowabungaLogo = document.getElementById("cowabunga-logo");
    if (stageButton.disabled == true && characterButton.disabled == true) {
        if (removeCharacterButton.disabled == false && removeStageButton.disabled == false) {
            cowabunga.play();
            // Logo needs to fade-in for 2 second, stay until the page is clicked anywhere, then fade-out.
            cowabungaLogo.classList.add('fadeIn');
            if (cowabungaLogo.classList.contains('fadeIn')) {
                disableButtons2(removeStageButton, removeCharacterButton);
            }
        }
        cowabungaLogo.addEventListener("click", function() {
                // I am pretty sure the following is what is messing up the remove buttons not being disabled when I press them when all characters and stages are selected.
                // if (stageButton.disabled == true && characterButton.disabled == true) {
                //     if (removeCharacterButton.disabled == true && removeStageButton.disabled == true) {
                if (cowabungaLogo.classList.contains('fadeIn')) {
                    enableRemoveButtons(removeStageButton, removeCharacterButton);
                } else {
                    return;
                }
                cowabungaLogo.classList.remove('fadeIn');
                // enableRemoveButtons(removeStageButton, removeCharacterButton);
                //     }
                // }
                // The above leaves the remove buttons active permanently after the "click event" occurs. Once this function runs
            })
            // if (cowabungaLogo.classList('fadeIn') == false) {
            //     enableRemoveButtons(removeStageButton, removeCharacterButton);
            // }
    }
}
// I want to add a section on the bottom that displays all characters that are next to the corresponding stage that unlocks them. 
// Both the stage and the characters shall be "greyed out" until they are "active" after that specific stage has been selected.