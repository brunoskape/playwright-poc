// @ts-check
const { test, expect } = require('@playwright/test');
import { regiserUserPage } from '../pages/registerUserPage';

test.beforeEach(async ({page}) => {
  await page.goto('https://front.serverest.dev/login');

    await page.locator('input[id="email"]').fill('fulano@qa.com')
    await page.locator('input[id="password"]').fill('teste')
    await page.locator('button[type="submit"]').click()
  
  });


test('register user', async ({page}) => {

    await page.locator('a[data-testid="cadastrarUsuarios"]').click()
    const registerUserPage = new regiserUserPage(page);
    registerUserPage.fillFormNormalUser('bruno teste', 'bruno@qa.com', 'teste')
    const locator = page.locator('//td[text()="bruno teste"]')

    await expect(locator).toContainText('bruno teste')
  
  })