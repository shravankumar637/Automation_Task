**Playwright & TypeScript Testing Framework**

**Overview**
This project is a test automation framework built with Playwright and TypeScript. It is designed to automate both frontend and backend testing. The frontend tests target the Polestar Developer Portal, while the backend tests are focused on the REST API endpoints of Reqres. The framework follows the Page Object Model (POM) design pattern for managing locators and page interactions.

**Project Structure**
The project is organized as follows:

root project
│
├── .github/
├── allure-report/
├── allure-results/
├── node_modules/
├── playwright-report/
├── src/
├── test-results/
├── tests/
│   ├── uiTests/
│   └── apiTests/
├── pages/
├── resources/
│   └── testData/
│       └── backendData.xml
├── package.json
└── playwright.config.ts
Key Directories
/pages/: Contains page objects representing different pages of the frontend (Polestar Developer Portal). Each page object includes locators and methods for interacting with UI elements.
/tests/:
/uiTests/: Contains test scripts for the frontend, leveraging the page objects from /pages/.
/apiTests/: Contains test scripts for the backend, focusing on API endpoint validation.
/resources/testData/: Stores test data files in XML format, such as backendData.xml, used for API testing.
/reports/: Stores generated test reports. Allure is used as the reporting tool.
/docs/: Project documentation and additional resources.

**Setup**

**Prerequisites**
Node.js (v14 or later)
npm or Yarn
Installation
Clone the repository:
git clone <repository-url>
Navigate to the project directory:

cd <project-directory>
**Install dependencies:**
npm install
Configuration
The framework uses the playwright.config.ts file for configuration. Update this file to set base URLs, test reporters, and other settings as needed.

**Running Tests**
Frontend Tests: Run the UI tests using the following command:
npx playwright test tests/uiTests
Backend Tests: Run the API tests using the following command:
npx playwright test tests/apiTests

**Generating Reports**
Test reports are generated automatically using Allure. After running the tests, generate and view the report with:

npx allure generate allure-results --clean
npx allure open

**Page Object Model (POM)**
The framework follows the Page Object Model (POM) design pattern to ensure maintainability and scalability. Each page of the frontend application is represented by a class in the /pages/ directory. These classes encapsulate the logic for interacting with the UI, making the test scripts more readable and easier to maintain.

**Test Data Management**
Test data is stored in XML format under /resources/testData/. The data is loaded and used within the test scripts for both frontend and backend tests, ensuring consistency and reusability.

**CI/CD Integration**
The project includes CI/CD configurations to automate test execution on every commit. The configuration files can be found under the .github/ directory.
