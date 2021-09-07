import { getUserData } from '../local-storage-utils.js';
import choices from '../data/choices-data.js';

const userData = getUserData();

export function answeredQuestions() {
    for (let page of choices) {
        if (!userData.visited[page.id]) {
            return false;
        }
    }
    return true;    
}