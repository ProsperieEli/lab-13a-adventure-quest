// import { setUserData } from './local-storage-utils.js';

const constellationForm = document.querySelector('#constellation-form');

constellationForm.addEventListener('submit', (e) => {
    e.preventDefault();

// add value to: 
// shyness:
// danger: 
// visited: {}

    window.location = '../sky-selection-page/';
});