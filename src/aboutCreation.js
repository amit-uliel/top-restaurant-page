import { createH2, createP } from "./domHelpers";

export function initAbout() {
    const content = document.querySelector('#content');
    const aboutTitle = createH2("About Us 🤗");
    aboutTitle.classList.add('aboutTitle');

    content.appendChild(aboutTitle);
    
    const aboutP = createP(
            `Welcome to Amit's Restaurant, where every meal is a celebration of fresh ingredients, traditional flavors, and warm hospitality. 
            Our passion is bringing people together over delicious, thoughtfully prepared dishes that satisfy both the heart and the palate. 
            At Amit's Restaurant, we believe that food is more than just a meal - it's an experience. 
            From classic favorites to unique culinary creations, every dish is crafted with care and love, using only the finest ingredients. 
            Whether you're here for a casual lunch, a family dinner, or a special celebration, 
            our goal is to make your visit memorable and enjoyable. 
            Come taste the difference and join us in creating moments worth savoring.`
        );
    aboutP.classList.add('aboutP');

    content.appendChild(aboutP);
}