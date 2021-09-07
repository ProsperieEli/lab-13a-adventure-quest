import { getUserData } from '../local-storage-utils.js';

const userData = getUserData();
const shy = userData.shyness;
const danger = userData.danger;
let spiritAnimal = '';

export function findSpiritAnimal() {
    if (shy < 0 && danger < 0) {
        spiritAnimal = 'Jack-A-Lope';
    } else if (shy < 0 && danger === 0) {
        spiritAnimal = 'Bigfoot';
    } else if (shy < 0 && danger > 0) {
        spiritAnimal = 'Dragon';
    } else if (shy === 0 && danger < 0) {
        spiritAnimal = 'Unicorn';
    } else if (shy === 0 && danger === 0) {
        spiritAnimal = 'Fluttershy';
    } else if (shy === 0 && danger > 0) {
        spiritAnimal = 'Yeti';
    } else if (shy > 0 && danger < 0) {
        spiritAnimal = 'Nessie';
    } else if (shy > 0 && danger === 0) {
        spiritAnimal = 'Chupacabra';
    } else {
        spiritAnimal = 'Wampa';
    }
    return spiritAnimal;
}