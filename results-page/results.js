import { parseShyness, parseDanger } from './parse-final-personality.js';
import { getUserData } from '../local-storage-utils.js';
import { findSpiritAnimal } from './spirit-animal.js';
import { findSpiritAnimalImage } from './spirit-animal-image.js';

const userData = getUserData();

const whoYouReallyAre = document.getElementById('who-you-really-are');
const shy = parseShyness(userData);
const danger = parseDanger(userData);
whoYouReallyAre.textContent = `${shy} ${danger} Your spirit animal is`;

const spiritAnimalName = document.getElementById('spirit-animal-name');
const spiritAnimalSelection = findSpiritAnimal();
spiritAnimalName.textContent = spiritAnimalSelection;

const mainSection = document.querySelector('.main-section');
const image = findSpiritAnimalImage(userData);
mainSection.style.backgroundImage = (`url('./results-assets/${image}')`);
mainSection.style.backgroundSize = 'cover';