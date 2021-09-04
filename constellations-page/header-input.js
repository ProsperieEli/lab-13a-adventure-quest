import { getUserData } from '../local-storage-utils.js';

export function renderUserHeader() {

    const userData = getUserData();
    const currentStatus = document.getElementById('current-status');

    currentStatus.textContent = `${userData.name} is ${'comfortable'} and ${'safe'}`;

}