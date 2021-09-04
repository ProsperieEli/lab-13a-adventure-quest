import { setUserData } from './local-storage-utils.js';

const ourForm = document.querySelector('#our-form');

ourForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(ourForm);

    const userName = data.get('user-name');
    const userAnimal = data.get('animal');
    const UserData = {
        name: userName,
        animal: userAnimal,
        shyness: 0,
        danger: 0,
        visited: {}
    };
    setUserData(UserData);
   
    window.location = './sky-selection-page/';

});
  // const player = document.querySelector('input:checked');