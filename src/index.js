import { initHome } from './homeCreation';
import { initMenu } from './menuCreation';
import { initAbout } from './aboutCreation';
import './styles.css';

initHome();

const tabs = [
    {
        name: "home",
        initFunction: initHome,
    },
    {
        name: "menu",
        initFunction: initMenu,
    },
    {
        name: "about",
        initFunction: initAbout,
    },
];

tabs.forEach(({ name, initFunction }) => {
    setupTab(name, initFunction);
});

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