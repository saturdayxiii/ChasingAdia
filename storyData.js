const storyData = [
    { 
        mark: 'beginning', speaker: null, text: "Start", choices: [], event: () => {
			background.style.backgroundImage = 'resources/bgRoom.webp';
			divViz('gris', 'none');
			divViz('rossi', 'none');
			divViz('adia', 'none');
			moveDiv('gris', -100, 0, 0, 1);
			moveDiv('rossi', 100, 0, 0, 1);
			moveDiv('adia', 100, 0, 0, 1);
        }
    },
    { speaker: null, text: "YEEEAAAWWWNN~  Morning all ready?", choices: [], event: () => {
		colorFade.style.opacity = 0;
	} },
	{ speaker: null, text: "I was up late again.", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "Thinking about Adia.", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "She's the coolest person I know!  Too bad she doesn't know I exist.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Well, today's a new day.  Maybe I'll run into her.  Maybe I\"ll even talk to her!<BR> Wow.", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "Where should I go today?", choices: [{ label: "The Park", destination: 'park1' }, {label: "The Pool", destination: 'pool1'}, {label: "Craft Fair", destination: 'fair1'}], event: () => {
		
	} },
	
	{ mark: 'park1', speaker: null, text: "It's a nice day today.  I want to go to the park.", choices: [], event: () => {
			colorFade.style.opacity = 1;
			setTimeout(() => {
				background.style.backgroundImage = 'url("resources/bgPark.webp")';
			}, 2000);
		} },
	{ speaker: null, text: "What a sunny day!", choices: [], event: () => {
		colorFade.style.opacity = 0;
	} },
	{ speaker: null, text: "I don't see Adia though.  She must be somewhere else.", choices: [], event: () => {
	} },
	{ speaker: null, text: "I think I see a kid eating gum off the bench...", choices: [], event: () => {
	} },
	{ speaker: null, text: "They're looking at me and smiling.", choices: [], event: () => {
	} },
	
	
	{ mark: 'morningMiss', speaker: null, text: "I'd better leave.", choices: [{ label: "The Park", destination: 'park2' }, {label: "The Pool", destination: 'poolMiss'}, {label: "Craft Fair", destination: 'fair2'}], event: () => {} },

	{ mark: 'fair1', speaker: null, text: "Let's check it out!", choices: [], event: () => {
			colorFade.style.opacity = 1;
			setTimeout(() => {
				background.style.backgroundImage = 'url("resources/bgMarket.webp")';
			}, 2000);
		} },
		{ speaker: null, text: "I almost forgot there was a market today.", choices: [], event: () => {
		colorFade.style.opacity = 0;
	} },
	{ speaker: null, text: "Oh.", choices: [], event: () => {
	} },
	{ speaker: null, text: "It's reeeeally empty.", choices: [{label: "Better go", destination: 'morningMiss'}], event: () => {
	} },
	
	//
	{ mark: 'pool1', speaker: null, text: "Nothing beats a swim in the morning!", choices: [], event: () => {
			colorFade.style.opacity = 1;
			setTimeout(() => {
				background.style.backgroundImage = 'url("resources/bgPool.webp")';
			}, 2000);
	} },
	{ speaker: null, text: "Ah.  The chlorine smell is always so minimal in the morning.", choices: [], event: () => {
		colorFade.style.opacity = 0;
	} },
	{ speaker: null, text: "Wait.", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "Is that?", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "OMG, it is!  Adia is here!", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "Wow, she swims like a catfish.", choices: [], event: () => {
		
	} },
	{ speaker: null, text: "How should I get her attention?", choices: [], event: () => {
		
	} },
	{ speaker: 'me', text: "H-HEY!  Hey Adia!", choices: [], event: () => {
		
	} },
	{ speaker: 'adia', text: "Umm, hello.<br>Do I know you?", choices: [{ label: "No, but I know you!", destination: 'uNoMe' }, { label: "I'm a neighbor.", destination: 'meNeighbor' }], event: () => {
		divViz('adia', 'show');
		adiaMeet = 1;
		setTimeout(() => {
			moveDiv('adia', 0, 0, 0, 1);
		}, 200);
	} },
	{ mark: 'uNoMe', speaker: 'me', text: "No, but I know all about you!<br>I follow you, your crafts, and your cat on instagram!<br>Hey, are your brothers here too?", choices: [], event: () => {
		
	} },
	{ speaker: 'adia', text: "Umm... Cool.  I'd better go.", choices: [], event: () => {
		adiaMood - 3; 
	} },
	{ speaker: null, text: "Oh...", choices: [], event: () => {
		moveDiv('adia', 100, 0, 0, 1); 
		setTimeout(() => {
			divViz('adia', 'none');
		}, 1000);
	} },
	{ speaker: null, text: "I feel very demotivated...", choices: [{ label: "oof", destination: 'morningMiss' }], event: () => {
		
	} },
	{ mark: 'meNeighbor', speaker: 'me', text: "Err, I guess not.  We live in the same neighborhood.  I've seen you around.  I've always wanted to say \"hi\".", choices: [], event: () => {
	
	} },
	{ speaker: 'adia', text: "Cool!  It's nice to meet you!", choices: [], event: () => {
		adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
	} },
	{ speaker: 'me', text: "Yah.  You too!", choices: [], event: () => {
	
	} },
	{ speaker: 'me', text: "I've seen your crafts online.  They are very coo-", choices: [], event: () => {
		adiaFace.style.backgroundImage = 'url("resources/adiaFaceGrin.webp")';
	} },
	{ speaker: null, text: "OI!  Look!  It's Adia!", choices: [], event: () => {
		storyElement.style.color = 'green';
		storyElement.style.fontSize = '26px';
	} },
	{ speaker: null, text: "Uh oh.  I know that voice.", choices: [], event: () => {
		storyElement.style.fontSize = '18px';
	} },
	{ speaker: 'gris', text: "I didn't think you get up this early.", choices: [], event: () => {
		divViz('gris', 'show');
		grisMeet = 1;
		setTimeout(() => {
			moveDiv('gris', 0, 0, 0, 1);
		}, 200);
	} },
	{ speaker: 'gris', text: "Who's this wet noodle?", choices: [], event: () => {
		playSoundEffect('resources/hey.opus');
	} },
	{ speaker: null, text: "That's Gris, the show off.", choices: [], event: () => {
		
	} },
	{ speaker: 'adia', text: "Hey Gris, this a neighbor of mine.  Though we've just officially met.", choices: [], event: () => {
		
	} },
	{ speaker: 'gris', text: "Oh nice. Hey, I've been practicing my laps.  Check out how fast I am.", choices: [], event: () => {
		
	} },
	{ speaker: 'adia', text: "Uh, okay.", choices: [], event: () => {
		moveDiv('gris', 150, 0, 0, 0.25);
		flipDiv('adiaFace');
		setTimeout(() => {
			moveDiv('gris', 0, 0, 0, 0.5);
		}, 500);
	} },
	{ speaker: null, text: "Oh geeze.", choices: [], event: () => {
		moveDiv('gris', -100, 0, 0, 0.5);
		flipDiv('adiaFace');
		setTimeout(() => {
			moveDiv('gris', 150, 0, 0, 0.5);
		}, 1000);
	} },
	{ speaker: null, text: "I don't think he's going to stop.", choices: [], event: () => {
		moveDiv('gris', 0, 0, 0, 0.5);
		flipDiv('adiaFace',0);
		setTimeout(() => {
			moveDiv('gris', -100, 0, 0, 0.5);
		}, 1000);
	} },
	{ speaker: null, text: "Ow!", choices: [], event: () => {
		storyElement.style.fontSize = '36px';
		shakeDiv('background', 0.25, 4);
		moveDiv('gris', -100, 0, 0, 0.5);
		flipDiv('adiaFace',0);
		setTimeout(() => {
			moveDiv('gris', 150, 0, 0, 0.5);
		}, 1000);
	} },
	{ speaker: null, text: "He just brushed me and his scales are sharp!", choices: [], event: () => {
		storyElement.style.fontSize = '18px';
		moveDiv('gris', 0, 0, 0, 1);
		flipDiv('adiaFace',0);
		setTimeout(() => {
			moveDiv('gris', -100, 0, 0, 0.5);
	}, 1000);
	} },
	{ speaker: null, text: "How can I get Adia's attention again?", choices: [{label: "Show off in my own way", destination: 'holdBreath'}, {label: "Encourage Gris", destination: 'anteUp'}], event: () => {
		moveDiv('gris', 0, 0, 0, 1);
		flipDiv('adiaFace',0);
		setTimeout(() => {
			moveDiv('gris', 150, 0, 0, 0.5);
		}, 1000);
	} },
	
	//
	{ mark: 'holdBreath', speaker: 'me', text: "Hey Adia, look how long I can hold my breath underwater!", choices: [], event: () => {
			moveDiv('gris', 0, 0, 0, 1);
			adiaMood--;
	} },
	{ speaker: null, text: "SPLASH!", choices: [], event: () => {
		storyElement.style.color = 'blue';
		storyElement.style.fontSize = '36px';
	} },
	{ speaker: null, text: "I jumped into the water, took a deep breath, then plunged below the surface.", choices: [], event: () => {
		storyElement.style.fontSize = '18px';
		adiaFace.style.backgroundImage='url("resources/adiaFaceShock.webp")';
		grisFace.style.backgroundImage='url("resources/grisFaceShock.webp")';
	} },
	{ speaker: null, text: "I can't see past the surface very well, but I can tell that Gris has at least stopped doing laps.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Now I just have to hold my breath long enough to not look like a wimp.", choices: [], event: () => {
	} },
	{ speaker: null, text: "But my lungs are already burning!  I've never actually practised this sort of thing.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Just a little more.  Just a little more.  Just a little more.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Just a little more.  Just a little more.  Just a little more.", choices: [], event: () => {
	colorFade.style.opacity = 1;
	} },
	{ speaker: 'me', text: "COUGH COUGH COUGH", choices: [], event: () => {
		divViz('gris', 'none');
		adiaFace.style.backgroundImage='url("resources/adiaFaceScowl.webp")';
		colorFade.style.opacity = 0;
	} },
	{ speaker: 'me', text: "W-what happened?", choices: [], event: () => {
	} },
	{ speaker: 'adia', text: "You were showing off and passed out.", choices: [], event: () => {
	} },
	{ speaker: 'adia', text: "The lifeguard had to revive you.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Gris is gone, but she is not impressed.<br>", choices: [], event: () => {
	} },
	{ speaker: 'me', text: "I- I don't feel so well.<br>I should probably go home.", choices: [], event: () => {
	} },
	{ speaker: 'adia', text: "That sounds like a good idea.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Yah, she's sick of me.", choices: [], event: () => {
	} },
	{ speaker: null, text: "Where should I go next?", choices: [{ label: "The Park", destination: 'park2' }, { label: "The Pool", destination: 'poolReturn' }, { label: "Craft Fair", destination: 'fair2' }], event: () => {} },
	
	{ mark: 'anteUp', speaker: 'me', text: "HEY GRIS!", choices: [], event: () => {
			moveDiv('gris', 0, 0, 0, 1);
			adiaMood++;
	} },
	{ speaker: 'me', text: "That's really good!  How do you go so fast without your tail getting in the way?", choices: [], event: () => {
	} },
	{ speaker: 'gris', text: "What about my Tail-", choices: [], event: () => {
	} },
	{ speaker: 'gris', text: "Whoa! OOF!", choices: [], event: () => {
	storyElement.style.fontSize = '36px';
	grisFace.style.backgroundImage='url("resources/grisFaceShock.webp")';
	adiaFace.style.backgroundImage='url("resources/adiaFaceShock.webp")';
	shakeDiv('gris', 0.10, 4);
	setTimeout(() => {
		moveDiv('gris', 5, 20, -23, 1);		
	}, 1000);
	} },
	{ speaker: null, text: "He tripped over his tail.<br>I guess he's never had to think about it before...", choices: [], event: () => {
	storyElement.style.fontSize = '18px';
	} },
	{ speaker: 'adia', text: "Oh no... Gris!<br>Are you alright?", choices: [], event: () => {
	} },
	{ speaker: 'gris', text: "I really hurt my tail bone.  I- I think I should go home.", choices: [], event: () => {
	} },
	{ speaker: 'adia', text: "Oh no...", choices: [], event: () => {
	moveDiv('gris',-100,20,-23, 1);
	} },
	{ speaker: 'adia', text: "That's too bad.", choices: [], event: () => { } },
	{ speaker: 'adia', text: "But Gris is pretty clumsy.<br>He hurts himself fairly often.", choices: [], event: () => {
	divViz('gris', 'none');
	adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
	} },
	{ speaker: 'adia', text: "Do you want to play some water volleyball?", choices: [], event: () => {
	} },
	{ speaker: 'me', text: "I do!", choices: [], event: () => {
	} },
	{ speaker: null, text: "Wow, what a great start to the day!", choices: [], event: () => {
	} },
	{ speaker: null, text: "Wow, what a great start to the day!", choices: [], event: () => {
	colorFade.style.opacity = 1;
	} },
	
	
	{ mark: 'park2', text: "This is as far as uncle got before Christmas.<br>Like, share, subscribe, and click the bell for more.", choices: [], event: () => {
    background.style.backgroundImage = 'url("resources/bgPark.webp")';
    moveDiv('rossi', 0, 0, 0, 1);
    moveDiv('gris', 0, 0, 0, 1);
    moveDiv('adia', 0, 0, 0, 1);
    divViz('rossi', 'show');
	grisFace.style.backgroundImage = 'url("resources/grisFaceSmile.webp")';
    grisBottom.style.display='block';
	grisTop.style.display='block';
    divViz('gris', 'show');
    adiaHairBack.style.display='block';
    adiaHair.style.backgroundImage = 'url("resources/adiaHair.webp")';
	adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
    adiaTop.style.display='block';
	adiaBottom.style.display='block';
	divViz('adia', 'show');
    storyElement.style.color = 'black';
    setTimeout(() => {
        colorFade.style.opacity = 0;
    }, 500);
	} },
	{ mark: 'fair2', text: "This is as far as uncle got before Christmas.<br>Like, share, subscribe, and click the bell for more.", choices: [], event: () => {
    background.style.backgroundImage = 'url("resources/bgPark.webp")';
    moveDiv('rossi', 0, 0, 0, 1);
    moveDiv('gris', 0, 0, 0, 1);
    moveDiv('adia', 0, 0, 0, 1);
    divViz('rossi', 'show');
	grisFace.style.backgroundImage = 'url("resources/grisFaceSmile.webp")';
    grisBottom.style.display='block';
	grisTop.style.display='block';
    divViz('gris', 'show');
    adiaHairBack.style.display='block';
    adiaHair.style.backgroundImage = 'url("resources/adiaHair.webp")';
	adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
    adiaTop.style.display='block';
	adiaBottom.style.display='block';
	divViz('adia', 'show');
    storyElement.style.color = 'black';
    setTimeout(() => {
        colorFade.style.opacity = 0;
    }, 500);
	} },
	{ mark: 'poolReturn', text: "This is as far as uncle got before Christmas.<br>Like, share, subscribe, and click the bell for more.", choices: [], event: () => {
    background.style.backgroundImage = 'url("resources/bgPark.webp")';
    moveDiv('rossi', 0, 0, 0, 1);
    moveDiv('gris', 0, 0, 0, 1);
    moveDiv('adia', 0, 0, 0, 1);
    divViz('rossi', 'show');
	grisFace.style.backgroundImage = 'url("resources/grisFaceSmile.webp")';
    grisBottom.style.display='block';
	grisTop.style.display='block';
    divViz('gris', 'show');
    adiaHairBack.style.display='block';
    adiaHair.style.backgroundImage = 'url("resources/adiaHair.webp")';
	adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
    adiaTop.style.display='block';
	adiaBottom.style.display='block';
	divViz('adia', 'show');
    storyElement.style.color = 'black';
    setTimeout(() => {
        colorFade.style.opacity = 0;
    }, 500);
	} },
	{ mark: 'poolMiss', text: "This is as far as uncle got before Christmas.<br>Like, share, subscribe, and click the bell for more.", choices: [], event: () => {
    background.style.backgroundImage = 'url("resources/bgPark.webp")';
    moveDiv('rossi', 0, 0, 0, 1);
    moveDiv('gris', 0, 0, 0, 1);
    moveDiv('adia', 0, 0, 0, 1);
    divViz('rossi', 'show');
	grisFace.style.backgroundImage = 'url("resources/grisFaceSmile.webp")';
    grisBottom.style.display='block';
	grisTop.style.display='block';
    divViz('gris', 'show');
    adiaHairBack.style.display='block';
    adiaHair.style.backgroundImage = 'url("resources/adiaHair.webp")';
	adiaFace.style.backgroundImage = 'url("resources/adiaFaceSmile.webp")';
    adiaTop.style.display='block';
	divViz('adia', 'show');
	adiaBottom.style.display='block';
    storyElement.style.color = 'black';
    setTimeout(() => {
        colorFade.style.opacity = 0;
    }, 500);
	} },
	
	//{ mark: 'park2', 'poolMiss', 'poolReturn', 'fair2'},
	
];

const bookmarkIndexes = {};

storyData.forEach((entry, index) => {
	if (entry.mark) {
		bookmarkIndexes[entry.mark] = index;
	}
});

let currentIndex = 0;

function displayStory() {
	const currentStory = storyData[currentIndex];
	storyElement.innerHTML = currentStory.text;

	// Apply speaker class based on the current speaker
	const characterTrait = characterTraits[currentStory.speaker] || {};
	const { color, displayName } = characterTrait;

	speaker.style.display = displayName ? 'block' : 'none';
	speaker.style.color = color || 'black';
	speaker.innerHTML = displayName || '';

	storyElement.style.color = color || 'dimgray';

	if (currentStory.choices.length > 1) {
		displayChoices(currentStory.choices);
		document.removeEventListener('click', handleContinue);
	} else {
		choicesElement.innerHTML = '';
		setTimeout(() => {
			document.addEventListener('click', handleContinue);
		}, 100);
	}

	if (currentStory.event) {
		currentStory.event();
	}
}

function displayChoices(choices) {
	choicesElement.innerHTML = '';
	choices.forEach((choice, index) => {
		const choiceElement = document.createElement('div');
		choiceElement.classList.add('choice');
		choiceElement.textContent = choice.label;
		choiceElement.addEventListener('click', () => handleChoice(index));
		choicesElement.appendChild(choiceElement);
	});
}

function handleChoice(index) {
	const currentStory = storyData[currentIndex];
	const destinationBookmark = currentStory.choices[index].destination;
	const destinationIndex = bookmarkIndexes[destinationBookmark];
	currentIndex = destinationIndex;
	displayStory();
}

function handleContinue() {
	const currentStory = storyData[currentIndex];
	var modal = document.getElementById('optionsModal');
	
	if (modal.style.display !== "block") {
		if (currentStory.choices.length > 0) {
			const destinationBookmark = currentStory.choices[0].destination;
			const destinationIndex = bookmarkIndexes[destinationBookmark];
			currentIndex = destinationIndex;
		} else {
			currentIndex++;
		}
	}

	displayStory();
}
	
displayStory();