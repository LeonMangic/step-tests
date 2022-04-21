# exense Cypress task

This is a solution and guide on how to start testing suite using Node.js and Cypress

## Requirements

Install the Open-Source version of exense step application on-premise on [your machine](https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/).

Install Chrome and the appropriate version of [ChromeDriver](https://chromedriver.chromium.org/downloads) on your machine.

## Installation

Download Node.js for your operating system from the [offical site](https://nodejs.org/en/).

Navigate to the root folder of the task and install the required node packages.

```bash
npm install
```

## Start Cypress test

For Cypress test runner to open, use the following command:

```bash
npm run cypress:open
```
Upon opening of Cypress test runner, click 'Run 1 integration spec' for test to begin or you can click on the stepLogin