// @ts-check
const { test, expect } = require("@playwright/test");

test.describe.only("Customer tests", async () => {
  test.describe.configure({ mode: "serial" });

  test.skip("customer create", async ({ page }) => {
    await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
    await page.getByText("Taal").click();
    await page.getByText("Engels").click();

    let usernameLocator = page.locator("#email");
    await usernameLocator.fill("xxx123@gmail.com");
    let paswordLocator = page.locator("#password");
    await paswordLocator.fill("Test12345");
    let signInButton = page.getByText("Log in");
    await signInButton.click();

    await page.getByText("Add customer").first().click();

    let createCustomerDrawer = page
      .getByRole("dialog")
      .filter({ hasText: "Create a new customer" });

    await createCustomerDrawer.locator("#email").fill("xxx123@gmail.com");
    await createCustomerDrawer.locator("#name").fill("Petras Petrauskas");

    await createCustomerDrawer.locator("#dateOfBirth").fill("10-08-1995");
    await createCustomerDrawer.locator("#phoneNumber").fill("+3169098765");
    await createCustomerDrawer.locator("#phoneNumber2").fill("+3169098765");
    await createCustomerDrawer.locator("#address").fill("Lubinų g. 284-2");
    await createCustomerDrawer.locator("#city").fill("Kaunas");
    await createCustomerDrawer.locator("#zipcode").fill("LT-345666");
    await createCustomerDrawer.locator("#notes").fill("Visus Myl");
    await createCustomerDrawer.getByText("Save").click();

    let customerNameLocator = page.getByPlaceholder("Enter search criteria");
    await customerNameLocator.fill("Petras Petrauskas");

    let editIcon = page.getByText("Edit");
    await expect(editIcon).toBeVisible();
    await editIcon.click();

    let editCustomerDrawer = page
      .getByRole("dialog")
      .filter({ hasText: "Edit customer" });

    await expect(editCustomerDrawer.locator("#email")).toHaveValue(
      "akvile.matuk@gmail.com"
    );
    await expect(editCustomerDrawer.locator("#name")).toHaveValue(
      "Petras Petrauskas"
    );

    await expect(
      editCustomerDrawer.locator(".ant-row").filter({ hasText: "Gender" })
    ).toContainText("Female");

    await expect(editCustomerDrawer.locator("#dateOfBirth")).toHaveValue(
      "10-08-1995"
    );
    await expect(editCustomerDrawer.locator("#phoneNumber")).toHaveValue(
      "+3169098765"
    );
    await expect(editCustomerDrawer.locator("#phoneNumber2")).toHaveValue(
      "+3169098765"
    );
    await expect(editCustomerDrawer.locator("#address")).toHaveValue(
      "testStreet g. 284-2"
    );
    await expect(editCustomerDrawer.locator("#city")).toHaveValue("Kaunas");
    await expect(editCustomerDrawer.locator("#zipcode")).toHaveValue(
      "LT-345666"
    );
    await expect(editCustomerDrawer.locator("#notes")).toHaveValue("Visus Myl");
  });

  test.skip("customer editing", async ({ page }) => {
    await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
    await page.getByText("Taal").click();
    await page.getByText("Engels").click();
    let usernameLocator = page.locator("#email");
    await usernameLocator.fill("xxx123@gmail.com");
    let paswordLocator = page.locator("#password");
    await paswordLocator.fill("Test12345");
    let signInButton = page.getByText("Log in");
    await signInButton.click();
    await page
      .locator(".ant-table-row")
      .filter({ hasText: "Petras Petrauskas" })
      .getByText("Edit")
      .click();
    let editCustomerDrawer = page
      .getByRole("dialog")
      .filter({ hasText: "Edit customer" });
    await editCustomerDrawer.locator("#email").fill("xxx123@gmail.com");
    await editCustomerDrawer.locator("#name").fill("Adas Jankauskas");
    await editCustomerDrawer.locator("#gender").click();
    await page.getByText("Male").nth(1).click();
    await editCustomerDrawer.locator("#dateOfBirth").fill("10-08-2000");
    await editCustomerDrawer.locator("#phoneNumber").fill("+3169098764");
    await editCustomerDrawer.locator("#phoneNumber2").fill("+3169098769");
    await editCustomerDrawer.locator("#address").fill("Lašo g. 286-2");
    await editCustomerDrawer.locator("#city").fill("Anykščiai");
    await editCustomerDrawer.locator("#zipcode").fill("LT-27000");
    await editCustomerDrawer.locator("#notes").fill("TESTtestTEST");
    await editCustomerDrawer.getByText("Save").click();

    let editCustomerDrawer1 = page
      .getByRole("dialog")
      .filter({ hasText: "Edit customer" });

    await expect(editCustomerDrawer1.locator("#email")).toHaveValue(
      "xxx123@gmail.com"
    );
    await expect(editCustomerDrawer1.locator("#name")).toHaveValue(
      "Adas Jankauskas"
    );

    await expect(
      editCustomerDrawer1.locator(".ant-row").filter({ hasText: "Gender" })
    ).toContainText("Male");

    await expect(editCustomerDrawer1.locator("#dateOfBirth")).toHaveValue(
      "10-08-2000"
    );
    await expect(editCustomerDrawer1.locator("#phoneNumber")).toHaveValue(
      "+3169098764"
    );
    await expect(editCustomerDrawer1.locator("#phoneNumber2")).toHaveValue(
      "+3169098769"
    );
    await expect(editCustomerDrawer1.locator("#address")).toHaveValue(
      "Lašo g. 286-2"
    );
    await expect(editCustomerDrawer1.locator("#city")).toHaveValue("Anykščiai");
    await expect(editCustomerDrawer1.locator("#zipcode")).toHaveValue(
      "LT-27000"
    );
    await expect(editCustomerDrawer.locator("#notes")).toHaveValue(
      "TESTtestTESt"
    );
  });

  test.skip("employees create", async ({ page }) => {
    await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
    await page.getByText("Taal").click();
    await page.getByText("Engels").click();
    let usernameLocator = page.locator("#email");
    await usernameLocator.fill("xxx123@gmail.com");
    let paswordLocator = page.locator("#password");
    await paswordLocator.fill("Test12345");
    let signInButton = page.getByText("Log in");
    await signInButton.click();
    await page.getByText("Employees").first().click();
    await page.getByText("Add employee").first().click();
    let createEmployeeDrawer = page
      .getByRole("dialog")
      .filter({ hasText: "Create an employee" });

    await createEmployeeDrawer.locator("#email").fill("test@test.com");
    await createEmployeeDrawer.locator("#displayName").fill("Emilija Dirde");
    let languageRow = createEmployeeDrawer.locator(".ant-form-item").filter({ hasText: "Language" });
    languageRow.locator(".ant-select-selector").click();
    await page.getByText("English").first().click();
    let roleRow = createEmployeeDrawer.locator(".ant-row").filter({ hasText: "Roles for New establishment" });
    await page.getByText("Simple employee").first().click();
    await createEmployeeDrawer.getByText("Create", {
      exact: true
    }).click();
  });

  test.skip("employee deleted", async ({ page }) => {
    await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
    await page.getByText("Taal").click();
    await page.getByText("Engels").click();
    let usernameLocator = page.locator("#email");
    await usernameLocator.fill("xxx123@gmail.com");
    let paswordLocator = page.locator("#password");
    await paswordLocator.fill("Test12345");
    let signInButton = page.getByText("Log in");
    await signInButton.click();
    await page.getByText("Employees").first().click();
    await page.getByText("Emilija Dirde").first().click();
    let deletedEmployeeDrawer = page
      .getByRole("dialog")
      .filter({ hasText: "Deleted" });
    await deletedEmployeeDrawer.getByText("Deleted").click();
    await page.getByText("Save").first().click();
  })
});

test.skip("fill customer questionaire", async ({ page }) => {
  await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
  await page.getByText("Taal").click();
  await page.getByText("Engels").click();
  let usernameLocator = page.locator("#email");
  await usernameLocator.fill("xxx123@gmail.com");
  let paswordLocator = page.locator("#password");
  await paswordLocator.fill("Test12345");
  let signInButton = page.getByText("Log in");
  await signInButton.click();
  await page.getByText("Customers").first().click();
  await page.getByText("Dora Test").first().click();
  await page.getByText("Fill questionnaire now").first().click();
  await page.getByText("Simple questionnaire").click();
  let textLocator = page.locator(".ant-input");
  await textLocator.fill("Testas improvizacijai");
  await page.getByText("Continue").first().click();
  await page.getByText("Two").click();
  await page.getByText("Continue").click();
  await textLocator.fill("6777");
  await page.getByText("Continue").click();
  await page.getByText("Yes").first().click();
  await page.getByText("Skip").click();
  await page.getByRole("radio").getByText("7").first().click();
  await page.getByText("Continue").click();
  await page.getByRole("option").getByText("image 2").first().click();
  await page.getByText("Complete").first().click();
});

test.skip("Buying courses", async ({ page }) => {
  await page.goto("https://test-app.re-sence.com/akvile-e2e/admin/login");
  await page.getByText("Taal").click();
  await page.getByText("Engels").click();
  await page.locator("#email").fill("xxx123@gmail.com");
  await page.locator("#password").fill("Test12345");
  await page.getByText("Log in").click();
  await page.getByText("Academy").click();
  await page.getByText("Test 123").click();
  await page.getByText("Confirm (120.00€)").click();
  await page.getByText("iDEAL").click();
  await page.getByText("ING").click();
  await page.getByRole("value").getByText("Failed").first().click();
  await page.getByText("Continue").click();
  await page.getByText("Card").click();
  let cardNumberLocator = page.locator("#cardNumber");
  await cardNumberLocator.fill("378282246310005");
  let cardHolderLocator = page.locator("#cardHolder");
  await cardHolderLocator.fill("Test Test");
  let expiryDateLocator = page.locator("#expiryDate")
  await expiryDateLocator.fill("01/28");
  let securityCodeLocator = page.locator("#verificationCode");
  await securityCodeLocator.fill("1234");
  await page.getByText("Pay").click();
});
