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

    // add menu ui
    for (let i = 0; i < menu.length; i++) {
        const foodCategory = createDiv();

        const categoryTitle = createH2(menu[i].title);

        foodCategory.appendChild(categoryTitle);

        const dishes = menu[i].dishes;
        for (let j = 0; j < dishes.length; j++) {
            const { foodName, description } = dishes[j];
            const food = createDiv();
            
            food.appendChild(createH3(foodName));
            description && food.appendChild(createP(description));

            foodCategory.appendChild(food);
        }

        content.appendChild(foodCategory);
    }
}

function createDiv() {
    return document.createElement('div');
}

function createH2(text) {
    const h2 = document.createElement('h2');
    h2.textContent = text;
    return h2;
}

function createH3(text) {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    return h3;
}

function createP(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}