import { getUserData } from '../local-storage-utils.js';

const userData = getUserData();
const shy = userData.shyness;
const danger = userData.danger;
let spiritAnimalImage = '';

export function findSpiritAnimalImage() {
    if (shy < 0 && danger < 0) {
        spiritAnimalImage = 'rsz_jack-a-lope.jpg';
    } else if (shy < 0 && danger === 0) {
        spiritAnimalImage = 'rsz_bigfoot-2.jpg';
    } else if (shy < 0 && danger > 0) {
        spiritAnimalImage = 'rsz_fire-dragon.jpg';
    } else if (shy === 0 && danger < 0) {
        spiritAnimalImage = 'rsz_unicorn-3.jpeg';
    } else if (shy === 0 && danger === 0) {
        spiritAnimalImage = 'rsz_fluttershy.jpg';
    } else if (shy === 0 && danger > 0) {
        spiritAnimalImage = 'rsz_yeti.jpg';
    } else if (shy > 0 && danger < 0) {
        spiritAnimalImage = 'rsz_loch-ness-hs.jpeg';
    } else if (shy > 0 && danger === 0) {
        spiritAnimalImage = 'rsz_chupacabra.jpg';
    } else {
        spiritAnimalImage = 'rsz_wampa.jpg';
    }
    return spiritAnimalImage;
}