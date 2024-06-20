import { test, expect } from '@playwright/test';

const {EMAIL_USERNAME, PASSWORD} = process.env; 

test('POST User, POST Generate Token and DELETE User', async ({ request }) => {
  const postUser = await request.post(`/Account/v1/User`, {
    data: {
      userName: EMAIL_USERNAME,
      password: PASSWORD
    }
  });
  expect(postUser.ok()).toBeTruthy();
  const postUserResponse = await postUser.json()

  const postGenerateToken = await request.post(`/Account/v1/GenerateToken`, {
    data: {
      userName: EMAIL_USERNAME,
      password: PASSWORD
    }
  })
  expect(postGenerateToken.ok()).toBeTruthy();
  const postGenerateTokenResponse = await postGenerateToken.json()

  const deleteUser = await request.delete(`/Account/v1/User/${postUserResponse.userID}`, {
    data: {
      userName: EMAIL_USERNAME,
      password: PASSWORD
    },
    headers: {
      Authorization: `Bearer ${postGenerateTokenResponse.token}`
    }
  })
  expect(deleteUser.ok()).toBeTruthy();
});
