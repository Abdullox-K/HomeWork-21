class Food {
    constructor (ingredients=[]) {
        this.ingredients=ingredients
    }
    show() {
        return `Ingredients:${this.ingredients.join(" ")}`
    }
}
module.exports=Food