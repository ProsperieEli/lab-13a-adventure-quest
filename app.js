import { setUserData } from './local-storage-utils.js';

const ourForm = document.querySelector('#our-form');

ourForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(ourForm);

    const userName = data.get('user-name');
    const userPersonality = data.get('personality');
    
    const UserData = {
        name: userName,
        personality: userPersonality,
        shyness: 0,
        danger: 0,
        visited: {}
    };
    setUserData(UserData);

    window.location = './sky-selection-page/';
});