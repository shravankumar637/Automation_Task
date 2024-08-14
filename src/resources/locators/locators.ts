import { Locator, Page } from '@playwright/test';

/**
 * Class: Locators
 * This class contains all the locators used throughout the tests for the Polestar website.
 * The locators are defined as properties of the class and initialized in the constructor.
 * This structure allows for centralized management of locators, making it easier to maintain
 * and update them as needed.
 */
export class Locators {
  page: Page;

  // General locators
  heading: Locator;
  acceptCookiesButton: Locator;
  bannerLink: Locator;
  menuLabel: Locator;

  // Specific locators for Polestar images and links
  polestar3Image: Locator;
  polestar2Image: Locator;
  polestar4Image: Locator;
  discoverLink: Locator;
  bookTestDriveLink: Locator;
  discoverLinkForPolestar3: Locator;
  discoverLinkForPolestar2: Locator;
  discoverLinkForPolestar4: Locator;
  designAndOrderForPolestar2: Locator;
  designAndOrderForPolestar4: Locator;
  takeASeat: Locator;
  polestar2AsCompanyCar: Locator;

  // Individual menu item locators
  polestar2MenuItem: Locator;
  polestar3MenuItem: Locator;
  polestar4MenuItem: Locator;
  preOwnedMenuItem: Locator;
  bookTestDriveMenuItem: Locator;
  offersMenuItem: Locator;
  shopMenuItem: Locator;
  chargingMenuItem: Locator;
  visitPolestarMenuItem: Locator;
  companyCarMenuItem: Locator;
  ownPolestarMenuItem: Locator;
  newsMenuItem: Locator;
  sustainabilityMenuItem: Locator;
  aboutPolestarMenuItem: Locator;
  supportMenuItem: Locator;
  homeMenuItem: Locator;
  visitPolestar: Locator;
  polestar3Button: Locator;
  polestar2Button: Locator;
  polestar4Button: Locator;
  specialIdButton: Locator;

  /**
   * Constructor: Initializes the locators for the page.
   * @param page - The Page object, representing the browser page.
   */
  constructor(page: Page) {
    this.page = page;
    this.initializeLocators();
  }


  /**
   * Method: initializeLocators
   * Initializes all the locators using Playwright's locator strategies.
   * This method is called within the constructor and sets up all the locators
   * based on the structure of the Polestar website.
   */
  private initializeLocators(): void {
    this.heading = this.page.getByRole('heading', { name: 'Hello from Polestar' });
    this.acceptCookiesButton = this.page.locator("//*[normalize-space()='Accept all']");
    this.bannerLink = this.page.getByRole('banner').getByRole('link', { name: 'Hem' });
    this.menuLabel = this.page.locator("svg[aria-label='menu']");

    this.polestar3Image = this.page.getByRole('img', { name: 'A white Polestar 3 SUV is' });
    this.polestar2Image = this.page.getByRole('img', { name: 'Side birds eye view of Polestar 2' });
    this.polestar4Image = this.page.getByRole('img', { name: 'A white Polestar 4 surrounded by red flowers' });
    
    this.discoverLinkForPolestar3 = this.page.locator("(//*[normalize-space()='Upptäck'])[1]");
    this.bookTestDriveLink = this.page.getByRole('link', { name: 'Book a Test Drive' });
    this.discoverLinkForPolestar2 = this.page.locator("(//*[normalize-space()='Upptäck'])[5]");
    this.discoverLinkForPolestar4 = this.page.locator("(//*[normalize-space()='Upptäck'])[8]");

    this.designAndOrderForPolestar2 = this.page.locator("#140804533")
    this.designAndOrderForPolestar4 = this.page.locator("#162569177")

    this.visitPolestar = this.page.locator("h3[aria-label=' Besök Polestar'] span[aria-hidden='true']")
    this.takeASeat = this.page.locator("//span[normalize-space()='Ta plats i förarsätet']");
    this.polestar2AsCompanyCar = this.page.locator("//span[normalize-space()='Polestar 2 som företagsbil']");

    this.polestar2MenuItem = this.page.getByRole('menuitem', { name: 'Polestar 2' });
    this.polestar3MenuItem = this.page.getByRole('menuitem', { name: 'Polestar 3' });
    this.polestar4MenuItem = this.page.getByRole('menuitem', { name: 'Polestar 4' });
    this.preOwnedMenuItem = this.page.getByRole('menuitem', { name: 'Pre-owned' });
    this.bookTestDriveMenuItem = this.page.locator("//a[@id='171158143']//span[contains(text(),'Boka provkörning')]");
    this.offersMenuItem = this.page.locator("//span[normalize-space()='Erbjudanden']");
    this.shopMenuItem = this.page.getByRole('menuitem', { name: 'Shop' });
    this.chargingMenuItem = this.page.locator("//span[normalize-space()='Laddning']");
    this.visitPolestarMenuItem = this.page.locator("//a[@id='171424066']//span[contains(text(),'Besök Polestar')]");
    this.companyCarMenuItem = this.page.locator("//span[normalize-space()='Tjänstebil och företag']");
    this.ownPolestarMenuItem = this.page.locator("//span[normalize-space()='Äga en Polestar']");
    this.newsMenuItem = this.page.locator("//span[normalize-space()='Nyheter']");
    this.sustainabilityMenuItem = this.page.locator("//span[normalize-space()='Hållbarhet']");
    this.aboutPolestarMenuItem = this.page.locator("//span[normalize-space()='Om Polestar']");
    this.homeMenuItem = this.page.locator("//span[normalize-space()='Hem']");
    this.supportMenuItem = this.page.locator("//span[normalize-space()='Support']");


    this.polestar3Button = this.page.locator('#dlHQDWeWQZaIAaoLMmhnZw');
    this.polestar2Button = this.page.locator('#YEbvymNVSXC97BE0p-lvqg');
    this.polestar4Button = this.page.locator('[id="\\31 62569177"]');
    this.specialIdButton = this.page.locator('[id="\\31 40804533"]');
  }
}
