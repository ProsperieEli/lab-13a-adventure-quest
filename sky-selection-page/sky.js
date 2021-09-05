import { getUserData } from '../local-storage-utils.js';
import { answeredQuestions } from './answered-all.js';

const userInfo = document.getElementById('display-user');
const userData = getUserData();
userInfo.textContent = `${userData.name} is still ${userData.personality}`;

const finished = answeredQuestions();
if (finished) {
    window.location = '../results-page/index.html';
}

// document.getElementById('space-audio').volume = 0.1;