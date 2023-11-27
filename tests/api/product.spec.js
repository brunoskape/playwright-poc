import { test, expect } from "@playwright/test";

  test("GET - list all products", async ({ request }) => {
    const response = await request.get("/produtos");
    await expect(response).toBeOK()
})
 