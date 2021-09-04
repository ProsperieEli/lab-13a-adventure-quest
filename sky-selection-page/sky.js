//const skyData = new URLSearchParams(window.location.search);
import { getUserData } from '../local-storage-utils.js';

const userInfo = document.getElementById('display-user');
const userData = getUserData();
userInfo.textContent = `${userData.name} is still ${userData.personality}`;
//shyness > 0 && userData.shyness
