const { expect } = require('@playwright/test');

export class registerUserPage {

   constructor(page) {
      this.page = page;
      this.name = page.locator('input[id="nome"]')
      this.email = page.locator('input[id="email"]')
      this.password = page.locator('input[id="password"]')
      this.adm = page.locator('input[id="administrador"]')
     
      }

   async fillFormNormalUser(name, email, password, administrator) {
    await this.name.fill(name)
    await this.email.fill(email)
    await this.password.fill(password)

    if(administrator == true){
      await this.adm.click()
    } 
    await this.page.locator('button[data-testid="cadastrarUsuario"]').click()
    
  }

}