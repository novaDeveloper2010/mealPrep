/**
 * Meals Configuration File
 *
 * Edit meals.csv to update meal names and their images.
 * Edit this file to update meal details (description, time, cost, ingredients, etc.)
 *
 * Meals are randomly assigned to days - not hardcoded!
 */

// All available meals (will be randomly assigned to days)
const mealsConfig = [
    {
        name: "Spaghetti with Ground Beef",
        desc: "Classic spaghetti topped with seasoned ground beef marinara sauce",
        time: "30 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🍝",
        ingredients: ["Spaghetti pasta", "Ground beef", "Marinara sauce", "Parmesan cheese", "Garlic", "Onion"]
    },
    {
        name: "Strogonoff",
        desc: "Creamy beef strogonoff served over egg noodles",
        time: "40 min",
        difficulty: "Medium",
        cost: "medium-high",
        type: "Dinner",
        emoji: "🍝",
        ingredients: ["Beef strips", "Sour cream", "Egg noodles", "Mushrooms", "Onion", "Beef broth"]
    },
    {
        name: "Chicken Tacos",
        desc: "Soft tortillas filled with seasoned chicken and fresh toppings",
        time: "25 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🌮",
        ingredients: ["Chicken breast", "Taco shells", "Lettuce", "Cheese", "Salsa", "Sour cream", "Tomatoes"]
    },
    {
        name: "Ground Beef Tacos",
        desc: "Crispy shells with seasoned ground beef, lettuce, cheese, and salsa",
        time: "20 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🌮",
        ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomatoes", "Cheese", "Salsa", "Sour cream"]
    },
    {
        name: "Lomo Saltado",
        desc: "Peruvian stir-fry with beef, tomatoes, onions, and fries",
        time: "35 min",
        difficulty: "Medium",
        cost: "medium",
        type: "Dinner",
        emoji: "🥩",
        ingredients: ["Beef sirloin", "Red onions", "Tomatoes", "Potatoes", "Soy sauce", "Rice", "Cilantro"]
    },
    {
        name: "Baked Chicken with Potato",
        desc: "Oven-roasted chicken thighs with crispy roasted potatoes",
        time: "45 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🍗",
        ingredients: ["Chicken thighs", "Potatoes", "Olive oil", "Rosemary", "Garlic powder", "Paprika"]
    },
    {
        name: "Fried Rice",
        desc: "Classic fried rice with vegetables and scrambled eggs",
        time: "25 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🍚",
        ingredients: ["White rice", "Eggs", "Mixed vegetables", "Soy sauce", "Green onions", "Sesame oil"]
    },
    {
        name: "Pesto Pasta with Chicken",
        desc: "Grilled chicken breast sliced over fresh pesto pasta",
        time: "30 min",
        difficulty: "Easy",
        cost: "medium",
        type: "Dinner",
        emoji: "🍝",
        ingredients: ["Pasta", "Chicken breast", "Basil pesto", "Parmesan cheese", "Cherry tomatoes", "Pine nuts"]
    },
    {
        name: "Hamburger",
        desc: "Classic beef burger with lettuce, tomato, and cheese on a brioche bun",
        time: "20 min",
        difficulty: "Easy",
        cost: "medium",
        type: "Dinner",
        emoji: "🍔",
        ingredients: ["Ground beef", "Burger buns", "Lettuce", "Tomato", "Cheese", "Ketchup", "Mustard", "Pickles"]
    },
    {
        name: "Salmon with Asparagus",
        desc: "Pan-seared salmon with roasted asparagus spears",
        time: "25 min",
        difficulty: "Medium",
        cost: "high",
        type: "Dinner",
        emoji: "🐟",
        ingredients: ["Salmon fillet", "Asparagus", "Lemon", "Olive oil", "Dill", "Garlic"]
    },
    {
        name: "Pizza",
        desc: "Homemade pizza with your choice of toppings and melted mozzarella",
        time: "35 min",
        difficulty: "Easy",
        cost: "medium",
        type: "Dinner",
        emoji: "🍕",
        ingredients: ["Pizza dough", "Mozzarella cheese", "Pepperoni", "Pizza sauce", "Italian herbs", "Olive oil"]
    },
    {
        name: "Rice with Chicken and Beans",
        desc: "Savory chicken and beans served over fluffy white rice",
        time: "30 min",
        difficulty: "Easy",
        cost: "low",
        type: "Dinner",
        emoji: "🍚",
        ingredients: ["White rice", "Chicken breast", "Black beans", "Onion", "Cumin", "Garlic", "Bell peppers"]
    },
    {
        name: "Beef Stew With Veggies and Potatoe",
        desc: "Hearty beef stew with tender vegetables and potatoes",
        time: "60 min",
        difficulty: "Medium",
        cost: "medium",
        type: "Dinner",
        emoji: "🥘",
        ingredients: ["Beef chunks", "Potatoes", "Carrots", "Onion", "Celery", "Beef broth", "Tomato paste"]
    },
    {
        name: "Enrollado",
        desc: "Rolled beef stuffed with vegetables and seasonings",
        time: "45 min",
        difficulty: "Medium",
        cost: "medium",
        type: "Dinner",
        emoji: "🥩",
        ingredients: ["Beef flank", "Bell peppers", "Onion", "Carrots", "Garlic", "Olive oil", "Seasonings"]
    }
];

// Function to list all available plates
function listAllPlates() {
    console.log("Available Plates:");
    console.log("=================");
    mealsConfig.forEach((meal, index) => {
        console.log(`${index + 1}. ${meal.name} (${meal.time}, ${meal.difficulty})`);
    });
    console.log(`\nTotal: ${mealsConfig.length} plates`);
    return mealsConfig.map(m => m.name);
}

// Function to search for plates by name
function searchPlates(query) {
    const results = mealsConfig.filter(meal =>
        meal.name.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length === 0) {
        console.log(`No plates found matching "${query}"`);
    } else {
        console.log(`Found ${results.length} plate(s) matching "${query}":`);
        results.forEach(meal => {
            console.log(`- ${meal.name}`);
        });
    }
    return results;
}

// Restaurant options moved to restaurants-config.js
