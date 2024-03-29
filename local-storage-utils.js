
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

export function findById(someArray, id) {
    for (let user of someArray) {
        if (user.id === id) {
            return user;
        }
    }
}