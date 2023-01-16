const { expect } = require('@playwright/test');

export class productPage {

   constructor(page) {
      this.page = page;
      this.name = page.locator('input[id="nome"]')
      this.price = page.locator('input[id="price"]')
      this.quantity = page.locator('input[id="quantity"]')
      this.description = page.locator('textarea[id="description"]')
      this.button = page.locator('.btn-primary')
     
      }

   async registerProduct(name, price, description, quantity) {
    await this.name.fill(name)
    await this.price.fill(price)
    await this.quantity.fill(quantity)
    await this.description.fill(description)
    await this.button.click()

  
  }
}
