import { test, expect } from "@playwright/test";


    test("GET - list all users", async ({ request }) => {
      const response = await request.get("/usuarios");
  
      await expect(response).toBeOK()
})
 