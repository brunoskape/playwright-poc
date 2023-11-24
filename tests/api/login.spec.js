const { test, expect } = require('@playwright/test')
const { getUserBody  } = require ('../lib/helper')

let body

test.beforeEach(async ({ request }) => {
  body = getUserBody()
  await request.post('/usuarios', { data: body })
})


  test("login success", async ({ request, baseURL }) => {
      const response = await request.post(`${baseURL}/login`, {
        data: {
          email: body.email,
          password: body.password,
          
      },
      })  
      const responseBody = await response.json()
      await expect(response).toBeOK()
      await expect(responseBody.authorization).toBeTruthy()
      expect(responseBody.message).toEqual("Login realizado com sucesso")
    });
  
  test("login fail", async ({request, baseURL}) => {
      const response = await request.post(`${baseURL}/login`, {
      data: {
        email: 'teste-fail@test.com',
        password: body.password,
        
    },
    })  
    const responseBody = await response.json()
    expect(responseBody.message).toEqual("Email e/ou senha inválidos")
    expect(response.status()).toBe(401)
    
});