
# Playwright Tests for e2e and API 

  

Playwright Automation to make tests in ui or api 

  


## How to use e2e 
Before using access the e2e: 
```
cd e2e
```
1. Install nodejs dependencies with `npm install`
2. Install playwright browsers with `npx playwright install`

3. Copy the .env.example to .env with: `cp .env.example .env`

4. Fill the .env with your email/user, password and url

```

BASE_URL=https://www.latlong.net
EMAIL_USERNAME=test
PASSWORD=XXXX

```
5. Run the test in **headed** mode with `npm run test` or in **headless** mode with `npm run test:headless`


## How to use api 
Before using access the api: 
```
cd api
```
1. Install nodejs dependencies with `npm install`
2. Copy the .env.example to .env with: `cp .env.example .env`

3. Fill the .env with your email/user, password and url

```

BASE_URL=https://demoqa.com
EMAIL_USERNAME=test
PASSWORD=XXXX

```
5. Run the tests in  `npm run test`
