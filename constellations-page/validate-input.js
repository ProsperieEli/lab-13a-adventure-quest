export function validateInput() {
    const radios = document.getElementsByTagName('input');
    let formValid = false;

    let i = 0;

    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        else i++;        
    }
    
    if (!formValid) alert('Be decisive! Select an option.');
    return formValid;
}