/**
 * Restaurants Configuration File
 *
 * Edit this file to add, remove, or update restaurant options for eating out.
 * Each restaurant has a name, description, type, and menu items.
 *
 * To add a new restaurant:
 *   1. Add a new object to the restaurantsConfig array below
 *   2. Add a corresponding image in restaurants-images.js
 */

const restaurantsConfig = [
    {
        name: "Chipotle",
        desc: "Mexican grill with customizable burritos and bowls",
        type: "Mexican",
        emoji: "🌯",
        items: ["Burrito Bowl", "Tacos", "Quesadilla", "Chips & Guacamole"]
    },
    {
        name: "Chick-fil-A",
        desc: "Classic chicken sandwiches and nuggets",
        type: "Fast Food",
        emoji: "🐔",
        items: ["Chicken Sandwich", "Chicken Nuggets", "Waffle Fries", "Milkshake"]
    },
    {
        name: "Panda Express",
        desc: "American Chinese cuisine with signature orange chicken",
        type: "Chinese",
        emoji: "🥡",
        items: ["Orange Chicken", "Beef & Broccoli", "Fried Rice", "Spring Rolls"]
    },
    {
        name: "Wingstop",
        desc: "Crispy chicken wings with various flavors",
        type: "Wings",
        emoji: "🍗",
        items: ["Classic Wings", "Boneless Wings", "Seasoned Fries", "Celery & Dip"]
    },
    {
        name: "Guapos (Manassas)",
        desc: "Authentic Mexican restaurant with fresh ingredients",
        type: "Mexican",
        emoji: "🇲🇽",
        items: ["Chicken Fajitas", "Beef Enchiladas", "Tacos al Carbon", "Queso & Chips", "Guacamole Fresco"]
    },
    {
        name: "Pizza Hut",
        desc: "Classic pizzas, pasta, and wings",
        type: "Pizza",
        emoji: "🍕",
        items: ["Pepperoni Pizza", "Supreme Pizza", "Breadsticks", "Wings"]
    },
    {
        name: "Subway",
        desc: "Fresh submarine sandwiches made to order",
        type: "Sandwiches",
        emoji: "🥪",
        items: ["Italian BMT", "Turkey Breast", "Meatball Marinara", "Veggie Delite"]
    }
];

// Function to list all available restaurants
function listAllRestaurants() {
    console.log("Available Restaurants:");
    console.log("======================");
    restaurantsConfig.forEach((restaurant, index) => {
        console.log(`${index + 1}. ${restaurant.name} (${restaurant.type})`);
    });
    console.log(`\nTotal: ${restaurantsConfig.length} restaurants`);
    return restaurantsConfig.map(r => r.name);
}

// Function to search for restaurants by name
function searchRestaurants(query) {
    const results = restaurantsConfig.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length === 0) {
        console.log(`No restaurants found matching "${query}"`);
    } else {
        console.log(`Found ${results.length} restaurant(s) matching "${query}":`);
        results.forEach(restaurant => {
            console.log(`- ${restaurant.name}`);
        });
    }
    return results;
}
