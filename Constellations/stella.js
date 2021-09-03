import choices from '../choices-data.js';
import { findById } from '../local-storage-utils.js';

const constellationTitle = document.getElementById('constellation-title');
const constellationImg = document.getElementById('constellation-img');
const constellationDescription = document.getElementById('constellation-description');
const choice1 = document.getElementById('constellation-choice1');
const choice2 = document.getElementById('constellation-choice2');
const choice3 = document.getElementById('constellation-choice3');
const description1 = document.getElementById('description-1');
const description2 = document.getElementById('description-2');
const description3 = document.getElementById('description-3');

console.log(constellationTitle, constellationImg, constellationDescription, choice1,
    choice2, choice3, description1, description2, description3);
const urlData = new URLSearchParams(window.location.search);
const constellationId = urlData.get('id');

const constellation = findById(choices, constellationId);


constellationTitle.textContent = constellation.title;
constellationImg.src = `../assets/${constellation.img}`;
constellationDescription.textContent = constellation.description;
choice1.value = constellation.choices[0].id;
description1.textContent = constellation.choices[0].description;


choice2.value = constellation.choices[1].id;
description2.textContent = constellation.choices[1].description;

choice3.value = constellation.choices[2].id;
description3.textContent = constellation.choices[2].description;


