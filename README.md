# spritecloud-demo
### Description:
This document shows the purpose of the repo, installation process, needed tools and executing tests. The created repo is a working demo for spriteCloud technical assignment task 2. Six tests were created, 3 for API and 3 for UI. Repositorie's only requirement is playwright and the dependencies downloaded as part of the initial installation.

### Assumptions:
__General__
- Aim is to understand my way of thinking through coding.


__API__
- API testing should be done with the listed requests, not to test the api endpoints of the site itself.


__UI__
- Tests should be done emmulating how a user would use the app.

### URLs to be used for the demo:
- https://www.saucedemo.com
- https://reqres.in

### Install Node.js
Mac
- Install Homebrew:
    - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Run command: 
     - `brew install node@20`

Windows
- Install [Chocolatey](https://chocolatey.org/install)
- Run command:
    - `choco install nodejs-lts --version="20.18.0"`

Verify Node.js version
- Run command:
    - `node -v`

### Install Playwright
- Run command:
    - `npm init playwright@latest`

### Running tests Options available
__Github Actions:__
- Run all UI tests: runs all UI tests
- Run all API tests: runs all API tests

__Local run with cloned repo: Package.json file has available scripts__
- `npm run test:api`
- `npm run test:ui`
- `npm run show:report`
- `npm run test:ui:mode`

### Useful Links & References:
- [Brew](https://brew.sh)
- [Node](https://nodejs.org/en/download/package-manager)
- [Playwright](https://playwright.dev/docs/intro)

P.S. I usually prefer Cypress but I found this to be a good opportunity to practice what I've learned from courses I've taken on Playwright :upside_down_face: although I gotta say after creating this I now see the appeal for Playwright.
