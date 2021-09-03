// import { UserData } from './user-data.js';

export const USERDATA = 'USERDATA';

export function setUserData(UserData) {
    const stringyArray = JSON.stringify(UserData);
    localStorage.setItem(USERDATA, stringyArray);
}

export function getUserData() {
    const userArray = localStorage.getItem(USERDATA);

    const parseArray = JSON.parse(userArray);
    
    return parseArray;
}

export function findById(UserData, id) {
    console.log(UserData, id);
    for (let user of UserData) {
        if (user.id === id) {
            return user;
        }
    }
}