// import { getUserData } from '../local-storage-utils.js';
import { answeredQuestions } from './answered-all.js';
import { renderUserHeader } from '../header-input.js';
import { getUserData } from '../local-storage-utils.js';
import choices from '../data/choices-data.js';


renderUserHeader();

// Setting a declaration for the visited pages


const finished = answeredQuestions();
if (finished) {
    window.location = '../results-page/index.html';
}


const userViewing = getUserData();

const userLinks = document.getElementsByTagName('A')
// console.log(userLinks[0].innerText);

// const linkId = userLinks[].innerText;


for (let view of choices) {
    if (userViewing.visited[view.id]) {
        // userLinks.innerText === (alert('You cannot enter again.'));
        userLinks.innerText;
        console.log(userLinks.innerText);
    }
   
    
}
  
// document.getElementById('space-audio').volume = 0.1;

// const userInfo = document.getElementById('display-user');
// const userData = getUserData();
// userInfo.textContent = `${userData.name} is still ${userData.personality}`;

// const anchors = document.querySelector('a');
// const links = anchors.href;
// const search = links.location.search;
// console.log(search);