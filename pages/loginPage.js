const { expect } = require('@playwright/test');

export class loginPage {

   constructor(page) {
      this.page = page;
      this.email = page.locator('input[id="email"]')
      this.password = page.locator('input[id="password"]')
      this.button = page.locator('button[type="submit"]')
     
      }

   async login(email, password) {
    await this.email.fill(email)
    await this.password.fill(password)

    await this.button.click()
    
  }
}