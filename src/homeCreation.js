import restaurantImage from './images/restaurant.jpg';
import { createH1 } from './domHelpers';

export function initHome() {
    const content = document.querySelector('#content');
    
    // create elements
    const homeTitle = createH1("Amit's Restaurant");
    homeTitle.classList.add('homeTitle');
    
    const img = document.createElement('img');
    img.src = restaurantImage;
    
    const homeSubtitle = document.createElement('h2');
    homeSubtitle.textContent = "Amit's restaurant just enjoy 😊🌈";
    homeSubtitle.classList.add('homeSubtitle')
    
    // append elements
    content.appendChild(homeTitle);
    content.appendChild(img);
    content.appendChild(homeSubtitle);
}
