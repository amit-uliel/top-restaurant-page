import { initHome } from './homeCreation';
import { initMenu } from './menuCreation';

initHome();

setupTab("home", initHome);
setupTab("menu", initMenu);

function setupTab(buttonId, initFunction) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
        clearContent();
        initFunction();
    });
}

function clearContent() {
    document.querySelector('#content').innerHTML = '';
}