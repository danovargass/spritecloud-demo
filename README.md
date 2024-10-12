# spritecloud-demo
## Description:
This document aims to show the purpose of the repo as well as the process to install needed tools for executing tests. 

### Assumptions:
General -
- Aim is to understand my way of thinking through coding.
API - 
- API testing should be done with the listed requests, not to test the api endpoints of the site itself.
UI - 
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
Run command:
    - `node -v`

### Install Playwright
- Run command:
    - `npm init playwright@latest`


### Useful Links & References:
- [Brew](https://brew.sh)
- [Node](https://nodejs.org/en/download/package-manager)
- [Playwright](https://playwright.dev/docs/intro)

P.S. I usually prefer Cypress but I found this to be a good opportunity to practice what I've learned from courses I've taken on Playwright :upside_down_face: