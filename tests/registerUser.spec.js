// @ts-check
const { test, expect } = require('@playwright/test');
import { regiserUserPage } from '../pages/registerUserPage';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { faker } from '@faker-js/faker';


const config = {
  dictionaries: [names]
}
const randomName = uniqueNamesGenerator(config); 
const nameFake = faker.name.firstName()
const emailFake = faker.internet.email()


test.beforeEach(async ({page}) => {
  await page.goto('https://front.serverest.dev/login');

    await page.locator('input[id="email"]').fill('fulano@qa.com')
    await page.locator('input[id="password"]').fill('teste')
    await page.locator('button[type="submit"]').click()
  
  });


test('register normal user', async ({page}) => {

    await page.locator('a[data-testid="cadastrarUsuarios"]').click()
    const registerUserPage = new regiserUserPage(page);
    registerUserPage.fillFormNormalUser(nameFake, emailFake, 'teste', false)
    const locator = page.locator(`//td[text()="${nameFake}"]`)
    
    await expect(locator).toContainText(nameFake)
  
  })

  test('register administrator user', async ({page}) => {

    await page.locator('a[data-testid="cadastrarUsuarios"]').click()
    const registerUserPage = new regiserUserPage(page);
    registerUserPage.fillFormNormalUser(nameFake, emailFake, 'teste', true)
    const locator = page.locator(`//td[text()="${nameFake}"]`)

    await expect(locator).toContainText(nameFake)
  
  })