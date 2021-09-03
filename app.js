// import functions and grab DOM elements
import { setUserData } from "./local-storage-utils.js";


const ourForm = document.querySelector('#our-form');
  
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

ourForm.addEventListener('submit', (e) => {
e.preventDefault();

const data = new FormData(ourForm);

const userName = data.get('user-name');
console.log(userName);
const UserData = {
  name: userName,
  animal: '',
  shyness: 0,
  danger: 0,
  visited: {}
};
    setUserData(UserData);
   
    window.location = './Sky';

});
  // const player = document.querySelector('input:checked');