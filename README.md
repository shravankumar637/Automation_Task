# Automation_Task

. Test Automation Framework Setup
**Test Execution:**
To run your tests, use the following command:
**npx playwright test --reporter=line,allure-playwright**
This command will execute your tests and generate both a console output report and an Allure report.
**Report Generation:**

**Automated HTML Report:**
The --reporter=line option generates a simple line-based report directly in the console during test execution.

**Allure Reports:**
Allure reports provide detailed, visually appealing test reports. You have configured allure-playwright as a reporter, which integrates Allure with Playwright.
To generate the Allure report after test execution:
**allure generate ./allure-results -o ./allure-report**
This command processes the results from the allure-results directory and generates the HTML report in the allure-report directory.
**To view the Allure report in your default browser:**
"allure open ./allure-report"

**Parallel Test Execution:**
Parallel execution of tests is enabled, which helps to speed up test execution by running multiple tests concurrently. This is handled automatically by Playwright’s built-in parallelism capabilities.

