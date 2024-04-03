window.onload = function () {
	loadVolumeLevels();
};

function divViz(elementId, viz) {
	const element = document.getElementById(elementId);
	if (viz == 'show') {
		viz = 'block';
	}
		element.style.display = viz;
}

function moveDiv(elementId, translateX, translateY, rotateDeg, timing) {
	const element = document.getElementById(elementId);
	element.style.transform = `translate(${translateX}%, ${translateY}%) rotate(${rotateDeg}deg)`;
	element.style.transition = 'transform ' + timing + 's ease-in-out';
  setTimeout(() => {
	element.style.transition = ''; // Reset transition after animation
  }, timing * 1000); // Use timing variable for the setTimeout delay
}

function flipDiv(elementId, timing) {
  const element = document.getElementById(elementId);
  let isFlipped = element.dataset.flipped === 'true' || false;

  // Toggle the flipped state
  isFlipped = !isFlipped;

  // Apply the scaleX transformation based on the flipped state
  const newScaleX = isFlipped ? -1 : 1;
  element.style.transform = `scaleX(${newScaleX})`;

  // Update the dataset attribute
  element.dataset.flipped = isFlipped.toString();

  element.style.transition = 'transform ' + timing + 's ease-in-out';
  setTimeout(() => {
	element.style.transition = ''; // Reset transition after animation
  }, timing * 1000); // Use timing variable for the setTimeout delay
}

function shakeDiv(elementId, timing, repetitions) {
  const element = document.getElementById(elementId);
  const originalPosition = element.style.transform;

  element.style.transition = 'transform ' + timing + 's ease-in-out';

  // Apply the shake animation using translateX
  const shake = () => {
	const randomFactor = (Math.random() - 0.5) * 20; // Adjust the intensity of the shake
	element.style.transform = `translateX(${randomFactor}px)`;

	// Reset position after animation
	setTimeout(() => {
	  element.style.transform = originalPosition;
	}, timing * 1000);
  };

  // Execute the shake animation for the specified number of repetitions
  for (let i = 0; i < repetitions; i++) {
	setTimeout(shake, i * timing * 1000 * 2); // Multiply by 2 to account for both the shake and reset
  }
}

// Function to play sound effects
function playSoundEffect(soundFile) {
	var soundEffectPlayer = document.getElementById('soundEffectPlayer');
	
	// Set the source of the audio element
	soundEffectPlayer.src = soundFile;
	
	// Play the sound effect
	soundEffectPlayer.play();
}

// Function to adjust volume
function adjustVolume(audioElementId, volume) {
	var audioElement = document.getElementById(audioElementId);

	// Set the volume of the audio element
	audioElement.volume = volume;
	saveVolumeLevels();
}

// Function to open the modal
function openModal() {
	var modal = document.getElementById('optionsModal');
	modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
	var modal = document.getElementById('optionsModal');
	modal.style.display = 'none';
}

function setCookie(name, value, days) {
const expires = new Date();
expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

function saveVolumeLevels() {
    const backgroundVolume = document.getElementById('backgroundAudio').volume;
    const soundEffectVolume = document.getElementById('soundEffectPlayer').volume;
    setCookie('backgroundVolume', backgroundVolume, 365);
    setCookie('soundEffectVolume', soundEffectVolume, 365);
}

function loadVolumeLevels() {
    const backgroundVolume = getCookie('backgroundVolume');
    const soundEffectVolume = getCookie('soundEffectVolume');
    if (backgroundVolume !== null) {
        document.getElementById('backgroundAudio').volume = parseFloat(backgroundVolume);
    }
    if (soundEffectVolume !== null) {
        document.getElementById('soundEffectPlayer').volume = parseFloat(soundEffectVolume);
    }
}