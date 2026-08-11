import { expect, test } from "@playwright/test";

test("shows a traceable answer and creates a decision brief", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Ask the company. See the evidence. Decide faster.",
    }),
  ).toBeVisible();
  await expect(page.getByText("Synthetic data only")).toBeVisible();

  await page.getByRole("link", { name: "Try the workspace" }).click();
  await expect(
    page.getByRole("heading", {
      name: "The journey is losing trust before it loses intent.",
    }),
  ).toBeVisible();

  await page
    .getByRole("button", { name: "What should the team test next?" })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "Fix the known defect; test the uncertain behaviour.",
    }),
  ).toBeVisible();

  await page.locator(".source-reference").first().click();
  await expect(page.locator(".evidence-card.is-active")).toHaveCount(1);

  await page.getByRole("button", { name: "Decision brief" }).click();
  await expect(
    page.getByText("Smallest useful test", { exact: true }),
  ).toBeVisible();
  await expect(
    page.locator("#demo").getByText("Primary metric", { exact: true }),
  ).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  await page.screenshot({
    path: "test-results/decision-desk-desktop.png",
    fullPage: true,
  });
});

test("remains usable at a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Ask the company. See the evidence. Decide faster.",
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Try the workspace" }).click();
  await expect(
    page.getByRole("heading", {
      name: "The journey is losing trust before it loses intent.",
    }),
  ).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  await page.screenshot({
    path: "test-results/decision-desk-mobile.png",
    fullPage: true,
  });
});
