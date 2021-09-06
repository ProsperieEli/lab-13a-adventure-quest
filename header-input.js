import { getUserData } from './local-storage-utils.js';
import { parseShyness, parseDanger } from './constellations-page/personality-parser.js';

const userData = getUserData();
const currentStatus = document.getElementById('current-status');

const shyness = parseShyness(userData);
const danger = parseDanger(userData);

export function renderUserHeader() {
    currentStatus.textContent = `${userData.name} is ${shyness} and ${danger}`;
}