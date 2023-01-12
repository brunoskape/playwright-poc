// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('https://front.serverest.dev/login');

})


test('login success', async ({ page }) => {
  await page.locator('input[id="email"]').fill('fulano@qa.com')
  await page.locator('input[id="password"]').fill('teste')
  await page.locator('button[type="submit"]').click()

  const locator = page.locator('.jumbotron > h1:nth-child(1)');
  await expect(locator).toContainText("Bem Vindo")
});

test('login fail', async ({ page }) => {

  await page.locator('input[id="email"]').fill('2fulano@qa.com')
  await page.locator('input[id="password"]').fill('1teste')
  await page.locator('button[type="submit"]').click()

  const locator = page.locator('.alert > span:nth-child(2)');
  await expect(locator).toContainText("Email e/ou senha inválidos")
   
})

test('login with password blank', async ({ page }) => {

  await page.locator('input[id="email"]').fill('2fulano@qa.com')
  await page.locator('button[type="submit"]').click()

  const locator = page.locator('.alert > span:nth-child(2)');
  await expect(locator).toContainText("Password é obrigatório")
   
})



