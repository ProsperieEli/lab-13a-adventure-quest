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

const userLinks = document.getElementsByTagName('A');
console.log(userLinks);
// console.log(userLinks[0].innerText);

// const linkId = userLinks[].innerText;

// document.getElementById('space-audio').volume = 0.1;

// const userInfo = document.getElementById('display-user');
// const userData = getUserData();
// userInfo.textContent = `${userData.name} is still ${userData.personality}`;


document.body.addEventListener('click', function(event) {
    // filter out clicks on any other elements
    if (event.target.nodeName === 'A' && event.target.getAttribute('aria-disabled') === 'true') {
        event.preventDefault();
    }
});

function disableLink(link) {
    // 1. Add isDisabled class to parent span
    link.parentElement.classList.add('link');
    // 2. Store href so we can add it later
    link.setAttribute('data-href', link.href);
    // 3. Remove href
    link.href = '';
    // 4. Set aria-disabled to 'true'
    link.setAttribute('aria-disabled', 'true');
}

function enableLink(link) {
    // 1. Remove 'isDisabled' class from parent span
    link.parentElement.classList.remove('link');
    // 2. Set href
    link.href = link.getAttribute('data-href');
    // 3. Remove 'aria-disabled', better than setting to false
    link.removeAttribute('aria-disabled');
}


    
    console.log(choices);
for (let view of choices) {
    if (userViewing.visited[view.constellationId]) {
        // userLinks.innerText === (alert('You cannot enter again.'));
        
        alert('hiii');
        disableLink(userLinks);
    } else {
        enableLink(userLinks);
    }
   
    
}
