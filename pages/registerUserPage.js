// playwright-dev-page.js
const { expect } = require('@playwright/test');

export class regiserUserPage {

   constructor(page) {
      this.page = page;
      this.name = page.locator('input[id="nome"]')
      this.email = page.locator('input[id="email"]')
      this.password = page.locator('input[id="password"]')
     
      }

   async fillFormNormalUser(name, email, password) {
    await this.name.fill(name)
    await this.email.fill(email)
    await this.password.fill(password)
    await this.page.locator('button[data-testid="cadastrarUsuario"]').click()

  }
}