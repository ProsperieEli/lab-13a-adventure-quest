//const skyData = new URLSearchParams(window.location.search);
import { getUserData } from '../local-storage-utils.js';

const userInfo = document.getElementById('display-user');
const userData = getUserData();
userInfo.textContent = `Name: ${userData.name}, ${userData.animal}`;
//shyness > 0 && userData.shyness
