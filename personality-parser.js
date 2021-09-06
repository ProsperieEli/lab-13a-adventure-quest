import { getUserData } from './local-storage-utils.js';
import personalityType from './data/personality-data.js';

const userData = getUserData();

let shynessResponse = '';
let dangerlvl = '';

export function parseShyness() {
    if (userData.shyness > 0) { 
        shynessResponse = (personalityType[0].low);
    }
    else if (userData.shyness === 0) { 
        shynessResponse = (personalityType[0].mid);
    }
    else { 
        shynessResponse = (personalityType[0].high);
    }
    return shynessResponse;
}

export function parseDanger() {
    if (userData.danger > 0) { 
        dangerlvl = (personalityType[1].low);
    }
    else if (userData.danger === 0) { 
        dangerlvl = (personalityType[1].mid);
    }
    else { 
        dangerlvl = (personalityType[1].high);
    }
    return dangerlvl;
}