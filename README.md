# playwrightPOC
This is a sample project to demonstrate Playwright Test usage, running tests against ServeRest API and Front-end.
Sample POC using playwright with tests (API / e2e) in parallel

## Getting Started

Execute in terminal: 

- git clone https://github.com/brunoskape/playwrightPOC.git
- npm i playwright@latest
- npm i @faker-js/faker   
- npx playwright test 
- npx playwright show-report

By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you want to see the browser running the tests, you need to add --headed.