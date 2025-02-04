// @ts-check
import { test, expect, request } from '@playwright/test';
import { loginPage } from '../pages/loginPage.spec';
import { securePage } from '../pages/securePage.spec'
import { APIUser } from '../APIs/APIUser';
import {POManager} from '../pages/POManager.spec';

const userCredentials = JSON.parse(JSON.stringify(require("../TestData/userCredentials.json")));
const pageUrls = JSON.parse(JSON.stringify(require("../TestData/pageUrls.json")));



test('Validate successful login using the provided valid credentials', async({page})=>{
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();;
  await loginPage.openApp(pageUrls.loginUrl);
  const securepage = poManager.getSecurePage();
  await loginPage.loginToApplication(userCredentials.UserName, userCredentials.Password);
  const url = await securepage.getCurrentUrl();
  console.log(url);
  expect(url).toBe('https://the-internet.herokuapp.com/secure');
})


test('API test for user', async()=>{
  const context = await request.newContext();
   const util = new APIUser(context);
   let response = await util.getPosts();
})