//const skyData = new URLSearchParams(window.location.search);

import { getUserData } from '../local-storage-utils.js';

const userInfo = document.getElementById('display-user');
const userData = getUserData();
userInfo.textContent = `${userData.name} is still ${userData.personality}`;

// add function to check if userData.visited has a true for a link id
// if so, change the link
// if all do, redirect to results page

document.getElementById('space-audio').volume = 0.1;