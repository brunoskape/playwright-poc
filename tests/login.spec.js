// @ts-check
const { test, expect } = require('@playwright/test');
import { loginPage } from '../pages/loginPage';


test.beforeEach(async ({page}) => {
  await page.goto('https://front.serverest.dev/login');

})


test('login success', async ({ page }) => {

  const loginpage = new loginPage(page)
  loginpage.login('fulano@qa.com','teste')
  const locator = page.locator('.jumbotron > h1:nth-child(1)');

  await expect(locator).toContainText("Bem Vindo")
});

test('login fail', async ({ page }) => {

  const loginpage = new loginPage(page)
  loginpage.login('2fulano@qa.com','1teste')
  const locator = page.locator('.alert > span:nth-child(2)');

  await expect(locator).toContainText("Email e/ou senha inválidos")
   
})

test('login with password blank', async ({ page }) => {

  
  const loginpage = new loginPage(page)
  loginpage.login('2fulano@qa.com','')
  const locator = page.locator('.alert > span:nth-child(2)');
    
  await expect(locator).toContainText("Password é obrigatório")
   
})



