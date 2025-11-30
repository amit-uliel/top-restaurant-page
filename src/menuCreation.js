import { createDiv, createH2, createH3, createH4, createP } from "./domHelpers";

const menu = [
    {
        title: "Appetizers",
        dishes: [
            {
                foodName: "Matzo Ball Soup",
                description: "Classic homemade chicken broth with fluffy matzo balls.",
            },
            {
                foodName: "Israeli Salad",
                description: "Fresh tomatoes, cucumbers, bell peppers, and parsley, tossed in olive oil and lemon.",
            },
            {
                foodName: "Gefilte Fish",
                description: "Served with horseradish.",
            },
        ],
    },
    {
        title: "Main Courses",
        dishes: [
            {
                foodName: "Roast Chicken with Herbs",
                description: "Juicy chicken roasted with garlic and fresh herbs.",
            },
            {
                foodName: "Grilled Salmon",
                description: "Served with a side of steamed vegetables.",
            },
            {
                foodName: "Vegetarian Stuffed Peppers",
                description: "Bell peppers stuffed with quinoa, vegetables, and spices.",
            },
        ],
    },
    {
        title: "Sides",
        dishes: [
            {
                foodName: "Potato Kugel",
                description: "Traditional baked potato pudding.",
            },
            {
                foodName: "Tzimmes",
                description: "Sweet carrot and prune stew.",
            },
            {
                foodName: "Challah Bread",
                description: "Freshly baked",
            },
        ],
    },
    {
        title: "Desserts",
        dishes: [
            {
                foodName: "Rugelach",
                description: "Pastry filled with chocolate or fruit jam.",
            },
            {
                foodName: "Chocolate Babka",
                description: "Swirled chocolate cake, freshly baked.",
            },
        ],
    },
    {
        title: "Drinks",
        dishes: [
            {
                foodName: "Orange Juice",
            },
            {
                foodName: "Mint Tea",
            },
            {
                foodName: "CocaCola"
            },
        ],
    },
];

export function initMenu() {
    // create div and append
    const content = document.querySelector('#content');
    const menuTitle = createH2('Our Menu');
    menuTitle.classList.add('menuTitle');
    content.appendChild(menuTitle);

    // add menu ui
    for (let i = 0; i < menu.length; i++) {
        const foodCategory = createDiv();

        const categoryTitle = createH3(menu[i].title);
        categoryTitle.classList.add('categoryTitle');

        foodCategory.appendChild(categoryTitle);

        const dishes = menu[i].dishes;
        for (let j = 0; j < dishes.length; j++) {
            const { foodName, description } = dishes[j];
            const food = createDiv();
            food.classList.add('food');
            
            food.appendChild(createH4(foodName));
            description && food.appendChild(createP(description));

            foodCategory.appendChild(food);
        }

        content.appendChild(foodCategory);
    }
}