import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

/**
 * Test Suite: Home Page Tests
 * This test suite includes various tests to verify the presence and functionality
 * of elements on the Polestar home page, such as images, buttons, links, and menu options.
 */

/**
 * beforeEach Hook: Set up before each test
 * This hook is executed before each individual test in the suite. It navigates to the
 * Polestar home page and ensures that the banner link is visible.
 */
test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigating to the home page
  await homePage.navigateToHomePage();

  // Verifying that the banner link is visible
  await homePage.verifyBannerLinkVisible();
});

/**
 * afterEach Hook: Clean up after each test
 * This hook is executed after each individual test in the suite. It closes the page
 * to ensure a clean state for the next test.
 */
test.afterEach(async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigating to the home page
  await page.close();
});

/**
 * Test Case: Verify Polestar 3 image and buttons
 * This test verifies that the image and associated buttons for the Polestar 3 model
 * are present on the home page.
 */
test('Verify Polestar 3 image and buttons', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyPolestar3ImageAndButtons();
});

/**
 * Test Case: Verify Polestar 2 image and buttons
 * This test verifies that the image and associated buttons for the Polestar 2 model
 * are present on the home page.
 */
test('Verify Polestar 2 image and buttons', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyPolestar2ImageAndButtons();
});

/**
 * Test Case: Verify Polestar 4 image and buttons
 * This test verifies that the image and associated buttons for the Polestar 4 model
 * are present on the home page.
 */
test('Verify Polestar 4 image and buttons', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyPolestar4ImageAndButtons();
});

/**
 * Test Case: Verify "Visit Polestar", "Take a seat in the driver's seat" and "Polestar 2 as a company car" options
 * This test verifies the presence of specific links on the home page,
 * including "Visit Polestar", "Take a seat in the driver's seat", and "Polestar 2 as a company car".
 */
test('Verify "Visit Polestar", "Take a seat in the drivers seat" and "Polestar 2 as a company car" options', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.verifyLinks();
});


/**
 * Test Case: Click on Menu button and verify all the menu options
 * This test verifies the menu button options.
 * It opens the menu and checks that all expected menu options are present and correct.
 */
test('Click on Menu button and verify all the menu options', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMenuAndVerifyOptions();
});