// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('https://front.serverest.dev/login');

    await page.locator('input[id="email"]').fill('fulano@qa.com')
    await page.locator('input[id="password"]').fill('teste')
    await page.locator('button[type="submit"]').click()
  
  });


test('register user', async ({page}) => {

    await page.locator('a[data-testid="cadastrarUsuarios"]').click()
    await page.locator('input[id="nome"]').fill('BRUNO TESTE')
    await page.locator('input[id="email"]').fill('BRUNO@QA.COM')
    await page.locator('input[id="password"]').fill('teste')
    await page.locator('button[data-testid="cadastrarUsuario"]').click()


  
  })