function createProduct(id, name, description, price) {
    return {
        id,
        name,
        description,
        price
    }
}

let products = []

products.push(createProduct(0, "Hand us money", "The good old fashioned gratuitous giving of money expecting nothing but joy in return. Thank you very much!", 50))
products.push(createProduct(1, "Massage parlor", "We solemnly swear we will employ these funds to rent a whole massage parlor for the entire office.", 4000))
products.push(createProduct(2, "Get puppies", "Your funds will be used to buy some puppies to make our office more cheery.", 150))
products.push(createProduct(3, "Hire clown", "We absolutely need a clown in our lives. With this option we will rent the services of one such professional for a month.", 1200))
products.push(createProduct(4, "Get flowers", "We do like some greenery in our life. For a modest sum, you will beautify our office with a nice colorful friend.", 15))
products.push(createProduct(5, "Appropriate charity", "We pocket money that we will nominally give to starving children in Africa, and you get to pretend you did something nice.", 75))
products.push(createProduct(6, "Give money to Chiantozzo", "Instead of just handing money to the company, you will be sending them directly to Chiantozzo, our best employee. He will stream the unboxing live.", 400))
products.push(createProduct(7, "Placeholder", "Placeholder", 148))
products.push(createProduct(8, "Placeholder", "Placeholder", 81))
products.push(createProduct(9, "Burn money", "In addition to giving us money, we will burn it live! Hell yeah!", 100))
products.push(createProduct(10, "Placeholder", "Placeholder", 580))
products.push(createProduct(11, "Placeholder", "Placeholder", 360))
products.push(createProduct(12, "Placeholder", "Placeholder", 24))
products.push(createProduct(13, "Placeholder", "Placeholder", 896))
products.push(createProduct(14, "Placeholder", "Placeholder", 34))

export { products }