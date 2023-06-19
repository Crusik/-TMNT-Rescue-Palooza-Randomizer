// ************************************* Charatacer ******************************************************************
class character {
  constructor(name, image, voice, enabled = false){
  	this.name = name; this.image = image;
    this.voice = voice; this.enabled = enabled;
  }
  
  isEnabled(bool){ 
  	this.enabled = bool;	
  }
  
  change(paramName, value){
    const propertyNames = Object.keys(this);
    
    let nameFound = false;
    for (let propertyName of propertyNames){
    	if (paramName === propertyName) nameFound = true;
    }
     if (nameFound) this[paramName] = value;
  }
}

let Don = new character("Don", "/images/turtles/don.png", '/voices/turtles/voice.mp3');
let Leonardo = new character("Leonardo", "/images/turtles/leo.png", '/voices/turtles/voice.mp3');
let Raphael = new character("Raphael", "/images/turtles/rap.png", '/voices/turtles/voice.mp3');
let Michelangelo = new character("Michelangelo", "/images/turtles/mich.png", '/voices/turtles/voice.mp3');
let Splinter = new character("Splinter", "/images/rat/splinter.png", '/voices/rat/voice.mp3');
let April = new character("April", "/images/human/April.png", '/voices/human/voice.mp3');

Don.isEnabled(true);
Leonardo.isEnabled(true);
Raphael.isEnabled(true);
Michelangelo.isEnabled(true);



// ************************************* Charatacer List**************************************************************
class characterList {
	constructor(chars = [ Don, Leonardo, Raphael, Michelangelo ]){
  	this.list = [];
  	this.add(chars);
  }
  
  remove(chars){
  	for (let i = 0; i < this.list.length; i++){
    	if (this.list[i].name === chars.name) this.list.splice(i, 1);
    }
  	
  }
  
  add(chars){
  	// If not an array
  	if (!Array.isArray(chars)) {
      if (chars instanceof character) this.list.push(chars);
    }
    
    // If an array
    else {
      for (const char of chars) {
        if (char instanceof character) this.list.push(char);
    	}
    }
  }
  
  copy(characterList){
  // logic here
  }
}


// ************************************* Stage **************************************************************
class level {
	constructor(name, characters = new characterList(), enabled = true){
  	this.name = name;
  	this.characters = characters;
    this.isEnabled = enabled;
  }
  
  enableAllCharacters(){
  
  }
  
  disableAllCharacters(){
  
  }
  getEnabled(){
  
  }
  
  getDisabled(){
  
  }
  
  addCharacter(characters){
  
   // If not an array
  	if (!Array.isArray(characters)) this.characters.add(characters);
    // If an array
    else {
      for (const character of characters) this.characters.add(character);
    }
  	
  }
  
  removeCharacter(characters){
  	this.characters.remove(characters);
  }
}


let SewerStage = new level("Sewer");
SewerStage.addCharacter([Splinter, April]);



let Channel6Stage = new level("Channel6");
let ShipStage = new level("Ship");
let RoofTopStage = new level("Roof Top");
let StreetStage = new level("Street");
let DojoStage = new level("Dojo");
let DimXStage = new level("Dim X");
let BeachStage = new level("Beach");


// ************************************* Stage List**************************************************************
let defaultStageList = [ SewerStage, Channel6Stage, ShipStage, RoofTopStage, StreetStage, DojoStage, DimXStage, BeachStage ];

class stageList {
	constructor(lvls = defaultStageList){
    this.levels = [];
  	this.add(lvls);
  }
  
  remove(lvls){
  	for (let i = 0; i < this.levels.length; i++){
    	if (this.levels[i].name === lvls.name) this.levels.splice(i, 1);
    }
  	return this.levels;
  }
  
  add(lvls){
    // If not an array
  	if (!Array.isArray(lvls)) this.levels.push(lvls);
    // If an array
    else {
      for (const lvl of lvls)  this.levels.push(lvl);
    }
    
  }
  
  copy(lvls){
  // logic here
  }
}

let gameStages = new stageList();
console.log(gameStages.levels[0].characters.list[5].enabled);
SewerStage.characters.list[5].isEnabled(true);
console.log(gameStages.levels[0].characters.list[5].enabled);
 //console.log(SewerStage.characters.list[0].name);