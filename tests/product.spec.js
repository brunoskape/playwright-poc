// @ts-check
const { test, expect } = require('@playwright/test');
import { loginPage } from '../pages/loginPage';
import { productPage } from '../pages/productPage';
import { faker } from '@faker-js/faker';

const nameFake = faker.commerce.productName()
const priceFake = faker.commerce.price()
const descriptionFake = faker.commerce.productDescription()


test.beforeEach(async ({page}) => {
  const loginpage = new loginPage(page)
  loginpage.login('fulano@qa.com','teste')
  await page.goto('https://front.serverest.dev/login');
  await page.locator('a[data-testid="cadastrarProdutos"]').click()

})


test('register product success', async ({ page }) => {
  
  const product = new productPage(page)
  product.registerProduct(nameFake,priceFake,descriptionFake, '1')
  const locator = page.locator(`//td[text()="${nameFake}"]`)
    
  await expect(locator).toContainText(nameFake)
  
})