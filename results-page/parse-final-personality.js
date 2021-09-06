import { getUserData } from '../local-storage-utils.js';
import finalPersonality from '../data/results-data.js';

const userData = getUserData();

let finalShyness = '';
let finalDanger = '';

export function parseShyness() {
    if (userData.shyness > 0) { 
        finalShyness = (finalPersonality[0].high);
    }
    else if (userData.shyness === 0) { 
        finalShyness = (finalPersonality[0].mid);
    }
    else { 
        finalShyness = (finalPersonality[0].low);
    }
    return finalShyness;
}

export function parseDanger() {
    if (userData.danger > 0) { 
        finalDanger = (finalPersonality[1].high);
    }
    else if (userData.danger === 0) { 
        finalDanger = (finalPersonality[1].mid);
    }
    else { 
        finalDanger = (finalPersonality[1].low);
    }
    return finalDanger;
}