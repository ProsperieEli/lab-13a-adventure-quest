import choices from '../data/choices-data.js';
import { findById } from '../local-storage-utils.js';
import { getUserData } from '../local-storage-utils.js';
import { renderUserHeader } from './header-input.js';

const userData = getUserData();

renderUserHeader(userData);

const constellationTitle = document.getElementById('constellation-title');
const constellationDescription = document.getElementById('constellation-description');

const choice1 = document.getElementById('constellation-choice1');
const choice2 = document.getElementById('constellation-choice2');
const choice3 = document.getElementById('constellation-choice3');

const description1 = document.getElementById('description-1');
const description2 = document.getElementById('description-2');
const description3 = document.getElementById('description-3');

const backgroundAudio = document.getElementById('background-audio');

const urlData = new URLSearchParams(window.location.search);
const constellationId = urlData.get('id');
const constellation = findById(choices, constellationId);

// set background audio
backgroundAudio.src = constellation.audio;

// set background audio file to low volume
backgroundAudio.volume = 0.2;

// set background immage from data file
document.body.style.background = `url(../constellations-page/star-assets/${constellation.img}) no-repeat`;
document.body.style.backgroundSize = 'cover';

//set title and description from data file
constellationTitle.textContent = constellation.title;
constellationDescription.textContent = constellation.description;

// set three choices
choice1.value = constellation.choices[0].id;
description1.textContent = constellation.choices[0].description;

choice2.value = constellation.choices[1].id;
description2.textContent = constellation.choices[1].description;

choice3.value = constellation.choices[2].id;
description3.textContent = constellation.choices[2].description;