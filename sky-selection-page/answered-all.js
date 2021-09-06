import { getUserData } from '../local-storage-utils.js';
import choices from '../data/choices-data.js';

const userData = getUserData();

export function answeredQuestions() {
    let finishedAll = true;
    for (let page of choices) {
        if (!userData.visited[page.id]) {
            finishedAll = false;
        }
    }
    return finishedAll;    
}