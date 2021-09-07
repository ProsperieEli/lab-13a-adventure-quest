import constellation from '../data/choices-data.js';
import { getUserData } from '../local-storage-utils.js';

const formTag = document.getElementById('links');
const userData = getUserData();

for (let constellationChoice of constellation) {
    if (!userData.visited[constellationChoice.id]) {

        const link = document.createElement('a');
        const img = document.createElement('img');
        const div1 = document.createElement('div');

        link.href = `../constellations-page/?id=${constellationChoice.id}`;
        img.src = constellationChoice.skyimage;
        div1.textContent = constellationChoice.skyname;
        div1.classList.add('constellation-link');


        link.append(img);
        link.append(div1);
        formTag.append(link);

    } else {
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const section = document.createElement('section');
        div2.classList.add('constellation-link');
        div2.style.textDecoration = 'line-through';
        div2.textContent = constellationChoice.skyname;
        img.src = constellationChoice.skyimage;

        section.append(img);
        section.append(div2);
        formTag.append(section);
    }

}