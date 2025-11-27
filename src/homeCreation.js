import restaurantImage from './images/restaurant.jpg';

export function initHome() {
    const content = document.querySelector('#content');
    
    // create elements
    const title = document.createElement('h1');
    title.textContent = "Amit's Restaurant";
    
    const img = document.createElement('img');
    img.src = restaurantImage;
    
    const subtitle = document.createElement('h2');
    subtitle.textContent = "Amit's restaurant just ENJOY 😊";
    
    // append elements
    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(subtitle);
}
