const Basket = require("../src/basket.js")
describe("Basket", () => {
    let basket
    const smallBasket = 5;
    const mediumBasket = 10;
    const largeBasket = 15;

    beforeEach(() => {
        basket = new Basket();
    });

    //Test 1
    it("Get all basket", () => {
        const expected = []
        let getBasket = basket.getBasket()
        expect(getBasket).toEqual(expected)
    })

    //Test 2
    it("Add items to basket", () => {
        const expected = 
            //{ item: "bagel", quantity: 1, price: 2.99 },
            { item: "brownie", quantity: 3, price: 3.99 }

        //basket.addItem("bagel", 1)
        //basket.addItem("brownie", 3)
        let bagelInBasket = basket.addItem("brownie", 3)
        expect(bagelInBasket).toEqual(expected)
    })
    //Test 2.5
    it("Wrong item added to basket", () => {

        let bagelInBasket = basket.addItem()
        expect(bagelInBasket).toEqual('error invalid input')
    })
    
    //Test 3
    it("Remove bagel from basket", () => {
        const expected = this.basket = [
            { item: "brownie", quantity: 3, price: 3.99 }]

        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)
        let removeItem = basket.removeItem("bagel")
        expect(removeItem).toEqual(expected)
    })

    //Test 4
    it("Alert when basket is full", () => {
        const smallBasket = 5
        const basket = new Basket(smallBasket)
        const expected =

            "Basket full, Please choose a bigger basket."

        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)
        let alert = basket.basketCapacity()
        expect(alert).toEqual(expected)
    })
    //Test 4.5
    it("Alert when basket is full", () => {
        const  mediumBasket = 10
        const basket = new Basket(mediumBasket)
        const expected =

            "You have 2 spaces left in basket"

        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)
        let alert = basket.basketCapacity()
        expect(alert).toEqual(expected)
    })

    //Test 5
    it("Create basket with larger size", () => {
        const expected = this.basketSize = largeBasket

        new Basket(largeBasket)
        let checkSize = this.basketSize
        expect(checkSize).toEqual(expected)
    })

    //Test 6
    it("Alert when trying to remove item that doesnt exist inside basket", () => {
        const expected = "This item is not in the basket."

        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)
        let alert = basket.removeItem("Kebab", 10)
        expect(alert).toEqual(expected)
    })

    //Test 7 
    it("price checker for items", () => {
        const menuItem = {name: 'brownie', price: 3.99}
        const expected = menuItem.price

        let checkPrice = basket.priceChecker("brownie")
        expect(checkPrice).toEqual(expected)
    })

    //Test 7.5 
    it("price checker wrong item type entered", () => {
        let checkPrice = basket.priceChecker(undefined)
        expect(checkPrice).toEqual('error invalid input')
    })

    //Test 8
    // it("favourite bagel quantity", () => {
    //     const expected = [{ item: "chocolateBagel", quantity: 1, price: 4.99 },
    //     { item: "chocolateBagel", quantity: 1, price: 4.99 },
    //     { item: "chocolateBagel", quantity: 1, price: 4.99 }]

    //     basket.addItem("chocolateBagel", 1)
    //     basket.addItem("chocolateBagel", 1)
    //     basket.addItem("chocolateBagel", 1)
    //     let alert = basket.getBasket()
    //     expect(alert).toEqual(expected)
    // })
    
    //Test 8
    it("basket total", () => {
        const expected = "£29.93"
        
        basket.addItem("chocolateBagel", 3)
        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)
        let total = basket.basketTotal()
        expect(total).toEqual(expected)
    })
})