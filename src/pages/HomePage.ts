import { Page, expect } from '@playwright/test';
import { Locators } from '../resources/locators/locators';

/**
 * HomePage class encapsulates actions and verifications related to the Polestar home page.
 * It utilizes the Locators class for locating elements and performing actions on them.
 */
export class HomePage {
  private locators: Locators;
  page: Page;


  /**
   * Constructor initializes the locators and sets up the Page object.
   * @param page - Playwright Page object to interact with the browser.
   */
  constructor(page: Page) {
    this.locators = new Locators(page);
  }


  /**
   * Navigates to the Polestar homepage and accepts cookies.
   * Also verifies if the banner link is visible.
   */
  async navigateToHomePage() {
    await this.locators.page.goto('https://www.polestar.com/se');
    await this.acceptCookies();
    await this.verifyBannerLinkVisible();
  }


  /**
   * Accepts cookies by clicking the accept cookies button.
   */
  async acceptCookies() {
    await this.locators.acceptCookiesButton.click();
  }
 
  /**
   * Verifies if the banner link is visible on the homepage.
   */
  async verifyBannerLinkVisible() {
    await expect(this.locators.bannerLink).toBeVisible();
  }

  /**
   * Verifies if the Polestar 3 image and associated buttons are visible.
   */
  async verifyPolestar3ImageAndButtons() {
    await expect(this.locators.menuLabel).toBeVisible();
    await expect(this.locators.polestar3Image).toBeVisible();
    await expect(this.locators.discoverLinkForPolestar3).toBeVisible();
    await expect(this.locators.polestar3Button).toBeVisible();
  }

  /**
   * Verifies if the Polestar 2 image and associated buttons are visible.
   */
  async verifyPolestar2ImageAndButtons() {
    await expect(this.locators.polestar2Image).toBeVisible();
    await expect(this.locators.discoverLinkForPolestar2).toBeVisible();
    await expect(this.locators.polestar2Button).toBeVisible();
  }

  /**
   * Verifies if the Polestar 4 image and associated buttons are visible.
   */
  async verifyPolestar4ImageAndButtons() {
    await expect(this.locators.polestar4Image).toBeVisible();
    await expect(this.locators.discoverLinkForPolestar4).toBeVisible();
    await expect(this.locators.polestar4Button).toBeVisible();
  }

  /**
   * Verifies if the important links on the homepage are visible.
   */
  async verifyLinks() {
    await expect(this.locators.visitPolestar).toBeVisible();
    await expect(this.locators.takeASeat).toBeVisible();
    await expect(this.locators.polestar2AsCompanyCar).toBeVisible();

  }

   /**
   * Opens the main menu and verifies the visibility of menu items.
   */
  async openMenuAndVerifyOptions() {
    await this.locators.menuLabel.click();
    await expect(this.locators.polestar2MenuItem).toBeVisible();
    await expect(this.locators.polestar3MenuItem).toBeVisible();
    await expect(this.locators.polestar4MenuItem).toBeVisible();
    await expect(this.locators.preOwnedMenuItem).toBeVisible();
    await expect(this.locators.bookTestDriveMenuItem).toBeVisible();
    await expect(this.locators.offersMenuItem).toBeVisible();
    await expect(this.locators.shopMenuItem).toBeVisible();
    await expect(this.locators.chargingMenuItem).toBeVisible();
    await expect(this.locators.visitPolestarMenuItem).toBeVisible();
    await expect(this.locators.companyCarMenuItem).toBeVisible();
    await expect(this.locators.ownPolestarMenuItem).toBeVisible();
    await expect(this.locators.newsMenuItem).toBeVisible();
    await expect(this.locators.sustainabilityMenuItem).toBeVisible();
    await expect(this.locators.aboutPolestarMenuItem).toBeVisible();
    await expect(this.locators.homeMenuItem).toBeVisible();
  }


  /**
   * Navigates to a specific menu item based on the provided name.
   * @param menuItem - The name of the menu item to navigate to.
   */
  async navigateToMenuItem(menuItem: string) {
    await this.locators.menuLabel.click();
    switch (menuItem) {
      case 'Polestar 2':
        await this.locators.polestar2MenuItem.click();
        break;
      case 'Polestar 3':
        await this.locators.polestar3MenuItem.click();
        break;
      case 'Polestar 4':
        await this.locators.polestar4MenuItem.click();
        break;
      case 'Pre-owned':
        await this.locators.preOwnedMenuItem.click();
        break;
      case 'Book a Test Drive':
        await this.locators.bookTestDriveMenuItem.click();
        break;
      case 'Offers':
        await this.locators.offersMenuItem.click();
        break;
      case 'Shop':
        await this.locators.shopMenuItem.click();
        break;
      case 'Charging':
        await this.locators.chargingMenuItem.click();
        break;
      case 'Visit Polestar':
        await this.locators.visitPolestarMenuItem.click();
        break;
      case 'Company Car':
        await this.locators.companyCarMenuItem.click();
        break;
      case 'Own a Polestar':
        await this.locators.ownPolestarMenuItem.click();
        break;
      case 'News':
        await this.locators.newsMenuItem.click();
        break;
      case 'Sustainability':
        await this.locators.sustainabilityMenuItem.click();
        break;
      case 'About Polestar':
        await this.locators.aboutPolestarMenuItem.click();
        break;
      case 'Home':
        await this.locators.homeMenuItem.click();
        break;
      default:
        throw new Error(`Menu item "${menuItem}" not found`);
    }
  }
}
